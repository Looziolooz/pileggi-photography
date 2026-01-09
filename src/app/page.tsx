import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedGallery from "@/components/FeaturedGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-stone-200 selection:text-stone-900">
      <Header />
      <Hero />
      
      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <p className="font-serif text-3xl md:text-4xl leading-[1.4] text-stone-800">
            &quot;We believe in photography that breathes. Images that feel as authentic as the moment they were captured, yet as polished as a piece of art.&quot;
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-16 bg-stone-400"></div>
            <p className="text-stone-500 font-light text-[11px] tracking-[0.3em] uppercase">
              The Experience
            </p>
          </div>
        </div>
      </section>

      <FeaturedGallery />
      <Footer />
    </main>
  );
}