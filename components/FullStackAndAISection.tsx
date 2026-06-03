"use client";

import FadeIn from "./FadeIn";
import IconCloud from "./ui/icon-cloud";
import { Skeleton } from "./ui/Skeleton";

const cardClassName =
  "rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 md:p-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 xl:gap-12";

const textBlockClassName = "flex flex-col gap-0 flex-1 min-w-0 w-full";

const visualBlockClassName =
  "w-full lg:flex-1 lg:min-w-0 min-h-[200px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[280px] rounded-xl flex items-center justify-center overflow-hidden text-sm text-gray-400";

export default function FullStackAndAISection() {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <section className="max-w-7xl mx-auto bg-white py-12 sm:py-16 md:py-20">
      <div className="w-full px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {/* AI Card */}
          <FadeIn delay={100} direction="up" className={cardClassName}>
            <div className={textBlockClassName}>
              <span className="inline-block text-sm font-extrabold tracking-widest uppercase text-gray-400 mb-4">
                Artificial Intelligence
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                AI Solutions
              </h2>
              <p className="mt-4 sm:mt-5 text-sm md:text-lg text-gray-600 leading-relaxed font-secondary">
                Build intelligent workflows and AI-first products that improve
                decision-making, automate repetitive operations, and create better
                customer experiences at scale.
              </p>
            </div>

            <div className={visualBlockClassName}>
              <Skeleton />
            </div>
          </FadeIn>

          {/* FullStack Card */}
          <FadeIn delay={180} direction="up" className={cardClassName}>
            <div className={textBlockClassName}>
              <span className="inline-block text-sm font-extrabold tracking-widest uppercase text-gray-400 mb-4">
                Full Stack Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                FullStack Engineering
              </h2>
              <p className="mt-4 sm:mt-5 text-sm md:text-lg text-gray-600 leading-relaxed font-secondary">
                Deliver robust end-to-end applications with clean architecture,
                scalable backend services, and modern frontend experiences tailored
                to your business goals.
              </p>
            </div>

            <div className={visualBlockClassName}>
              <IconCloud iconSlugs={slugs} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
