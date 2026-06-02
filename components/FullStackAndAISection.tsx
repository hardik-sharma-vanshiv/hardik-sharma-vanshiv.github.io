"use client";

import FadeIn from "./FadeIn";
import IconCloud from "./ui/icon-cloud";
import { Skeleton } from "./ui/Skeleton";

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
    <section className="max-w-7xl mx-auto bg-white py-16 md:py-20">
      <div className="w-full px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* AI Card */}
          <FadeIn
            delay={100}
            direction="up"
            className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
          >
            <span className="inline-block text-xs font-extrabold tracking-widest uppercase text-gray-400 mb-4">
              Artificial Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              AI Solutions
            </h2>
            <p className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed">
              Build intelligent workflows and AI-first products that improve
              decision-making, automate repetitive operations, and create better
              customer experiences at scale.
            </p>
            <div className="mt-8 min-h-[220px] sm:min-h-[260px] rounded-xl flex items-center justify-center text-sm text-gray-400">
              <Skeleton />
            </div>
          </FadeIn>

          {/* FullStack Card */}
          <FadeIn
            delay={180}
            direction="up"
            className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
          >
            <span className="inline-block text-xs font-extrabold tracking-widest uppercase text-gray-400 mb-4">
              Full Stack Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              FullStack Engineering
            </h2>
            <p className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed">
              Deliver robust end-to-end applications with clean architecture,
              scalable backend services, and modern frontend experiences tailored
              to your business goals.
            </p>
            <div className="mt-8 min-h-[140px] sm:min-h-[180px] rounded-xl flex items-center justify-center text-sm text-gray-400">
              <IconCloud iconSlugs={slugs} />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
