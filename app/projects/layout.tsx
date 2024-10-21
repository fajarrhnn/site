import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Fajar Raihan Website Portfolio",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section id="projects" className="w-full mx-auto pb-16 pt-28">
        <main className="w-11/12 mx-auto flex flex-col space-y-3">
          {children}
        </main>
      </section>
    </>
  );
}
