import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <Navbar />
        <div className="mt-5">{children}</div>
      </body>
    </html>
  );
}
