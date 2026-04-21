import FadeIn from './FadeIn';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          <FadeIn direction="up" delay={100} className="flex-1">
            <p className="text-[#A855F7] text-[10px] font-bold tracking-widest uppercase mb-4">
              LET'S TALK
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Vanshiv Team
            </h2>
            <p className="text-gray-400 text-sm max-w-sm mb-10">
              Ready to start your digital transformation? Reach out to the architecture team across our global channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h4 className="font-bold text-sm mb-1">Email Us</h4>
                  <p className="text-gray-500 text-xs">contact@vanshiv.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4 className="font-bold text-sm mb-1">Global Headquarters</h4>
                  <p className="text-gray-500 text-xs text-balance">
                    123 Digital Way, Suite 400<br />San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={200} className="flex-1 bg-[#1A1A1A] rounded-xl p-8 border border-white/5 relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full"></div>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase text-gray-500 mb-2 tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-700 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-500 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase text-gray-500 mb-2 tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-700 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase text-gray-500 mb-2 tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-700 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase text-gray-500 mb-2 tracking-wider">Phone</label>
                  <input type="tel" className="w-full bg-transparent border-b border-gray-700 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-500 transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase text-gray-500 mb-2 tracking-wider">Message</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-gray-700 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-400 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all outline-none">
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={300} className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
           <div className="flex items-center gap-2 mb-4 md:mb-0">
             <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M16 2L2 10V22L16 30L30 22V10L16 2Z" fill="#A855F7" />
               <path d="M16 8L8 12.5V19.5L16 24L24 19.5V12.5L16 8Z" fill="#F97316" />
             </svg>
             <span className="font-bold text-lg tracking-tight">vanshiv</span>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full md:w-auto">
             <div>
               <h5 className="text-white text-xs font-bold mb-4 uppercase">India</h5>
               <p className="text-gray-500 text-[10px] leading-relaxed">
                 Vanshiv Technologies Pvt Ltd.<br/>
                 Plot No 20, IT Park, Phase 1<br/>
                 Chandigarh, India
               </p>
             </div>
             <div>
               <h5 className="text-white text-xs font-bold mb-4 uppercase">Australia</h5>
               <p className="text-gray-500 text-[10px] leading-relaxed">
                 Vanshiv Pty Ltd<br/>
                 100 Sydney St<br/>
                 Sydney, NSW 2000
               </p>
             </div>
             <div>
               <h5 className="text-white text-xs font-bold mb-4 uppercase">USA</h5>
               <p className="text-gray-500 text-[10px] leading-relaxed">
                 Vanshiv Inc<br/>
                 123 Digital Way<br/>
                 San Francisco, CA 94105
               </p>
             </div>
           </div>
           
        </FadeIn>
        <FadeIn direction="up" delay={400} className="mt-10 text-center md:text-left text-gray-600 text-[10px]">
           © {new Date().getFullYear()} Vanshiv. All rights reserved.
        </FadeIn>
      </div>
    </footer>
  );
}
