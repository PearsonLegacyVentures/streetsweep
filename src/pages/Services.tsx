import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { media, services as serviceItems } from "@/data/siteContent";

const details = [
  ["Commercial Properties", "Parking lots, shopping centres, hotels, warehouses and business compounds.", ["Loose sand", "Litter", "Surface dirt"], "One-time or recurring"],
  ["Construction Sites", "Paved access roads and surrounding surfaces affected by active works.", ["Tracked dirt", "Loose aggregate", "Dust buildup"], "Project-based or recurring"],
  ["Roads & Communities", "Private roads, developments, shared curbs and common paved areas.", ["Sand", "Leaves", "Roadside debris"], "Monthly or site-specific"],
  ["Events & Venues", "Parking areas, entrances and routes around concerts, festivals and sporting events.", ["Litter", "Dust", "Post-event debris"], "Pre-event, post-event or both"],
  ["Post-Storm Cleanup", "Selected paved areas affected by unexpected surface debris after severe weather.", ["Loose debris", "Sand", "Light surface waste"], "On request, after site review"],
];

export default function Services() {
  return (
    <PageLayout>
      <Seo
        title="Street Sweeping Services Nassau | ClearRoad Bahamas"
        description="One-time and recurring street sweeping for commercial properties, construction sites, parking lots, communities and event areas across New Providence."
      />

      <section className="relative overflow-hidden bg-[#111313] text-white">
        <div className="absolute inset-0 road-grid opacity-30" />
        <div className="content-container relative grid min-h-[560px] gap-10 py-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-eyebrow">Street sweeping services</p>
            <h1 className="mt-5 text-5xl font-bold leading-[.92] sm:text-6xl lg:text-7xl">Street Sweeping Services in Nassau</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#cbc7be]">One-time and scheduled sweeping for commercial properties, construction sites, private roads, communities and event areas across New Providence.</p>
            <Link to="/request-assessment" className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-4 text-sm font-bold text-[#171919]">
              Request a Site Assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img src={media.dzeroWhite} alt="Compact street sweeper used as reference for street sweeping services in Nassau" className="sweeper-float min-h-[360px] w-full object-contain" />
        </div>
      </section>

      <section className="bg-[#f2eee5] py-16 sm:py-20">
        <div className="content-container">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8a6b08]">Choose the job</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Sweeping built around the site.</h2>
            <p className="mt-4 leading-7 text-[#595852]">The service changes depending on the surface, debris, access and operating window. We review those details before quoting the work.</p>
          </div>

          <div className="mt-10 grid gap-5">
            {details.map(([title, copy, debris, timing], i) => (
              <article key={title as string} className="grid overflow-hidden border border-black/10 bg-white lg:grid-cols-[.7fr_1.3fr]">
                <div className="relative min-h-[260px] bg-[#dbe6e4] p-6">
                  <span className="absolute left-5 top-5 z-10 bg-[#171919] px-3 py-2 text-xs font-bold text-white">0{i + 1}</span>
                  <img src={i % 2 ? media.dulevo850 : media.dzeroWhite} alt={`${title} street sweeping equipment reference`} className="h-full min-h-[230px] w-full object-contain" loading={i ? "lazy" : undefined} />
                </div>
                <div className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-3xl font-bold sm:text-4xl">{title}</h3>
                  <p className="mt-4 max-w-2xl leading-7 text-[#595852]">{copy}</p>

                  <div className="mt-7 grid gap-6 border-t border-black/10 pt-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8a6b08]">Common debris</p>
                      <div className="mt-3 grid gap-2 text-sm">
                        {(debris as string[]).map((x) => <span key={x} className="flex items-center gap-2"><Check className="h-4 w-4" /> {x}</span>)}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8a6b08]">Typical schedule</p>
                      <p className="mt-3 text-sm font-semibold">{timing}</p>
                    </div>
                  </div>

                  <Link to="/request-assessment" className="mt-7 inline-flex items-center gap-2 text-sm font-bold">
                    Discuss this service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171919] py-16 text-white sm:py-20">
        <div className="content-container grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-eyebrow">Simple service options</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">One-off cleanup or recurring route.</h2>
            <p className="mt-5 leading-7 text-[#c8c4bc]">The goal is straightforward: clean the right area at the right time without adding unnecessary complexity.</p>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            {[
              ["Routine Sweep", "Recurring parking lots, roads and commercial properties."],
              ["Construction Sweep", "Cleanup around active works and paved access routes."],
              ["ClearRoad Cleanup", "Events, storms and one-off surface debris."],
            ].map(([title, copy]) => (
              <div key={title} className="bg-[#1d201f] p-6">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#c8c4bc]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 text-[#171919]">
        <div className="content-container flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-5xl font-bold">Need a paved area swept?</h2>
            <p className="mt-4 max-w-2xl">Send the location, surface type and a short description. We will review the site and prepare the next step.</p>
          </div>
          <Link to="/request-assessment" className="inline-flex shrink-0 items-center gap-2 bg-[#171919] px-6 py-4 font-bold text-white">
            Request a Site Assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
