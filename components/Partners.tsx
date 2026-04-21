import FadeIn from './FadeIn';
import Marquee from "react-fast-marquee";


export default function Partners() {
  const partners = [
    { name: 'TRANTOR', src: '/images/client1.png' },
    { name: 'CPTfly', src: '/images/client6.png' },
    { name: 'digitsec', src: '/images/client5.png' },
    { name: 'Salesforce', src: '/images/client8.png' },
    { name: 'TRANTOR 2', src: '/images/client9.png' },
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
