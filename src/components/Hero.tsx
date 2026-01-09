import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Fine Art Wedding Photography in Italy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4 animate-fade-in-up">
        <h2 className="text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-light">
          Italy & Destination Wedding Photographer
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
          Timeless Aesthetics
        </h1>
        <p className="max-w-lg font-light text-sm md:text-base tracking-wide leading-relaxed opacity-90">
          Crafting visual legacies for modern romantics. <br/>
          Based in Italy, available worldwide.
        </p>
      </div>
    </section>
  );
}