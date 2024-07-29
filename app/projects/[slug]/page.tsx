import { Metadata } from "next";
import { notFound } from "next/navigation";
// import { MDXRenderer } from "@/components/mdx-renderer";

// import { ENV } from "@/lib/constants";
// import { getContents } from "@/lib/contents";
import { projectsData } from "@/data/projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { useRouter } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  let project = projectsData.find((post) => post.slug === params.slug);
  if (!project) return;

  let { title, summary: description } = project;
  //   let ogImage = image
  //     ? `${ENV.NEXT_PUBLIC_WEBSITE_URL}${image}`
  //     : `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      //   url: `${ENV.NEXT_PUBLIC_WEBSITE_URL}/blog/${project.slug}`,
      //   images: [
      //     {
      //       url: ogImage,
      //     },
      //   ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      //   images: [ogImage],
    },
  };
}

// export async function generateStaticParams() {
//   const projects = getContents("projects");
//   return projects.map((project) => ({ slug: project.slug }));
// }

export default function ProjectPage({ params }: Props) {
  const project = projectsData.find((project) => project.slug === params.slug);
  if (!project) notFound();

  //   const { back } = useRouter();

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
              <Button size="icon" variant="secondary">
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
              {/* <p className="text-purple-600">{category}</p> */}
            </div>
            <div className="space-y-3 mt-5">
              <h1 className="text-lg">{project.title}</h1>
              {/* <p className="text-xl font-bold">{formatter.format(price)}</p> */}
              <p className="text-gray-600">{project.summary}</p>
            </div>
          </CardContent>
          {/* <CardFooter className="flex justify-between items-center space-x-3">
          <div className="flex flex-row space-x-2 items-center">
            <Button size="icon" variant="secondary" onClick={decrease}>
              <MinusIcon className="w-4 h-4" />
            </Button>
            <p className="text-lg">{count}</p>
            <Button size="icon" variant="secondary" onClick={increase}>
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
          <Button
            onClick={() => {
              addCart(id, count),
                toast({
                  title: "Successfully added to cart",
                });
            }}
            variant="secondary"
          >
            Add To Cart
          </Button>
        </CardFooter> */}
        </Card>
      </section>
    </>
  );
}
