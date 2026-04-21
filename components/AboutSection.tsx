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
