import type { Metadata } from "next";
import "./globals.css";
import { FloatingNav } from "@/Components/ui/floating-navbar";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Portfolio",
  description: "Modern & Minimalist Portfolio",
};

const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "/projects" },
  { name: "Testimonials", link: "/testimonials" },
  { name: "Contact", link: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <FloatingNav navItems={navItems} />
        <main className="relative h-[10000px] bg-main-100 w-full flex flex-col justify-center items-center overflow-hidden mx-auto  ">
          {children}
        </main>
      </body>
    </html>
  );
}
