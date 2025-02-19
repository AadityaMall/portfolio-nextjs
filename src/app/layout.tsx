import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesComponent from "@/components/Particles";
import Footer from "@/components/Footer";

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
      <body className={`bg-black`}>
        <ParticlesComponent />
        <Navbar />
        <div className="mt-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
