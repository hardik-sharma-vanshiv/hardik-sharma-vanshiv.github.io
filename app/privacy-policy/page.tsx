import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Vanshiv',
  description: 'Vanshiv Technologies Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] font-sans text-gray-900">
      <Navbar />
      <main className="pt-24 pb-20 px-4 max-w-4xl mx-auto flex-1">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-purple max-w-none text-gray-600">
          <p className="mb-4">Last updated: April 21, 2026</p>
          <p className="mb-4">
            At Vanshiv, we take your privacy seriously. This privacy policy describes how we collect, use, and share your personal information.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            When you visit our website, we may collect certain information about your device and interaction with our website, such as IP address, browser type, and cookie data which records your preferences.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to communicate with you, analyze website traffic, and ensure the security of our platform.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cookie Consent</h2>
          <p className="mb-4">
            We use a cookie consent mechanism that records your preferences regarding functional, analytical, and advertising cookies. You can revoke this consent at any time.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
