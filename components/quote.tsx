"use client";

import { HeartIcon, SendIcon } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { QuoteTypes } from "@/types/quote";
import { useToast } from "@/hooks/use-toast";

export default function Quote({ quotes }: { quotes: QuoteTypes }) {
  const { id, quote, author, ig_user, createdAt } = quotes;
  const { toast } = useToast();

  function censoredName(name: string) {
    if (name.length <= 2) {
      return name;
    }

    const firstLetter = name.charAt(0);
    const lastLetter = name.charAt(name.length - 1);
    const censored = "*".repeat(name.length - 1);

    return firstLetter + censored + lastLetter;
  }

  const shareQuote = (id: string) => {
    const UrlQuote = `${window.location.href}q/${id}`;

    window.navigator.clipboard
      .writeText(UrlQuote)
      .then(() => {
        toast({
          title: "Tautan berhasil disalin!",
          description: `${window.location.href}q/${id}`,
        });
      })
      .catch(() => {
        toast({
          title: "Gagal menyalin tautan!",
          variant: "destructive",
        });
      });
  };

  return (
    <Card key={id}>
      <CardHeader>
        <Link href={`/q/${id}`}>
          <CardTitle>{quote}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="pt-6 space-y-2">
        <CardDescription className="italic hover:underline">
          <Link
            href={`${
              ig_user === null ? "/" : `https://instagram.com/${ig_user}`
            }`}
            passHref
            target="a_blank"
          >
            by {censoredName(author)}
          </Link>
          {/* <p>{author}</p>
                          <p>{ig_user}</p> */}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <Button size={"icon"} variant={"ghost"}>
            <HeartIcon />
          </Button>
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => shareQuote(id)}
          >
            <SendIcon />
          </Button>
        </div>
        <CardDescription>{format(createdAt, "MM-dd-yyyy")}</CardDescription>
      </CardFooter>
    </Card>
  );
}
