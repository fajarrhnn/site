import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import NavigationBar from "@/components/header";
import Logo from "@/assets/img/logo.png";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: {
    default: "Fajarrhn",
    template: "%s | Fajarrhn",
  },
  description: "Minimal Web Portfolio",
  icons: Logo,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} lg:grid lg:grid-cols-12`}>
        <div className="lg:col-span-1">
          <NavigationBar />
        </div>
        <main className="lg:col-span-11 w-full mx-auto">
          <section className="w-11/12 lg:w-10/12 mx-auto min-h-screen py-5">
            {children}
          </section>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
