import FadeIn from './FadeIn';

export default function Partners() {
  const partners = [
    { name: 'TRANTOR', gradient: 'from-[#0A6B9C] to-[#43B1A2]' },
    { name: 'CPTfly', gradient: 'from-[#8E2DE2] to-[#4A00E0]' },
    { name: 'digitsec', gradient: 'from-[#1A2980] to-[#26D0CE]' },
    { name: 'Salesforce', gradient: 'from-[#009EDB] to-[#00609C]' },
    { name: 'TRANTOR 2', gradient: 'from-[#0A6B9C] to-[#43B1A2]' },
  ];

  return (
    <section className="py-8 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn delay={100} direction="up">
          <h2 className="text-center text-sm tracking-[0.1em] text-gray-500 font-semibold uppercase mb-10">
            Our Customers & Partners
          </h2>
        </FadeIn>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, idx) => (
            <FadeIn key={idx} delay={idx * 100} direction="up">
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 cursor-pointer">
                <div className={`w-8 h-8 rounded bg-gradient-to-br ${partner.gradient} flex items-center justify-center`}>
                  <div className="w-4 h-4 bg-white rounded-full opacity-30"></div>
                </div>
                <span className="font-bold text-lg tracking-tight text-gray-700">{partner.name}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
