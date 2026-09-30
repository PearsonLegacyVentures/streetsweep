import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock3, Repeat2 } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { media, services as serviceItems } from "@/data/siteContent";

const schedules = ["One-time cleanups", "Recurring routes", "Day or off-hour windows"];

export default function Services() {
  return (
    <PageLayout>
      <Seo title="Street Sweeping Services Nassau | StreetSweeper Bahamas" description="Street sweeping services in Nassau for commercial properties, construction sites, private roads, communities and events across New Providence." />

      <section className="relative overflow-hidden bg-[#071724] text-white">
        <div className="absolute inset-0 road-grid opacity-25" />
        <div className="content-container relative grid min-h-[650px] gap-10 py-14 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#12CFC0]">Street sweeping services</p>
            <h1 className="mt-5 text-6xl font-bold leading-[.86] sm:text-8xl">THE RIGHT SWEEP FOR THE SITE.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#D4DFE4]">One-time and scheduled sweeping for commercial properties, construction sites, private roads, communities and event areas across New Providence.</p>
            <Link to="/request-assessment" className="mt-8 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#FF6038] px-7 text-sm font-black">Request a Sweep <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="relative min-h-[460px] overflow-hidden rounded-[34px] bg-[#12CFC0]">
            <img src={media.actionUrban} alt="Compact electric street sweeper operating in an urban environment" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071724]/80 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-[#071724]/90 px-4 py-2 text-[10px] font-black uppercase tracking-[.18em]">Manufacturer action reference</span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="max-w-lg text-2xl font-bold">Parking areas, urban access, private roads and paved commercial spaces.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3EFE6] py-20 sm:py-24">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#FF6038]">Choose the outcome</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.9] text-[#071724] sm:text-7xl">Not every property needs the same route.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#4B5A63]">We review access, surface, debris and operating hours first. Then the service is built around the property instead of forcing every site into one package.</p>
          </div>

          <div className="mt-12 grid gap-5">
            {serviceItems.map((item, i) => {
              const images = [media.actionUrban, media.heroAction, media.tropicalLot, media.actionStreet, media.dzeroWhite];
              return (
                <article key={item.title} className="group overflow-hidden rounded-[28px] bg-white shadow-[0_18px_70px_rgba(7,23,36,.08)] lg:grid lg:grid-cols-[.78fr_1.22fr]">
                  <div className="relative min-h-[300px] overflow-hidden bg-[#071724]">
                    <img src={images[i % images.length]} alt="" aria-hidden="true" className={`absolute inset-0 h-full w-full transition duration-700 group-hover:scale-[1.04] ${i===4?"object-contain p-8 bg-[#12CFC0]":"object-cover"}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071724]/55 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-[#071724] px-3 py-2 text-xs font-black text-white">0{i+1}</span>
                  </div>
                  <div className="p-7 sm:p-10">
                    <h3 className="text-4xl font-bold text-[#071724] sm:text-5xl">{item.title}</h3>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4B5A63]">{item.copy}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {schedules.map((x) => <span key={x} className="rounded-full bg-[#EDF1F2] px-4 py-2 text-xs font-bold text-[#071724]">{x}</span>)}
                    </div>
                    <Link to="/request-assessment" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#FF6038]">Discuss this service <ArrowRight className="h-4 w-4" /></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#071724] py-20 text-white sm:py-24">
        <div className="content-container grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#F4C84A]">Simple scheduling</p>
            <h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">Clean once. Or stop thinking about it every month.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[[Clock3,"One-time","A single cleanup for a property, project or event."],[Repeat2,"Recurring","Build sweeping into the property's maintenance routine."],[Check,"Site reviewed","Confirm access, surface and debris before the service is booked."]].map(([Icon,title,copy])=>{const I=Icon as typeof Clock3;return <div key={title as string} className="rounded-[24px] border border-white/10 bg-white/[.05] p-6"><I className="h-5 w-5 text-[#12CFC0]" /><h3 className="mt-8 text-2xl font-bold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-[#B8C8D0]">{copy as string}</p></div>})}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}