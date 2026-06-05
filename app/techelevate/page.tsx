import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TechElevate from '@/components/TechElevate'

export const metadata = {
  title: 'Tech Elevate | Career Accelerator Program',
  description:
    'Join the Vanshiv Salesforce Career Accelerator Program — hands-on technical training, soft skills development, and dedicated placement support to launch your corporate career.',
}

export default function TechElevatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <TechElevate />
      <Footer />
    </div>
  )
}
