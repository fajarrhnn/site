import Link from "next/link";

export default function App() {
  return (
    <>
      <section className="mt-8 p-4 md:p-8 bg-white shadow-md rounded-xl w-full mx-auto">
        <main className="flex flex-col space-y-5">
          <h2 className="text-2xl lg:text-4xl">👨‍💻 Web Developer</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Hello I am Fajar Raihan, a vocational high school graduate who has
              experience and interest in the developer world.
            </p>
            {/* <p className="text-base">
              I'm from Jakarta, Indonesian and am currently a web developer at ...
            </p> */}
            <p className="text-base">
              I build website with{" "}
              <span className="border-b-2 border-b-[#f9322c]">Next.js</span> and{" "}
              <span className="border-b-2 border-b-[#0073aa]">Wordpress</span>.
            </p>
            <p className="text-base">
              Find me on{" "}
              <Link
                href={"https://github.com/fajarrhnn"}
                target="_blank"
                className="text-blue-500"
              >
                Github
              </Link>{" "}
              and{" "}
              <Link
                href={"https://www.linkedin.com/in/fajarrhn"}
                target="_blank"
                className="text-blue-500"
              >
                {" "}
                Linkedin
              </Link>
            </p>
          </div>
        </main>
      </section>
    </>
  );
}
