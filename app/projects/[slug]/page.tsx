"use client";

import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projectsData.find((project) => project.slug === params.slug);
  if (!project) notFound();

  const { back } = useRouter();

  return (
    <>
      <section className="h-screen w-full flex justify-center items-center">
        <Card className="bg-white w-full mx-auto h-max flex flex-col">
          <div className="mt-4 w-1/3 md:w-44 mx-auto">
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <CardContent className="relative flex flex-col">
            <div className="flex justify-between items-center">
              <Button size="icon" variant="secondary" onClick={back}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </Button>
            </div>
            <div className="space-y-3 mt-5">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="text-gray-600">
                {project.summary}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
