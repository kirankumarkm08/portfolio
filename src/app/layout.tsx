import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactLenis } from "lenis/react";
import Provider from "@/components/Provider";
import Open from "@/components/Open";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KIRANKUMARKM",
  description: "kirankumarkm's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {" "}
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
