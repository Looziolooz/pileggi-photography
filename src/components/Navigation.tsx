"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Journal", href: "/journal" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// FIX: Aggiunto "as const" per dire a TypeScript che è un valore specifico valido
const menuVariants = {
  closed: { 
    x: "100%", 
    transition: { duration: 0.5, ease: "easeInOut" as const } 
  },
  open: { 
    x: "0%", 
    transition: { duration: 0.5, ease: "easeInOut" as const } 
  }
};

export default function Navigation() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* BUTTON FLOATING - Z-INDEX ALTISSIMO PER ASSICURARE IL CLICK */}
      <div className="fixed top-6 right-6 z-[999]">
        <button 
          onClick={() => setIsActive(!isActive)}
          className="w-14 h-14 rounded-full bg-stone-900 text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer border-none outline-none"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <Menu 
              className={cn("absolute transition-all duration-300", isActive ? "opacity-0 rotate-90" : "opacity-100 rotate-0")} 
              size={24}
            />
            <X 
              className={cn("absolute transition-all duration-300", isActive ? "opacity-100 rotate-0" : "opacity-0 -rotate-90")} 
              size={24}
            />
          </div>
        </button>
      </div>

      {/* FULL SCREEN MENU */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-stone-100 z-[998] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsActive(false)}
                    className={cn(
                      "text-4xl md:text-6xl font-serif hover:italic transition-all duration-300 block p-2",
                      pathname === link.href ? "text-stone-900 underline decoration-1 underline-offset-8" : "text-stone-400 hover:text-stone-800"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute bottom-12 flex gap-8 text-xs uppercase tracking-widest text-stone-500">
                <span className="cursor-pointer hover:text-stone-900 transition-colors">Instagram</span>
                <span className="cursor-pointer hover:text-stone-900 transition-colors">Email</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}