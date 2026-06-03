import { Fragment } from "react";
import FadeIn from "./FadeIn";
import Image from "next/image";

type Affiliation = {
  id: string;
  name: string;
  variant: "salesforce" | "trailblazer";
  featured?: boolean;
  gridClass: string;
};

const affiliations: Affiliation[] = [
  {
    id: "summit",
    name: "Summit Partner",
    variant: "salesforce",
    featured: true,
    gridClass:
      "order-first col-span-full sm:col-span-2 md:order-none md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1",
  },
  {
    id: "msp",
    name: "MSP Partner",
    variant: "salesforce",
    gridClass: "md:col-span-1 md:col-start-3 md:row-start-1",
  },
  {
    id: "platform",
    name: "Platform Partner Advisory Board",
    variant: "salesforce",
    gridClass: "md:col-span-1 md:col-start-4 md:row-start-1",
  },
  {
    id: "trailblazer",
    name: "Trailblazer Workforce Partner",
    variant: "trailblazer",
    gridClass: "md:col-span-1 md:col-start-3 md:row-start-2",
  },
  {
    id: "commerce",
    name: "Commerce Cloud Partner Technical Advisory Board",
    variant: "salesforce",
    gridClass: "md:col-span-1 md:col-start-4 md:row-start-2",
  },
];

const SUMMIT_TIMELINE_YEARS = [2023, 2024, 2025, 2026];
const SUMMIT_PARTNER_SINCE = 2023;
const SUMMIT_PARTNER_UNTIL = 2026;

function SummitPartnerTimeline() {
  return (
    <div className="mt-5 w-full max-w-xs sm:max-w-sm">
      <div className="flex w-full items-start">
        {SUMMIT_TIMELINE_YEARS.map((year, index) => {
          const isStart = year === SUMMIT_PARTNER_SINCE;
          const isEnd = year === SUMMIT_PARTNER_UNTIL;
          const isMiddle = !isStart && !isEnd;

          return (
            <Fragment key={year}>
              {index > 0 && (
                <div
                  className="h-0.5 min-w-3 flex-1 bg-white/35 mt-3"
                  aria-hidden
                />
              )}
              <div className="flex shrink-0 flex-col items-center gap-1.5">
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full border-2 sm:h-6 sm:w-6 ${isEnd
                    ? "border-white bg-white/50"
                    : isStart
                      ? "bg-white/50"
                      : "bg-white/50"
                    }`}
                >
                  {isStart && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
                  )}
                  {isEnd && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
                  )}
                  {isMiddle && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
                  )}
                </div>
                <span className="text-[10px] font-bold text-white sm:text-[11px]">
                  {year}
                </span>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function AffiliationCard({ item }: { item: Affiliation }) {
  const isFeatured = item.featured;

  return (
    <div
      className={`group relative flex h-full min-h-[140px] flex-col overflow-hidden rounded-2xl bg-[#0B336B] p-5 text-center text-white sm:p-6 ${isFeatured
        ? "min-h-[260px] items-center justify-center md:min-h-0"
        : "items-center justify-center"
        }`}
    >
      <div className="flex w-full flex-col items-center">
        <div
          className={`relative flex shrink-0 items-center justify-center ${isFeatured ? "mb-3" : "mb-3"
            }`}
        >
          <Image
              src="/images/salesforcelogo.png"
              alt="Salesforce"
              width={isFeatured ? 200 : 80}
              height={isFeatured ? 200 : 28}
              className={`w-auto object-contain ${isFeatured ? "h-10 sm:h-20" : "h-6 sm:h-10"
                }`}
            />
        </div>

        <p
          className={`relative font-bold uppercase leading-snug tracking-wide ${isFeatured
            ? "max-w-[240px] text-sm sm:text-xl"
            : "max-w-[200px] text-[10px] sm:text-xs"
            }`}
        >
          {item.name}
        </p>
      </div>

      {isFeatured && <SummitPartnerTimeline />}
    </div>
  );
}

export default function Affiliations() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-4 md:grid-rows-2 md:gap-5 md:auto-rows-fr">
          {affiliations.map((item, idx) => (
            <FadeIn
              key={item.id}
              delay={120 + idx * 80}
              direction="up"
              className={`h-full ${item.gridClass}`}
            >
              <AffiliationCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
