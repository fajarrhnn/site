import Link from "next/link";
import Image from "next/image";
import { images } from "@/assets/img/image";

export default function Header() {
  return (
    <>
      <header className="-mt-[22rem] lg:-mt-36 flex flex-col md:flex-row items-center pb-8 md:space-x-12">
        <Link href={"/"}>
          <Image
            src={images.Logo}
            alt="logo"
            width={120}
            height={120}
            className="rounded-full"
          />
        </Link>
        <div className="flex flex-col space-y-8 mt-8 md:mt-0">
          <h1 className="text-3xl text-center">
            <Link href={"/"}>Fajar Raihan</Link>
          </h1>
          <nav className="uppercase flex space-x-4 items-center">
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/articles"}>Articles</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
