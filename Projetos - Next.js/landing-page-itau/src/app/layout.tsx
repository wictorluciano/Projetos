import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";


const lato = Lato({ 
  subsets: ["latin"], 
  weight: ['400', '700'] 
});

export const metadata: Metadata = {

  title: "Itaú",
  description: "Landing Page do Itaú em Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./logo.svg" sizes="any" />
      </head>
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
