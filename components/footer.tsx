import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="py-8 text-sm sm:text-base sm:pt-10 text-center border-t-2 border-slate-200 mx-auto max-w-5xl">
        <p>&copy; {year} Fajar Raihan.</p>
      </footer>
    </>
  );
}
