import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation"; // NEW
import Link from "next/link"; // For the Logo

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
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased bg-stone-50 text-stone-900 overflow-x-hidden`}
    cz-shortcut-listen="true">
        
        {/* Permanent Logo Layer */}
        <div className="fixed top-8 left-8 z-[60] mix-blend-difference text-white">
           <Link href="/" className="font-serif text-2xl tracking-widest uppercase hover:opacity-70 transition-opacity">
              Pileggi
           </Link>
        </div>

        {/* The New Navigation System */}
        <Navigation />
        
        {children}
      </body>
    </html>
  );
}