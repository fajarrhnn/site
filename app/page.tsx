"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/project";
import Mountain from "@/images/mountain.jpg";
import { Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen flex items-center py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to My Personal Website
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                I'm a passionate developer creating amazing web experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-16 w-full mx-auto bg-gray-100">
        <main className="w-11/12 mx-auto flex flex-col items-center md:grid md:grid-cols-2 gap-8">
          <Image src={Mountain} alt="mountain" className="object-cover" />
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="text-base text-justify">
              Hi, I'm Raihan. Vocational High School graduated with Computer and Network Engineering background, have a carrer aspiration as FrontEnd Web Developer and/or IT Support. 
            </p>
            <Button
              size={"lg"}
              className="w-max rounded-full"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/15c5mGtOwwYv1jex6MsFiWBuaM5hbm5eZ/view?usp=sharing"
                )
              }
            >
              My Resume
            </Button>
          </div>
        </main>
      </section>
      <section id="projects" className="w-full mx-auto py-16">
        <main className="w-11/12 mx-auto flex flex-col space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-1">
              <h1 className="text-3xl font-bold">My Project's</h1>
              <CardDescription>
                Here are some overview of the projects that I have developed
              </CardDescription>
            </div>
            <Link href={"/projects"}>
              <Button size={"lg"} className="rounded-full">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              ?.slice(0, 3)
              .map(({ id, image, title, detailProject, links, slug }) => (
                <Card key={id}>
                  <CardHeader>
                    <Image
                      src={image}
                      alt="thumbnail-project"
                      width={175}
                      height={100}
                      className="w-auto h-auto"
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Link href={slug} passHref>
                        <CardTitle>{title}</CardTitle>
                      </Link>
                      <div className="flex space-x-1 items-center">
                        <Link
                          href={links.preview}
                          target="_blank"
                          aria-label={`Preview of Project ${title}`}
                        >
                          <Globe className="w-5 h-5" />
                        </Link>
                        <Link
                          href={links.github}
                          target="_blank"
                          aria-label={`Source Code of Project ${title}`}
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                    <CardDescription className="pt-2 line-clamp-3 w-full">
                      {detailProject.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
          </div>
        </main>
      </section>
      <section className="w-full mx-auto py-16 bg-gray-100" id="contact">
        <main className="w-11/12 mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>
          <Card className="lg:w-[75%] mx-auto">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="flex w-full mx-auto space-x-3">
                  <div className="space-y-2 w-full mx-auto">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2 w-full mx-auto">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </main>
      </section>
    </>
  );
}
