import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import ParticlesComponent from "@/components/Layout/Particles";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aadityamall.tech"),
  title: "Aaditya Mall",
  description:
    "Pursuing a Bachelor of Technology in Computer Science with a specialization in Artificial Intelligence. A creative MERN stack developer with strong skills in math, logic, and coding. Explore a portfolio showcasing innovative web solutions and a passion for continuous learning.",
  keywords:
    "Aaditya Mall, Aaditya, Mall,mern stack, web developer, Aditya Mall, Aditya ,Aaditya Mall Portfolio, Aaditya Mall Projects, Aaditya Mall Experience, Aaditya Mall Skills, Aaditya Mall Education, Aaditya Mall Contact",
  openGraph: {
    title: "Aaditya Mall",
    description:
      "Pursuing a Bachelor of Technology in Computer Science with a specialization in Artificial Intelligence. A creative MERN stack developer with strong skills in math, logic, and coding. Explore a portfolio showcasing innovative web solutions and a passion for continuous learning.",
    images: ["/images/Aaditya.JPG"],
    url: "https://aadityamall.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaditya Mall",
    description:
      "Pursuing a Bachelor of Technology in Computer Science with a specialization in Artificial Intelligence. A creative MERN stack developer with strong skills in math, logic, and coding. Explore a portfolio showcasing innovative web solutions and a passion for continuous learning.",
    images: ["/images/Aaditya.JPG"],
    creator: "AadityaMall",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="relative h-full text-white overflow-x-hidden">
        
        {/* Static Gradient Background */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Particles above gradient */}
        <div className="fixed inset-0 -z-10">
          <ParticlesComponent />
        </div>

        {/* Foreground content */}
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
