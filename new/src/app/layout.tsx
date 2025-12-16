import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/fragments/Navbar";
import { constructMetadata } from "@/lib/seo";
import Footer from "@/components/fragments/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Panggil metadata dinamis
export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
