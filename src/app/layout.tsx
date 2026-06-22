import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "@/components/Layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aadityamall.tech"),
  title: {
    default: "Aaditya Mall — Full Stack Developer",
    template: "%s | Aaditya Mall",
  },
  description:
    "Full-stack developer & CS/AI student building production-grade web applications. Spring Boot, Next.js, microservices. Available for freelance web development.",
  keywords:
    "Aaditya Mall, full stack developer, Next.js, Spring Boot, microservices, MERN stack, freelance developer, portfolio",
  openGraph: {
    title: "Aaditya Mall — Full Stack Developer",
    description:
      "Full-stack developer building production-grade web applications with Spring Boot, Next.js and microservices architecture.",
    images: ["/images/Aaditya.JPG"],
    url: "https://aadityamall.tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaditya Mall — Full Stack Developer",
    description:
      "Full-stack developer building production-grade web applications.",
    images: ["/images/Aaditya.JPG"],
    creator: "@AadityaMall",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
