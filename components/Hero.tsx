import FadeIn from './FadeIn';
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[url('/images/heroBg.png')] bg-cover">
      <FadeIn delay={100} direction="up" className="relative z-10 flex flex-col items-center justify-center px-4 text-center mt-12 text-white max-w-6xl mx-auto">
        <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 opacity-90 font-semibold">
          THE DIGITAL ARCHITECT
        </p>
        <h1
          className={`${spaceGrotesk.className} text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight drop-shadow-lg`}
        >
          REIMAGINE THE FUTURE
          <br />
          OF BUSINESS
        </h1>
        <p className="text-xs md:text-base font-semibold text-gray-100 max-w-2xl leading-relaxed mt-2">
          Driving digital transformation with complete Salesforce and MuleSoft
          solutions. We build the architecture that powers tomorrow&apos;s industry leaders.
        </p>
      </FadeIn>
    </section>
  );
}
