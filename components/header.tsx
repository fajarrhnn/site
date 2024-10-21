"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const path = usePathname();

  return (
    <>
      <header className="w-full bg-white text-black px-4 lg:px-6 h-14 flex justify-between items-center top-0 z-10 fixed shadow-md">
        <Link className="flex items-center justify-center" href="/">
          <span className="sr-only">Fajar Raihan</span>
          <span className="font-bold text-xl">FR</span>
        </Link>
        <nav className="hidden lg:block ml-auto lg:flex lg:gap-4 sm:gap-6">
          <Link
            className="nav-link text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </Link>
          <Link
            className="nav-link text-sm font-medium hover:underline underline-offset-4"
            href={path === "/" ? "#about" : "/#about"}
          >
            About
          </Link>
          <Link
            className="nav-link text-sm font-medium hover:underline underline-offset-4"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="nav-link text-sm font-medium hover:underline underline-offset-4"
            href={path === "/" ? "#contact" : "/#contact"}
          >
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              <Link
                className="nav-link text-black text-sm font-medium hover:underline underline-offset-4"
                href="/"
              >
                Home
              </Link>
              <Link
                className="nav-link text-black text-sm font-medium hover:underline underline-offset-4"
                href={path === "/" ? "#about" : "/#about"}
              >
                About
              </Link>
              <Link
                className="nav-link text-black text-sm font-medium hover:underline underline-offset-4"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="nav-link text-black text-sm font-medium hover:underline underline-offset-4"
                href={path === "/" ? "#contact" : "/#contact"}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
