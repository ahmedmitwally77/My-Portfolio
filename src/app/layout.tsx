import type { Metadata } from "next";
import "./globals.css";
import { FloatingNav } from "@/Components/ui/floating-navbar";
import { Inter } from "next/font/google";
import { navItems } from "../../data";
import { ThemeProvider } from "@/Components/ThemeProvider/Theme-provider";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
  variable: "--font-inter",
});
import { Suspense } from "react";
import Loading from "@/Components/Loading/Loading";

export const metadata: Metadata = {
  title: "Ahmed Mitwally",
  description:
    "Modern & Minimalist Portfolio Website by Ahmed Mitwally Essa | Full Stack Developer | React | Next.js | Tailwind | TypeScript",

  keywords: [
    "Ahmed Mitwally",
    "Ahmed Mitwally Essa",
    "Ahmed Mitwally Portfolio",
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
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>{" "}
      <body className={`${inter.className} relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // تغيير من "system" إلى "dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <FloatingNav navItems={navItems} />
          </Suspense>{" "}
          <main className="relative dark:bg-main-100  w-full dark:text-white text-black flex flex-col justify-center items-center overflow-hidden mx-auto  ">
            <Suspense fallback={<Loading/>}>{children}</Suspense>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
