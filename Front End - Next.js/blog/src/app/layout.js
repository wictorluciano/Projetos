import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ['500'] 
});

const space_grotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  weight: ['500'] 
});

export const metadata = {
  title: "Blog",
  description: "Blog codelândia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
