"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const path = usePathname();

  return (
    <>
      <footer className="bg-background border-t">
        <div className="container w-11/12 mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <p className="text-xl font-semibold">About</p>
              <p className="text-lg text-muted-foreground">
                My Portofolio - Fajar Raihan
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/fajarrhnn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/fajarrhn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                </Link>
                <Link
                  href="https://instagram.com/fjrrhn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xl font-semibold">Quick Links</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={path === "/" ? "#about" : "/#about"}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={path === "/" ? "#projects" : "/#projects"}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href={path === "/" ? "#contact" : "/#contact"}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-xl font-semibold">Location</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin className="mr-3 w-8" /> Kota Jakarta Barat, Daerah
                  Khusus Ibukota Jakarta 11840
                </li>

                <li>
                  <Link
                    href={"tel://085817929240"}
                    className="flex items-center"
                  >
                    <Phone className="mr-3 w-5" /> +62 85817929240
                  </Link>
                </li>
                <li>
                  <Link
                    href={"mailto://fajarrehan023@gmail.com"}
                    className="flex items-center"
                  >
                    <Mail className="mr-3 w-5" /> fajarrehan023@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Fajar Raihan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
