import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Affiliations from '@/components/Affiliations';
import Partners from '@/components/Partners';
import AboutSection from '@/components/AboutSection';
import Offerings from '@/components/Offerings';
import DigitalLifecycle from '@/components/DigitalLifecycle';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Affiliations />
        <Partners />
        <AboutSection />
        <Offerings />
        <DigitalLifecycle />
      </main>
      <Footer />
    </div>
  );
}
