import FadeIn from './FadeIn';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
        <FadeIn delay={100} direction="right" className="flex-1">
          <p className="text-[#A855F7] text-sm font-extrabold tracking-widest uppercase mb-4">
            ABOUT VANSHIV
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Your Strategic Partner for Multi-Cloud & Digital Transformation.
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mb-10 pr-4">
            <p>
              We stand distinct in a digital arena saturated with systemic complexities. As a strategic technical advisory firm, we prioritize scalable architectural integrity over generic fixes, specializing in enterprise-grade CRM and Integration solutions.
            </p>
            <p>
              Our methodology merges entrepreneurial vision with technical prowess. Whether it&apos;s Salesforce customization or MuleSoft API architecture, our deployments are built for high performance, agility, and long-term scalability.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200} direction="left" className="flex-1 relative w-full h-[400px] md:h-[500px]">
          {/* Image Placeholder with abstract shapes */}
          <Image src="/images/bg.png" alt="About Image" width={500} height={500} className='w-full h-full object-cover object-right rounded-xl scale-110' />
        </FadeIn>
      </div>
    </section>
  );
}
