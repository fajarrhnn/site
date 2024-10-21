import { StaticImageData } from "next/image";
import BromoMountain from "@/images/mountain.jpg";
import { Url } from "url";

type StackItem = {
  title: string;
  description: string;
  linkTechStack: string | Url;
};

type ProjectData = {
  id: number;
  title: string;
  summary: string;
  slug: string;
  image: string | StaticImageData;
  links: {
    github: string;
    preview: string;
  };
  detailProject: {
    description: string;
    stack: StackItem[];
  };
  tags: string[] | string;
};

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Jarot Shop",
    summary: "",
    image: BromoMountain,
    slug: "/projects/jarot-shop",
    links: {
      github: "https://github.com/fajarrhnn/shop",
      preview: "https://jarot-shop.vercel.app",
    },
    detailProject: {
      description:
        "I learned to make an intermediate level application and a lot of knowledge that I've got, such as parseJSON from API, Persistant data with Core data and User defaults, learning about main threads, and etc.",
      stack: [
        {
          title: "React",
          description:
            "Next.js is a React framework for building full-stack web applications",
          linkTechStack: "https://nextjs.org",
        },
        {
          title: "React",
          description:
            "Next.js is a React framework for building full-stack web applications",
          linkTechStack: "https://nextjs.org",
        },
      ],
    },
    tags: ["react", "next"],
  },
  {
    id: 1,
    title: "Chatan aja",
    summary: "",
    image: BromoMountain,
    slug: "/projects/chatan-aja",
    links: {
      github: "https://github.com/fajarrhnn/shop",
      preview: "https://jarot-shop.vercel.app",
    },
    detailProject: {
      description:
        "I learned to make an intermediate level application and a lot of knowledge that I've got, such as parseJSON from API, Persistant data with Core data and User defaults, learning about main threads, and etc.",
      stack: [
        {
          title: "React",
          description:
            "Next.js is a React framework for building full-stack web applications",
          linkTechStack: "https://nextjs.org",
        },
        {
          title: "React",
          description:
            "Next.js is a React framework for building full-stack web applications",
          linkTechStack: "https://nextjs.org",
        },
      ],
    },
    tags: "html",
  },
  {
    id: 1,
    title: "SosmedIn Aja",
    summary: "",
    image: BromoMountain,
    slug: "/projects/sosmedinaja",
    links: {
      github: "https://github.com/fajarrhnn/shop",
      preview: "https://jarot-shop.vercel.app",
    },
    detailProject: {
      description:
        "I learned to make an intermediate level application and a lot of knowledge that I've got, such as parseJSON from API, Persistant data with Core data and User defaults, learning about main threads, and etc.",
      stack: [
        {
          title: "React",
          description:
            "Next.js is a React framework for building full-stack web applications",
          linkTechStack: "https://nextjs.org",
        },
        {
          title: "React",
          description:
            "Next.js is a React framework for building full-stack web applications",
          linkTechStack: "https://nextjs.org",
        },
      ],
    },
    tags: "wordpress",
  },
];
