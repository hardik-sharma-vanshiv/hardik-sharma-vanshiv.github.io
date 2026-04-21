import FadeIn from './FadeIn';
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export default function AboutSection() {
  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
        <FadeIn delay={100} direction="right" className="flex-1">
          <p className="text-[#A855F7] text-sm font-extrabold tracking-widest uppercase mb-4">
            ABOUT VANSHIV
          </p>
          <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6`}>
            Your Trusted <br /> Implementation <br /> Partner.
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mb-10 pr-4">
            <p>
              We stand distinct in a digital arena saturated with systemic complexities and mundane implementation approaches. As a strategic technical advisory, we prioritize architectural integrity over generic solutions.
            </p>
            <p>
              Our methodology combines entrepreneurial architectural vision with technical implementation prowess. This dual-focus ensures that our deployments are built for scale and future agility.
            </p>
          </div>
          
          <div className="flex gap-4 items-center">
            {/* Badge 1 Placeholder */}
            <div className="w-16 h-16 rounded flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm bg-black group relative">
               <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
               </div>
               <div className="absolute inset-x-0 bottom-1 text-center text-[6px] text-white font-bold opacity-80">BEST IN CLASS</div>
            </div>
            
            {/* Badge 2 Placeholder */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center border border-gray-100 shadow-sm bg-white shrink-0 p-2">
              <svg className="w-full h-full text-[#00A1E0]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 19c2.485 0 4.5-2.015 4.5-4.5 0-2.43-1.92-4.408-4.33-4.496C17.065 6.643 14.153 4 10.5 4 7.644 4 5.21 5.86 4.316 8.35 1.93 8.784 0 10.875 0 13.5 0 16.538 2.462 19 5.5 19h12z"/>
              </svg>
            </div>
            
            {/* Badge 3 Placeholder */}
            <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center text-white bg-gradient-to-r from-blue-700 to-purple-700 shrink-0 border-2 border-white shadow-lg">
              <span className="text-[7px] font-bold tracking-wider opacity-80">GREAT</span>
               <span className="text-[12px] font-bold leading-none my-0.5">PLACE</span>
               <span className="text-[7px] font-bold tracking-wider opacity-80">TO WORK</span>
            </div>
            
            {/* Badge 4 Placeholder */}
             <div className="w-16 h-16 rounded flex flex-col items-center justify-center text-white bg-[#001D4A] shrink-0 border border-gray-200">
               <div className="w-10 flex gap-0.5 mt-1">
                 {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-2 h-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                 ))}
               </div>
              <span className="text-[8px] font-bold mt-1">Top Rated</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200} direction="left" className="flex-1 relative w-full h-[400px] md:h-[500px]">
          {/* Image Placeholder with abstract shapes */}
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-2xl relative">
             <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white/50 text-sm font-medium tracking-wide">Image Placeholder (Business Meeting)</span>
             </div>
             
             {/* Decorative abstract lines/shapes simulating complex architectural mesh from the original image */}
             <div className="absolute left-0 bottom-0 w-full h-[60%] bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
             <div className="absolute left-[10%] bottom-[20%] w-[80%] h-px bg-cyan-400/30"></div>
             <div className="absolute left-[10%] bottom-[30%] w-[60%] h-px bg-cyan-400/30"></div>
             <div className="absolute left-[30%] bottom-[10%] w-px h-[40%] bg-cyan-400/20"></div>
             <div className="absolute right-[20%] bottom-[15%] w-px h-[50%] bg-cyan-400/30"></div>
          </div>
          
          {/* Decorative blur blob behind image */}
          <div className="absolute -z-10 -right-8 -bottom-8 w-64 h-64 bg-gray-200/50 rounded-full blur-[80px]"></div>
        </FadeIn>
      </div>
    </section>
  );
}
