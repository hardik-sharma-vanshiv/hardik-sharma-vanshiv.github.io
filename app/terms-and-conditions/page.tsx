import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions | Vanshiv',
  description: 'Vanshiv Technologies Terms and Conditions',
};

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] font-sans text-gray-900">
      <Navbar />
      <main className="pt-24 pb-20 px-4 max-w-4xl mx-auto flex-1">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Terms & Conditions</h1>
        <div className="prose prose-purple max-w-none text-gray-600">
          <p className="mb-4">Last updated: April 21, 2026</p>
          <p className="mb-4">
            Welcome to Vanshiv. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Use of Site</h2>
          <p className="mb-4">
            You may use the Site only for lawful purposes and in accordance with these Terms of Use.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-4">
            The website and its entire contents, features, and functionality are owned by Vanshiv, its licensors, or other providers of such material.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Limitation of Liability</h2>
          <p className="mb-4">
            In no event will Vanshiv, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
