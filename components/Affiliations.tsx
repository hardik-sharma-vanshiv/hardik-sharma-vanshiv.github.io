import FadeIn from './FadeIn';

export default function Affiliations() {
  const affiliations = [
    { name: 'MSP PARTNER', logo: 'Salesforce' },
    { name: 'PLATFORM PARTNER ADVISORY BOARD', logo: 'Salesforce' },
    { name: 'TRAILBLAZER WORKFORCE PARTNER', logo: 'Trailblazer' },
    { name: 'COMMERCE CLOUD PARTNER TECHNICAL ADVISORY BOARD', logo: 'Salesforce' },
    { name: 'SUMMIT PARTNER', logo: 'Salesforce' },
  ];

  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn delay={100} direction="up">
          <h2 className="text-center text-sm tracking-[0.1em] text-gray-500 font-semibold uppercase mb-10">
            Our Strategic Affiliations
          </h2>
        </FadeIn>
        <div className="flex flex-wrap justify-center gap-4">
          {affiliations.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 150} direction="up">
              <div className="bg-[#0B336B] rounded-lg p-4 flex flex-col items-center justify-center w-[200px] h-[100px] text-white text-center shadow-md shadow-blue-900/10 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  {/* Cloud icon placeholder representing Salesforce */}
                  <svg className="w-6 h-6 text-[#00A1E0]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 19c2.485 0 4.5-2.015 4.5-4.5 0-2.43-1.92-4.408-4.33-4.496C17.065 6.643 14.153 4 10.5 4 7.644 4 5.21 5.86 4.316 8.35 1.93 8.784 0 10.875 0 13.5 0 16.538 2.462 19 5.5 19h12z"/>
                  </svg>
                  <span className="text-[10px] font-bold">{item.logo}</span>
                </div>
                <p className="text-[9px] font-bold uppercase leading-tight tracking-wide">
                  {item.name}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
