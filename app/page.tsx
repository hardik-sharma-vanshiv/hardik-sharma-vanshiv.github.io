import AboutSection from '@/components/AboutSection';
import DigitalLifecycle from '@/components/DigitalLifecycle';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Offerings from '@/components/Offerings';
import Partners from '@/components/Partners';
import { SalesforceSection } from '@/components/SalesforceSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        {/* <Affiliations /> */}
        <AboutSection />
        <Offerings />
        <SalesforceSection />
        <DigitalLifecycle />
      </main>
      <Footer />
    </div>
  );
}
