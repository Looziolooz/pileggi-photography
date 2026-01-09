"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Journal", href: "/journal" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-700 ${
      scrolled ? "bg-white/90 backdrop-blur-md py-4 border-b border-stone-100 shadow-sm" : "bg-transparent py-8"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-widest uppercase hover:opacity-60 transition-opacity">
          Pileggi
        </Link>
        
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-[11px] uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:block text-[10px] uppercase tracking-widest cursor-pointer hover:text-stone-500 transition-colors">
          Inquire
        </div>
      </div>
    </header>
  );
}