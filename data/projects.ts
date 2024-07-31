import { StaticImageData } from "next/image";
import { images } from "@/assets/img/image";

export const projectsData: {
  title: string;
  summary: string;
  image: StaticImageData | string;
  href: string;
  slug: string;
  tag: string[] | undefined;
}[] = [
  {
    title: "Jarot Shop",
    summary:
      "Jarot Shop was established as an online store that sells clothing, gold and electronics. Dive into the website to see a wealth of good products at affordable prices.",
    image: images.Hero,
    href: "https://jarot-shop.vercel.app",
    slug: "jarot-shop",
    tag: ["react", "next"],
  },
];
