import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: "Code Explorer",
  description: "Challenges by Front End - Fusion",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="pt-br" class="!scroll-smooth">
      <head>
        <link rel="icon" href="./favicon.svg" sizes="any" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
