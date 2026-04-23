import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import Leadership from '@/components/Leadership';
import FadeIn from '@/components/FadeIn';
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: 'About Us | Vanshiv - Multi-Cloud & Digital Transformation Experts',
  description: 'Discover the story behind Vanshiv. We are a premier digital transformation consultancy specializing in enterprise-grade Salesforce and MuleSoft architectures.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main className="">
        <section className="bg-[url('/images/aboutBg.jpg')] bg-cover h-screen flex items-center py-20 px-4 border-b border-gray-100">
          <FadeIn delay={100} direction="up" className="max-w-4xl mx-auto text-center">
            <h1 className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight`}>OUR STORY</h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              Vanshiv is a premier digital transformation consultancy specializing in enterprise-grade Salesforce and MuleSoft architectures. We build intelligent, scalable cloud solutions that empower industry leaders to navigate the future.
            </p>
          </FadeIn>
        </section>
        <AboutSection />
        <Leadership />
      </main>
      <Footer />
    </div>
  );
}
