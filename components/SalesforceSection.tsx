"use client";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { SalesforceService } from "./SalesforceService";

export function SalesforceSection() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-16 items-center">
                    <FadeIn delay={100} direction="right" className="flex-1 w-full text-center lg:text-left">
                        <p className="text-[#A855F7] text-sm font-extrabold tracking-widest uppercase mb-4">
                            Salesforce Expertise
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-6">
                            Your Salesforce Partner. <br className="hidden sm:block" />
                            Every Step Forward.
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                            Salesforce is a cloud-based customer relationship management (CRM) platform that helps businesses manage their customers, sales, and marketing.
                        </p>
                        <Link
                            href="/salesforce"
                            className="inline-flex items-center justify-center rounded-lg bg-[#A855F7] hover:bg-[#9333EA] text-white px-8 py-3 text-sm font-semibold transition-colors"
                        >
                            Know More
                        </Link>
                    </FadeIn>

                    <FadeIn delay={200} direction="left" className="flex-1 w-full">
                        <div className="w-full min-h-[300px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[420px] flex items-center justify-center">
                            <SalesforceService />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}