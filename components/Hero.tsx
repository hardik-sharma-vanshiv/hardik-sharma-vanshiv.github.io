import FadeIn from './FadeIn';
import { Space_Grotesk } from "next/font/google";
import RotatingText from './ui/RotatingText';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[url('/images/heroBg.png')] bg-cover">
      <FadeIn delay={100} direction="up" className="relative z-10 flex flex-col items-center justify-center px-4 text-center mt-12 text-white max-w-6xl mx-auto">
        {/* <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 opacity-90 font-semibold">
          THE DIGITAL ARCHITECT
        </p> */}
        <h1
          className={`${spaceGrotesk.className} flex flex-col items-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight drop-shadow-lg`}
        >
          <div className="flex flex-col items-center text-center">
            REIMAGINE THE FUTURE
          </div>
          <div className='flex flex-col md:flex-row w-full items-center justify-center gap-3 md:gap-6 mt-2 md:mt-0'>
            OF
            <RotatingText
              texts={["BUSINESS", "AI", "DATA", "CRM", "INTEGRATION"]}
              mainClassName="w-2/3 bg-purple-300 px-2 sm:px-2 md:px-4 text-black overflow-hidden py-0.5 sm:py-1 md:py-0.5 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </h1>
        <p className="text-center text-xs md:text-base font-normal text-gray-100 max-w-2xl leading-relaxed mt-2">
          Driving digital transformation with complete Salesforce and MuleSoft
          solutions. We build the architecture that powers tomorrow&apos;s industry leaders.
        </p>
      </FadeIn>
    </section>
  );
}
