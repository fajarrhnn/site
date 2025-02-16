import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const id: string = req.nextUrl.pathname
    .split("/")
    .filter(Boolean)
    .slice(2)
    .join("/");

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  try {
    const quotes = await prisma.quotes.findMany({
      where: {
        id: id,
      },
    });

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
  } catch (error: any) {
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
