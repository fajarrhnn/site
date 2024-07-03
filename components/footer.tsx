import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="mt-14 pt-8 text-sm sm:text-base sm:pt-10 flex justify-between border-t-2 border-slate-200 mx-auto max-w-5xl">
        <p>&copy; {year} Fajar Raihan.</p>
        <p>
          Built with{" "}
          <Link
            className="text-laravel transition-opacity duration-200 hover:opacity-50"
            href="https://nextjs.org/"
            target="_blank"
          >
            Next.js
          </Link>{" "}
          &amp;{" "}
          <Link
            className="text-sky-500 transition-opacity duration-200 hover:opacity-50"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            Tailwind
          </Link>
          .
        </p>
      </footer>
    </>
  );
}
