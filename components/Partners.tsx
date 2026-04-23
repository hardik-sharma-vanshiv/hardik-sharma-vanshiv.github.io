import FadeIn from './FadeIn';
import Marquee from "react-fast-marquee";


export default function Partners() {
  const partners = [
    { name: 'TRANTOR', src: '/images/partner1.png' },
    { name: 'CPTfly', src: '/images/partner2.png' },
    { name: 'digitsec', src: '/images/partner3.png' },
    { name: 'Salesforce', src: '/images/partner4.png' },
    { name: 'TRANTOR 2', src: '/images/partner5.png' },
    { name: 'TRANTOR', src: '/images/partner6.png' },
    { name: 'CPTfly', src: '/images/partner7.png' },
    { name: 'digitsec', src: '/images/partner8.png' },
    { name: 'Salesforce', src: '/images/partner9.png' },
    { name: 'TRANTOR 2', src: '/images/partner10.png' },
    { name: 'TRANTOR', src: '/images/partner11.png' },
    { name: 'CPTfly', src: '/images/partner12.png' },
    { name: 'digitsec', src: '/images/partner13.png' },
  ];

  return (
    <section className="py-8 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn delay={100} direction="up">
          <h2 className="text-center text-sm tracking-[0.1em] text-gray-500 font-semibold uppercase mb-10">
            Our Partners
          </h2>
        </FadeIn>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <Marquee
            gradient
          >
            {partners.map((partner, idx) => (
              <img src={partner.src} alt={partner.name} className="w-auto h-10 font-bold text-lg tracking-tight text-gray-700 ml-20" />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
