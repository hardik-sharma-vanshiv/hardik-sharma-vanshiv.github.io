import FadeIn from './FadeIn';
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export default function DigitalLifecycle() {
  const steps = [
    { num: '01', title: 'Cloud Architecture & Design', desc: 'Translating business requirements into scalable, secure, and agile cloud-native infrastructures.' },
    { num: '02', title: 'Experience & Solution Design', desc: 'Crafting user-centric digital products and CRM interfaces that command engagement and drive user adoption.' },
    { num: '03', title: 'Deployment & Integration', desc: 'Seamlessly integrating complex systems via automated pipelines for unified data visibility.' },
    { num: '04', title: 'Managed Services & Analytics', desc: 'Continuous iteration, proactive support, and actionable data intelligence for sustained velocity.' },
  ];

  return (
    <section className="py-24 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 md:items-center">
        <FadeIn direction="left" className="flex-1 md:pr-12">
          <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6`}>
            Mastering the End-to-End Digital Transformation Lifecycle
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed max-w-sm text-sm">
            From initial discovery to post-launch optimization, our frameworks ensure your enterprise continually innovates and evolves.
          </p>
          <button className="bg-[#A855F7] hover:bg-[#9333EA] text-white px-8 py-3 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-purple-500/30">
            Learn Our Process
          </button>
        </FadeIn>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 150} direction="right">
              <div className="bg-[#F8F9FC] border border-[#EBEFFF] rounded-xl p-8 hover:shadow-lg transition-all group h-full">
                <span className="text-[#A855F7] text-3xl font-light mb-4 block group-hover:scale-110 transition-transform origin-left">
                  {step.num}
                </span>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
