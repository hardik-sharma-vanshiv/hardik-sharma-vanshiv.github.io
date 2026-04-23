import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import Leadership from '@/components/Leadership';

export const metadata = {
  title: 'About Us | Vanshiv',
  description: 'Discover the story behind Vanshiv and our approach to robust digital architectures.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] font-sans text-gray-900">
      <Navbar />
      <main className="pt-20">
        <section className="bg-white py-20 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Story</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vanshiv is a pioneering digital transformation consultancy specializing in complex 
              Salesforce and MuleSoft architectures. We build software systems that elevate industry leaders.
            </p>
          </div>
        </section>
        <AboutSection />
        <Leadership />
      </main>
      <Footer />
    </div>
  );
}
