import FadeIn from './FadeIn';
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export default function Offerings() {
  const cards = [
    {
      title: 'Salesforce Implementation',
      desc: 'Seamless deployment of CRM solutions, customized to align with your unique business workflow and maximize performance.',
      colSpan: 'col-span-1 md:col-span-2'
    },
    {
      title: 'MuleSoft Development',
      desc: 'Unlock seamless data flow and process automation with scalable API architectures that modernize your infrastructure at a fraction of the cost.',
      colSpan: 'col-span-1 md:col-span-1'
    },
    {
      title: 'Advisory Services',
      desc: 'Strategic consultation and roadmap creation to align technology initiatives with overarching business goals.',
      colSpan: 'col-span-1 md:col-span-1'
    },
    {
      title: 'Salesforce Implementation',
      desc: 'Seamless deployment of CRM solutions, customized to align with your unique business workflow and maximize performance.',
      colSpan: 'col-span-1 md:col-span-2'
    },
    {
      title: 'MuleSoft Development',
      desc: 'Unlock seamless data flow and process automation with scalable API architectures that modernize your infrastructure at a fraction of the cost.',
      colSpan: 'col-span-1 md:col-span-2'
    },
    {
      title: 'Advisory Services',
      desc: 'Strategic consultation and roadmap creation to align technology initiatives with overarching business goals.',
      colSpan: 'col-span-1 md:col-span-1'
    },
  ];

  return (
    <section className="py-20 bg-[#FAFAFA] w-full">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn delay={100} direction="up">
          <p className="text-[#A855F7] text-sm font-bold tracking-widest uppercase mb-4">
            OUR SERVICES
          </p>
          <h2 className={`${spaceGrotesk.className} text-3xl md:text-3xl font-extrabold text-gray-900 mb-12`}>
            Advanced Technology Offerings
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <FadeIn key={idx} delay={idx * 100} direction="up" className={card.colSpan}>
              <div
                className={`bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B1229] flex items-center justify-center mb-6 text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
