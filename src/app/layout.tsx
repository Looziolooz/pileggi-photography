import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({ 
  weight: ["300", "400", "700"], 
  subsets: ["latin"], 
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pileggi Photography | Fine Art Wedding Photographer",
  description: "Exclusive wedding photography in Italy and worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased bg-stone-50 text-stone-900`}>
        {children}
      </body>
    </html>
  );
}