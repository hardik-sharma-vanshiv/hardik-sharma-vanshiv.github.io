import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { salesforceClouds } from "@/data/salesforceCloudsData";

export const metadata = {
  title: "Salesforce Cloud Solutions | Vanshiv",
  description:
    "Explore Vanshiv's Salesforce cloud expertise across Sales, Service, Marketing, Commerce, Revenue, Experience Cloud, and MuleSoft integration.",
};

export default function SalesforceCloudsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] font-sans text-gray-900">
      <Navbar />
      <main className="pt-24">
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn delay={80} direction="up" className="text-center mb-12 md:mb-16">
              <p className="text-[#A855F7] text-sm font-bold tracking-widest uppercase mb-4">
                Salesforce Clouds
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Clouds We Master. So You Don&apos;t Have To.
              </h1>
              <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                From Salesforce Clouds to MuleSoft integrations, we help you implement, optimize, and scale the
                platforms that move your business forward.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {salesforceClouds.map((cloud, idx) => (
                <FadeIn key={cloud.id} delay={120 + idx * 80} direction="up">
                  <article className="h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                    <div className="relative h-40 bg-gray-50 flex items-center justify-center p-6">
                      <Image
                        src={cloud.image}
                        alt={cloud.title}
                        width={120}
                        height={120}
                        className="object-contain max-h-24 w-auto"
                      />
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cloud.accent}`} />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">{cloud.title}</h2>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">{cloud.description}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
