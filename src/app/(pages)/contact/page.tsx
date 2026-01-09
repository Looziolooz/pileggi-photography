export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center md:text-left">
      <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">Get in Touch</h1>
      <p className="font-light text-stone-600 mb-12 max-w-xl">
        We would love to hear about your story. Please fill out the form below or email us directly at info@pileggi.com
      </p>

      <form className="space-y-12 mt-16 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group">
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Name</label>
            <input type="text" className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-stone-900 transition-colors" />
          </div>
          <div className="group">
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email</label>
            <input type="email" className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-stone-900 transition-colors" />
          </div>
        </div>

        <div className="group">
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Event Date & Location</label>
          <input type="text" className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-stone-900 transition-colors" />
        </div>

        <div className="group">
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Tell us about your day</label>
          <textarea rows={4} className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-stone-900 transition-colors resize-none"></textarea>
        </div>

        <button type="submit" className="px-8 py-3 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
}