// import { Metadata } from "next";
"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { articlesData } from "@/data/article";
import { Input } from "@/components/ui/input";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Frown } from "lucide-react";

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState(articlesData);

  const searchChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchArticles: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data: any = articlesData.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setArticles(data);
  };

  return (
    <>
      <div className="flex justify-evenly items-center mt-6">
        <h1 className="text-xl text-center font-semibold lg:text-4xl">
          Recent Articles
        </h1>
        <form onSubmit={searchArticles} className="w-1/2 flex space-x-3">
          <Input
            type="text"
            name="search"
            placeholder="React, Next, Node, Wordpress..."
            className="w-full"
            value={searchTerm}
            onChange={searchChangeValue}
          />
        </form>
      </div>

      <main className="col-span-2">
        {articles.map(
          (
            { title, category, postingDate, readingTime, description, href },
            index
          ) => (
            <section
              className="w-full mx-auto space-y-5 py-5 border-black/50 border-b-2"
              key={index}
            >
              <div className="space-y-5">
                <h1 className="text-2xl">{title}</h1>
                <div className="flex space-x-3 items-center">
                  <p className="border-red-500 border text-red-500 px-3 py-0.5 rounded-full">
                    {category}
                  </p>
                  <p>{postingDate}</p>
                  <p> {readingTime} minute read</p>
                </div>
                <p>{description}</p>
                <Link href={href} className="flex items-center">
                  Read Article <ChevronRight />{" "}
                </Link>
              </div>
            </section>
          )
        )}
        {!articles ||
          (articles.length === 0 && (
            <section className="flex justify-center items-center">
              <Card className="mt-20 bg-transparent rounded-none border-none shadow-none">
                <CardHeader className="justify-center items-center">
                  <Frown className="w-12 h-12" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-center">
                    Article Not Found
                  </CardTitle>
                </CardContent>
              </Card>
            </section>
          ))}
      </main>
    </>
  );
}
