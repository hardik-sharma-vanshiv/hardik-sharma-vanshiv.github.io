import FadeIn from "./FadeIn";
import {
  coreExpertiseOfferings,
  OFFERING_ICON_BG_CLASS,
  OFFERING_ICON_CLASS,
} from "@/data/offeringsData";

export default function Offerings() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20" id="offerings">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <FadeIn delay={100} direction="up">
          <p className="mb-4 text-sm font-bold tracking-widest text-[#A855F7] uppercase">
            Offerings
          </p>
          <div className="mb-4 flex items-center gap-3">
            <h2 className="text-2xl leading-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
              Core Expertise & Services
            </h2>
          </div>
          <p className="mb-10 max-w-3xl text-sm text-gray-600 md:mb-12 md:text-base font-secondary">
            Advanced multi-cloud technology solutions across Salesforce clouds,
            commerce, public sector, marketing, integration, and enterprise
            architecture.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-fr">
          {coreExpertiseOfferings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn
                key={item.id}
                delay={120 + idx * 80}
                direction="up"
                className={`h-full ${item.gridClass}`}
              >
                <article className="flex h-full min-h-[200px] flex-col rounded-xl border border-black/10 bg-white p-6 sm:p-8">
                  <div
                    className={`mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${OFFERING_ICON_BG_CLASS} ${OFFERING_ICON_CLASS}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base font-secondary">
                    {item.description}
                  </p>
                  <ul className="mt-auto space-y-2 border-t border-gray-100 pt-4">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-gray-500 font-secondary"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A855F7]"
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
