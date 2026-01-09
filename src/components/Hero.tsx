"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Animation variants for text reveal
  // Fixed: Added "as const" to ease array
  const reveal = {
    hidden: { y: "100%" },
    visible: (i: number) => ({
      y: "0%",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const, delay: i * 0.1 }
    })
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Fine Art Wedding Photography"
          fill
          className="object-cover scale-105"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Text Content with Masking Effect */}
      <div className="relative z-10 text-center text-white mix-blend-difference px-4">
        
        <div className="overflow-hidden mb-6">
          <motion.h2 
            custom={0}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="text-xs md:text-sm tracking-[0.4em] uppercase font-light"
          >
            Italy & Destination Wedding Photographer
          </motion.h2>
        </div>

        <div className="overflow-hidden">
          <motion.h1 
            custom={1}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter"
          >
            Timeless
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-8">
          <motion.h1 
            custom={2}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter italic"
          >
            Aesthetics
          </motion.h1>
        </div>

        <div className="overflow-hidden">
           <motion.div
             custom={3}
             variants={reveal}
             initial="hidden"
             animate="visible"
             className="h-px w-24 bg-white/50 mx-auto"
           />
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-[10px] uppercase tracking-widest flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <div className="w-[1px] h-12 bg-white/50" />
      </motion.div>
    </section>
  );
}