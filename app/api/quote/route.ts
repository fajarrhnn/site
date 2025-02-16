import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const quotes = await prisma.quotes.findMany();

    return NextResponse.json(
      {
        message: `${
          quotes.length > 0 ? "Successfully get all quotes" : "No quotes found"
        }`,
        quotes: quotes.length > 0 ? quotes : null,
      },
      {
        status: quotes.length > 0 ? 200 : 404,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: unknown | any) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error?.message,
        status: 500,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const { quote, author, ig_user } = await req.json();

  try {
    const newQuote = await prisma.quotes.create({
      data: {
        quote: quote,
        author: author,
        ig_user: ig_user,
      },
    });
    return NextResponse.json({ newQuote }, { status: 201 });
  } catch (error: unknown | any) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error?.message,
        status: 500,
      },
      { status: 500 }
    );
  }
}
