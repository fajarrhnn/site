"use client";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Frown } from "lucide-react";
import { Suspense } from "react";
import LoadingProjects from "./loading";

interface Props {
  searchParams: {
    tag?: string;
  };
}

export default function Projects({ searchParams }: Props) {
  const params = useSearchParams();
  const technology = searchParams.tag;
  const projects = technology
    ? projectsData.filter((project) => project?.tag?.includes(technology))
    : projectsData;

  const dataInLog = {
    "searchParams:": searchParams,
    "params.get('tag'):": params.get("tag"),
    "projek:": projects,
  };

  console.log(dataInLog);

  return (
    <>
      <h1 className="text-xl text-center py-5 font-semibold lg:text-4xl">
        Projects
      </h1>
      <div className="flex flex-col overflow-x-auto">
        <nav className="w-full max-w-full flex whitespace-nowrap gap-2 space-x-5">
          {menu.map((item) => {
            const isActive =
              params.get("tag")?.toLowerCase() === item.title.toLowerCase() ||
              (!params.get("tag") && item.title === "All-Projects");
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`${isActive && "text-blue-600"}`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
      <main className="mt-5 flex flex-col md:grid-cols-2 md:grid lg:grid-cols-3 gap-4">
        {projects?.map(({ title, summary, image, slug }, index) => (
          <Suspense fallback={<LoadingProjects />} key={index}>
            <Card key={index}>
              <Link href={`/projects/${slug}`}>
                <CardHeader>
                  <Image
                    src={image}
                    alt="projects-image"
                    className="aspect-video object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="mt-3 line-clamp-3">
                    {summary}
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          </Suspense>
        ))}
      </main>
      {!projects ||
        (projects.length === 0 && (
          <section className="flex justify-center items-center">
            <Card className="mt-20 bg-transparent rounded-none border-none shadow-none">
              <CardHeader className="justify-center items-center">
                <Frown className="w-12 h-12" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center">Project Not Found</CardTitle>
              </CardContent>
            </Card>
          </section>
        ))}
    </>
  );
}

const menu = [
  {
    title: "All-Projects",
    href: "/projects",
  },
  {
    title: "React",
    href: "/projects?tag=react",
  },
  {
    title: "Next",
    href: "/projects?tag=next",
  },
  {
    title: "HTML",
    href: "/projects?tag=html",
  },
  {
    title: "Wordpress",
    href: "/projects?tag=wordpress",
  },
];
