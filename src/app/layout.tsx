import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import ParticlesComponent from "@/components/Layout/Particles";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Aaditya Mall",
  description: "Aaditya Mall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black text-white`}>
        <ParticlesComponent />
        <Navbar />
        <div className="mt-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
