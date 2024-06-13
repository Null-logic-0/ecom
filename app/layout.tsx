import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Letter from "./components/NewsLetter/Letter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecobazar",
  description: "Fresh & Healthy Organic Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}
        <Letter />
        <Footer />
      </body>
    </html>
  );
}
