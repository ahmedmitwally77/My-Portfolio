import type { Metadata } from "next";
import "./globals.css";
import { FloatingNav } from "@/Components/ui/floating-navbar";

import { Inter } from "next/font/google";
import { navItems } from "../../data";
import { ThemeProvider } from "@/Components/ThemeProvider/Theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Mitwally",
  description:
    "Modern & Minimalist Portfolio Website by Ahmed Mitwally | Full Stack Developer | React | Next.js | Tailwind | TypeScript",
  keywords: [
    "Ahmed Mitwally",
    "Portfolio",
    "Frontend Developer",
    "Web Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Tailwind",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" >
      <body className={`${inter.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          <main className="relative  dark:bg-main-100 w-full dark:text-white text-black flex flex-col justify-center items-center overflow-hidden mx-auto  ">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
