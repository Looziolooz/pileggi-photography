import Image from "next/image";

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative aspect-[3/4]">
          <Image 
            src="https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=1000&auto=format&fit=crop" 
            alt="Photographer Portrait" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="font-serif text-5xl text-stone-900">The Artist</h1>
          <h2 className="text-xs uppercase tracking-[0.2em] text-stone-500">Behind the Lens</h2>
          
          <div className="space-y-6 font-light text-stone-700 leading-relaxed">
            <p>
              Photography is more than a profession; it is the art of pausing time. My approach is rooted in the belief that the most beautiful moments are the unscripted ones.
            </p>
            <p>
              With over a decade of experience capturing weddings across Italy and Europe, I strive to create images that are not just seen, but felt.
            </p>
          </div>
          
          <div className="pt-4">
             <Image 
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" 
               alt="Signature" 
               width={150} 
               height={50} 
               className="opacity-50" 
             />
          </div>
        </div>
      </div>
    </div>
  );
}