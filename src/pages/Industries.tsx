import { Link } from "react-router-dom";
import { ArrowRight, Building2, Construction, Hotel, Landmark, Store, Users } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { industries as industryItems, media } from "@/data/siteContent";

const icons = [Construction, Building2, Hotel, Users, Landmark, Store];

export default function Industries() {
  return (
    <PageLayout>
      <Seo
        title="Commercial & Construction Street Sweeping Nassau | ClearRoad Bahamas"
        description="Street sweeping for construction companies, commercial properties, hotels, communities, public works and event venues across New Providence."
      />

      <section className="relative overflow-hidden bg-[#111313] text-white">
        <div className="absolute inset-0 road-grid opacity-30" />
        <div className="content-container relative grid min-h-[560px] gap-10 py-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-eyebrow">Industries</p>
            <h1 className="mt-5 text-5xl font-bold leading-[.92] sm:text-6xl lg:text-7xl">Street Sweeping for Bahamian Properties and Work Sites</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#cbc7be]">
              ClearRoad supports contractors, property teams, communities and organisations responsible for keeping paved areas cleaner and easier to maintain.
            </p>
            <Link to="/request-assessment" className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-4 text-sm font-bold text-[#171919]">
              Discuss Your Site <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img src={media.dulevo850} alt="Compact street sweeper reference for commercial and construction sites in Nassau" className="sweeper-float min-h-[360px] w-full object-contain" />
        </div>
      </section>

      <section className="bg-[#f2eee5] py-16 sm:py-20">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8a6b08]">Where ClearRoad fits</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Different sites. Same basic problem.</h2>
            </div>
            <p className="max-w-2xl leading-7 text-[#595852]">
              Dirt, sand and debris collect across paved spaces. The right service depends on how the property is used, when it can be accessed and what needs to be removed.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {industryItems.map(([title, copy], i) => {
              const Icon = icons[i] || Building2;
              return (
                <article key={title} className="group relative overflow-hidden border border-black/10 bg-white p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center bg-[#171919] text-accent"><Icon className="h-5 w-5" /></div>
                    <span className="text-xs font-bold text-[#9a7600]">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 text-3xl font-bold">{title}</h3>
                  <p className="mt-4 max-w-xl leading-7 text-[#595852]">{copy}</p>
                  <Link to="/request-assessment" className="mt-7 inline-flex items-center gap-2 text-sm font-bold">
                    Review this site <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#171919] py-16 text-white sm:py-20">
        <div className="content-container grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-eyebrow">Commercial use</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">The site should look maintained before anyone asks why it doesn't.</h2>
            <p className="mt-5 leading-7 text-[#c8c4bc]">
              For customer-facing properties, construction entrances and shared roads, sweeping becomes part of routine property care rather than a cleanup emergency.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-[#202322]">
            <div className="absolute inset-0 road-grid opacity-25" />
            <img src={media.dzeroWhite} alt="Compact electric sweeper for commercial property sweeping in New Providence" className="relative z-[1] min-h-[360px] w-full object-contain p-6" />
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 text-[#171919]">
        <div className="content-container flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-5xl font-bold">Have a site in mind?</h2>
            <p className="mt-4 max-w-2xl">Send the location and tell us how the property is used. We will review whether compact sweeping equipment fits the job.</p>
          </div>
          <Link to="/request-assessment" className="inline-flex shrink-0 items-center gap-2 bg-[#171919] px-6 py-4 font-bold text-white">
            Request a Site Assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
