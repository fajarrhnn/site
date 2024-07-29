import {
  BriefcaseBusiness,
  Mail,
  UserRound,
  Home,
  Layers,
  Menu,
  Mountain,
  XIcon,
  Sun,
  Moon,
  Newspaper,
} from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useContext } from "react";

export default function NavigationBar() {
  return (
    <div className="flex h-full w-full flex-col">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 left-4 z-20 lg:hidden"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>Fajarrhn</SheetHeader>
          <div className="flex h-full w-full items-center justify-center px-4 py-6 sm:px-6">
            <nav className="flex flex-col items-start gap-4">
              <Link
                href="/"
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                prefetch={false}
              >
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="/about"
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                prefetch={false}
              >
                <UserRound className="h-5 w-5" />
                About
              </Link>
              <Link
                href="/projects"
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                prefetch={false}
              >
                <BriefcaseBusiness className="h-5 w-5" />
                Projects
              </Link>
              <Link
                href="/articles"
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                prefetch={false}
              >
                <Newspaper className="h-5 w-5" />
                Articles
              </Link>
              <Link
                href="/contact"
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                prefetch={false}
              >
                <Mail className="h-5 w-5" />
                Contact
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
      <aside className="fixed inset-y-0 left-0 top-0 z-10 hidden h-full w-28 flex-col border-r bg-background sm:flex">
        <div className="flex h-screen flex-col items-center justify-center px-2 py-5">
          <Link
            href="/"
            className="flex items-start justify-center h-1/4 hover:text-[#a2e8ff]"
            prefetch={false}
          >
            <Mountain className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="flex flex-col justify-center items-center gap-4 h-1/2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:text-[#a2e8ff]"
                    prefetch={false}
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Home</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Home</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/about"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:text-[#a2e8ff]"
                    prefetch={false}
                  >
                    <UserRound className="h-5 w-5" />
                    <span className="sr-only">About</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">About</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/projects"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:text-[#a2e8ff]"
                    prefetch={false}
                  >
                    <BriefcaseBusiness className="h-5 w-5" />
                    <span className="sr-only">Projects</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Projects</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/articles"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:text-[#a2e8ff]"
                    prefetch={false}
                  >
                    <Newspaper className="h-5 w-5" />
                    <span className="sr-only">Articles</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Articles</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/contact"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:text-[#a2e8ff]"
                    prefetch={false}
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Contact</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Contact</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </div>
      </aside>
    </div>
  );
}
