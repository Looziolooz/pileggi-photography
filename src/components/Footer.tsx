import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h4 className="font-serif text-2xl text-stone-200 mb-2">Pileggi</h4>
          <p className="text-[10px] uppercase tracking-widest opacity-60">Fine Art Photography</p>
        </div>
        
        <div className="flex gap-8 text-[10px] uppercase tracking-widest">
          <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-white transition-colors">Pinterest</Link>
          <Link href="#" className="hover:text-white transition-colors">Vimeo</Link>
        </div>

        <div className="text-[10px] uppercase tracking-widest text-stone-600">
          &copy; {new Date().getFullYear()} Pileggi Photography
        </div>
      </div>
    </footer>
  );
}