"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Github } from "lucide-react";
import { projects } from "@/data/project";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Projects() {
  const [tech, setTech] = useState<string>("");

  const getValue = (value: string) => {
    setTech(value);
  };

  const filtered = projects.filter((project) =>
    tech ? project.tags.includes(tech) : true
  );

  return (
    <>
      <header className="pb-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Project's</h1>
        <Select onValueChange={(value) => getValue(value)}>
          <SelectTrigger className="w-max" aria-label="Button for filter Project">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React.JS</SelectItem>
            <SelectItem value="next">Next.JS</SelectItem>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="wordpress">Wordpress</SelectItem>
          </SelectContent>
        </Select>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.length > 0 ? (
          <>
            {" "}
            {filtered.map(
              ({ id, image, title, detailProject, links, slug }) => (
                <Card key={id}>
                  <CardHeader>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={image}
                        alt="thumbnail-project"
                        className="w-full h-full rounded-md object-cover"
                      />
                    </AspectRatio>
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
                          aria-label={`Preview of Project ${title}`}
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
              )
            )}
          </>
        ) : (
          <p>No projects found for the selected technology.</p>
        )}
      </div>
    </>
  );
}
