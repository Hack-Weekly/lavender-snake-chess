import { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/context/NextAuthProvider";

const font = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Chessss",
  description: "A chess application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={font.className + " " + "flex flex-col min-h-dscreen gap-4"}>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
