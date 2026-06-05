'use client'

import CarreerProgramForm from '@/components/carreerProgramForm'
import {
  techElevateAdvancedModules,
  techElevateAdmissions,
  techElevateBenefits,
  techElevateBenefitsSection,
  techElevateCohorts,
  techElevateCurriculum,
  techElevateCurriculumPillars,
  techElevateCurriculumSection,
  techElevateFeaturedStory,
  techElevateHero,
  techElevateSuccessStoriesSection,
} from '@/data/techelevateData'
import {
  Briefcase,
  ChevronDown,
  Medal,
  ShieldCheck,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function TechElevate() {
  const [selectedCohort, setSelectedCohort] = useState(techElevateCohorts[0])

  return (
    <div className="bg-white text-black font-sans antialiased min-h-screen">
      <main className="pt-24">
        <section className="relative px-8 py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-gray-100 text-black rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              {techElevateHero.badge}
            </div>
            <h1 className="text-5xl lg:text-5xl font-sans font-extrabold text-black leading-[1.1] tracking-tighter">
              {techElevateHero.title}{' '}
              <span className="text-gray-800">{techElevateHero.titleHighlight}</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              {techElevateHero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {techElevateHero.highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-xl"
                >
                  {highlight.icon === 'shield' ? (
                    <ShieldCheck className="text-gray-800" size={20} />
                  ) : (
                    <Briefcase className="text-gray-800" size={20} />
                  )}
                  <span className="font-sans font-bold">{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 border border-gray-200 aspect-[4/5] lg:aspect-auto h-full min-h-[400px]">
              <img
                alt="Professional workspace at Digital Academy"
                className="absolute inset-0 w-full h-full object-cover"
                src={techElevateHero.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-black text-white rounded-xl">
                    <Medal />
                  </div>
                  <div>
                    <p className="text-white font-sans font-extrabold text-lg">
                      {techElevateHero.cardTitle}
                    </p>
                    <p className="text-white/80 text-xs">{techElevateHero.cardSubtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-w-7xl mx-auto" id="benefits">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-sans font-extrabold text-black tracking-tight mb-4">
              {techElevateBenefitsSection.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              {techElevateBenefitsSection.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techElevateBenefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="bg-gray-50 p-8 rounded-3xl border border-gray-200 hover:border-gray-400 transition-all group"
                >
                  <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-sans font-extrabold text-black mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-gray-50 py-24 px-8" id="highlights">
          <section className="max-w-7xl mx-auto" id="curriculum">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                <h2 className="text-5xl font-sans font-extrabold text-black tracking-tighter mb-6 leading-none">
                  {techElevateCurriculumSection.titleLines[0]} <br />
                  {techElevateCurriculumSection.titleLines[1]}
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  {techElevateCurriculumSection.description}
                </p>
                <div className="space-y-4">
                  {techElevateCurriculumPillars.map((item) => (
                    <div
                      key={item.label}
                      className={`p-4 border-l-4 ${item.active ? 'border-black bg-gray-50' : 'border-gray-200 hover:bg-gray-50'} transition-colors rounded-r-xl`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-2xl font-sans font-black ${item.active ? 'text-black' : 'text-slate-300 group-hover:text-black'} transition-colors`}
                        >
                          {item.index}
                        </span>
                        <span
                          className={`font-bold ${item.active ? 'text-black' : 'text-slate-600'} transition-colors text-sm uppercase tracking-widest`}
                        >
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/3 space-y-6">
                <div className="space-y-4">
                  {techElevateCurriculum.map((module) => (
                    <details
                      key={module.title}
                      className="group bg-white border border-gray-200 rounded-3xl overflow-hidden"
                      open={module.open}
                    >
                      <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                        <h3 className="text-xl font-sans font-extrabold text-black">
                          {module.title}
                        </h3>
                        <ChevronDown
                          className="text-black transition-transform group-open:rotate-180"
                          size={24}
                        />
                      </summary>
                      <div className="px-8 pb-8">
                        {module.type === 'list' && Array.isArray(module.content) ? (
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-600">
                            {module.content.map((item) => (
                              <li key={item} className="flex items-center gap-2">
                                <span className="text-gray-800">●</span> {item}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {module.content}
                          </p>
                        )}
                      </div>
                    </details>
                  ))}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {techElevateAdvancedModules.map((module) => (
                      <div
                        key={module.title}
                        className="bg-white border border-gray-200 p-6 rounded-3xl"
                      >
                        <h4 className="font-sans font-bold text-black mb-2">
                          {module.title}
                        </h4>
                        <p className="text-xs text-gray-600">{module.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="py-32 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-6 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-8 py-2 px-4 bg-black text-white rounded-full text-sm font-bold tracking-tight">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  {techElevateFeaturedStory.badge}
                </div>
                <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
                  {techElevateFeaturedStory.title}{' '}
                  <span className="text-gray-800 italic">
                    {techElevateFeaturedStory.titleHighlight}
                  </span>
                  {techElevateFeaturedStory.titleSuffix}
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                  <p>{techElevateFeaturedStory.paragraphs[0]}</p>
                  <p>
                    Her remarkable transformation was recognized internationally, earning her a
                    feature on the official <strong>Salesforce Global Blog</strong>, showcasing
                    her technical prowess and the impact of dedicated training.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    className="w-full object-cover"
                    alt="Tanishka Singh featured on Salesforce Global Blog"
                    src={techElevateFeaturedStory.image}
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center -z-10 shadow-xl">
                  <span className="text-black font-black text-4xl font-sans">#1</span>
                </div>
                <div className="absolute -bottom-5 sm:bottom-10 -right-10 glass-effect bg-white/70 p-2 sm:p-6 rounded-xl shadow-xl max-w-[200px] z-20">
                  <div className="text-black font-bold text-sm sm:text-lg mb-1">Salesforce</div>
                  <div className="text-gray-600 text-[10px] sm:text-xs uppercase font-bold tracking-widest">
                    Global Feature
                  </div>
                </div>
              </div>
              <Link
                className="inline-flex w-fit mt-4 items-center gap-4 bg-black text-white px-10 py-5 rounded-lg font-bold sm:text-xl hover:bg-gray-800 hover:scale-105 transition-all shadow-lg"
                href={techElevateFeaturedStory.link}
                target="_blank"
              >
                {techElevateFeaturedStory.linkText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white px-8 py-16" id="success-stories">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl lg:text-6xl font-sans font-extrabold text-black tracking-tighter mb-4 leading-tight">
                {techElevateSuccessStoriesSection.title}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto font-sans">
                {techElevateSuccessStoriesSection.description}
              </p>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
              <div>
                <div className="block lg:hidden">
                  <div className="flex gap-3 flex-wrap overflow-x-auto pb-2">
                    {techElevateCohorts.map((cohort) => (
                      <button
                        key={cohort.id}
                        onClick={() => setSelectedCohort(cohort)}
                        className={`min-w-[70px] sm:min-w-[140px] rounded-full border px-3 py-2 text-xs sm:text-sm font-semibold transition ${selectedCohort.id === cohort.id ? 'bg-black text-white border-transparent' : 'bg-gray-50 text-gray-700 border-gray-300 hover:border-black'}`}
                      >
                        {cohort.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
                  <div className="space-y-3">
                    {techElevateCohorts.map((cohort) => (
                      <button
                        key={cohort.id}
                        onClick={() => setSelectedCohort(cohort)}
                        className={`w-full text-left rounded-2xl px-5 py-4 transition border ${selectedCohort.id === cohort.id ? 'bg-black text-white border-transparent shadow-lg' : 'bg-white text-slate-700 border-gray-300 hover:border-black'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{cohort.label}</span>
                        </div>
                        <p
                          className={`mt-2 text-xs ${selectedCohort.id === cohort.id ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                          {cohort.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-8 py-4 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-sans font-extrabold text-black">
                        {techElevateSuccessStoriesSection.programTitle}
                      </h3>
                      <p className="text-sm text-gray-600 max-w-2xl">
                        {selectedCohort.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full mx-auto sm:mx-0 bg-gray-100 text-black px-4 py-1 text-sm font-bold uppercase tracking-wide">
                      {selectedCohort.label}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-4">
                  {selectedCohort.students.map((student) => (
                    <div
                      key={student.name}
                      className="bg-white p-6 rounded-[1rem] border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-slate-50">
                        <img
                          alt={student.name}
                          className="w-full h-full object-cover"
                          src={student.image}
                        />
                      </div>
                      <h4 className="font-sans font-extrabold text-black mb-1">
                        {student.name}
                      </h4>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                        {student.role}
                      </p>
                      <p className="text-[10px] font-bold text-black">{student.company}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-24 px-5 sm:px-8 max-w-7xl mx-auto" id="admissions">
          <div className="bg-gray-50 rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 sm:p-12 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-sans font-extrabold text-black mb-4">
                {techElevateAdmissions.title}
              </h2>
              <p className="text-gray-600 mb-10">{techElevateAdmissions.description}</p>
              <CarreerProgramForm />
            </div>
            <div className="hidden lg:block relative h-full min-h-[600px]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={techElevateAdmissions.image}
                alt="Course image"
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
            </div>
          </div>
        </section> */}
      </main>
    </div>
  )
}
