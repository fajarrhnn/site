"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/project";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft } from "lucide-react";

export default function DetailProject() {
  const { back } = useRouter();
  const params = useParams();
  const { slug } = params;
  const getProject = projects.filter(
    (project) => project.slug === `/projects/${slug}`
  );
  const projectData = getProject[0];
  const { title, detailProject, image, links } = projectData;

  return (
    <>
      <Card>
        <CardHeader>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-lg object-cover"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="relative flex flex-col">
          <div className="flex justify-between items-center">
            <Button size="icon" onClick={() => back()} variant="secondary">
              <ArrowLeft className="w-5" />
            </Button>
            <div className="space-x-2">
              <Link
                href={links.preview}
                passHref
                className="font-semibold underline text-sm"
              >
                Preview
              </Link>
              <Link
                href={links.github}
                passHref
                className="font-semibold underline text-sm"
              >
                Source Code
              </Link>
            </div>
          </div>
          <div className="space-y-3 mt-5">
            <CardTitle>{title}</CardTitle>
            {/* <p className="text-xl font-bold">{formatter.format(price)}</p> */}
            <CardDescription className="text-gray-600">
              {detailProject.description}
            </CardDescription>
            <h1>Stack</h1>

            {detailProject.stack.map((stack, index) => (
              <p key={index}>
                <Link href={stack.linkTechStack} target="_blank">
                  &#x2022;{" "}
                  <span className="underline font-semibold">{stack.title}</span>
                </Link>{" "}
                - {stack.description}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
