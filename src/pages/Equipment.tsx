import { Link } from "react-router-dom";
import { ArrowRight, Check, Info } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { VideoEmbed } from "@/components/blocks/VideoEmbed";
import { EquipmentHotspots } from "@/components/blocks/EquipmentHotspots";
import { equipmentCapabilities, media } from "@/data/siteContent";

const applications=["Commercial parking lots","Shopping centres","Hotels and resorts","Private communities","Warehouses and compounds","Construction access routes","Event areas","Selected private and public roads"];

export default function Equipment(){
  return <PageLayout>
    <Seo title="Compact Street Sweeping Equipment | StreetSweeper Bahamas" description="Explore the compact street sweeping equipment category planned for commercial properties, private roads and work sites across New Providence." />

    <section className="relative overflow-hidden bg-[#071724] text-white">
      <div className="content-container grid min-h-[650px] gap-8 py-16 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#12CFC0]">Planned equipment category</p>
          <h1 className="mt-5 text-6xl font-bold leading-[.86] sm:text-8xl">THE MACHINE BEHIND THE CLEAN.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#B8C8D0]">StreetSweeper Bahamas is preparing around compact ride-on sweeping equipment for commercial properties, private roads, communities, construction access areas and selected public spaces.</p>
          <Link to="/request-assessment" className="mt-8 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#FF6038] px-7 text-sm font-black">Request a Sweep <ArrowRight className="h-4 w-4"/></Link>
          <p className="mt-5 max-w-xl text-[10px] leading-4 text-[#718995]">Manufacturer equipment shown for reference. Final operating model and specifications will be confirmed before deployment.</p>
        </div>

        <div className="relative min-h-[460px] overflow-hidden rounded-[32px] bg-[#12CFC0]">
          <div className="absolute left-6 top-6 z-10 rounded-full bg-[#071724] px-4 py-2 text-[10px] font-black uppercase tracking-[.18em] text-white">Compact ride-on category</div>
          <img src={media.dzeroWhite} alt="Compact electric street sweeper manufacturer reference" className="absolute inset-0 h-full w-full object-contain p-8"/>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071724]/70 to-transparent px-6 pb-6 pt-20"><p className="text-sm font-bold">Small footprint. Dedicated brush system. Built for paved surfaces.</p></div>
        </div>
      </div>
    </section>

    <section className="bg-[#F3EFE6] py-20 text-[#071724] sm:py-24">
      <div className="content-container">
        <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr] lg:items-end">
          <div><p className="text-xs font-black uppercase tracking-[.2em] text-[#FF6038]">Explore the machine</p><h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">Tap the parts that matter.</h2></div>
          <p className="max-w-2xl text-lg leading-8 text-[#4B5A63]">The website should help a property manager understand why this category of machine fits the job without making them read a specification sheet first.</p>
        </div>
        <div className="mt-12"><EquipmentHotspots/></div>
      </div>
    </section>

    <section className="bg-[#FF6038] py-20 text-white sm:py-24">
      <div className="content-container">
        <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
          <div><p className="text-xs font-black uppercase tracking-[.2em] text-[#F4C84A]">Where it fits</p><h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">The site decides the machine.</h2><p className="mt-6 leading-7 text-white/85">Surface condition, access, slope, traffic and debris all matter. Every job is reviewed before service is confirmed.</p></div>
          <div className="grid gap-2 sm:grid-cols-2">{applications.map(x=><div key={x} className="flex min-h-16 items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 text-sm font-bold"><Check className="h-4 w-4 text-[#F4C84A]"/>{x}</div>)}</div>
        </div>
      </div>
    </section>

    <section className="bg-[#12CFC0] py-20 text-[#071724] sm:py-24">
      <div className="content-container grid gap-10 lg:grid-cols-[.62fr_1.38fr] lg:items-center">
        <div><p className="text-xs font-black uppercase tracking-[.2em]">Watch it operate</p><h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">Brushes down. Debris up.</h2><p className="mt-6 leading-7">Manufacturer footage shows the basic operating principle more clearly than a list of features ever could.</p></div>
        <div className="overflow-hidden rounded-[30px] border-[6px] border-[#071724] bg-[#071724]"><VideoEmbed title="Compact street sweeper manufacturer demonstration" poster={media.heroNassau} caption="Manufacturer demonstration footage shown for reference."/></div>
      </div>
    </section>

    <section className="bg-[#071724] py-20 text-white sm:py-24">
      <div className="content-container">
        <div className="grid gap-4 md:grid-cols-3">{[media.dzeroWhite,media.dulevo850,media.dzeroRed].map((src,i)=><figure key={src} className="group overflow-hidden rounded-[24px] bg-white p-5"><img src={src} alt={["White compact electric street sweeper manufacturer reference","Compact ride-on street sweeper manufacturer reference","Red compact electric street sweeper manufacturer reference"][i]} className="h-72 w-full object-contain transition duration-500 group-hover:scale-[1.04]"/><figcaption className="mt-4 border-t border-black/10 pt-3 text-xs font-black uppercase tracking-[.14em] text-[#52616a]">Reference view 0{i+1}</figcaption></figure>)}</div>
        <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{equipmentCapabilities.map(x=><div key={x} className="flex min-h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/[.05] px-4 text-sm font-bold"><Check className="h-4 w-4 text-[#12CFC0]"/>{x}</div>)}</div>
        <div className="mt-10 flex gap-4 rounded-[24px] bg-white/[.05] p-6"><Info className="h-5 w-5 shrink-0 text-[#F4C84A]"/><p className="text-sm leading-6 text-[#B8C8D0]">StreetSweeper Bahamas does not currently represent that it owns the exact Dulevo models shown. These images communicate the compact sweeper category being considered. Final supplier, model and capability remain subject to confirmation.</p></div>
      </div>
    </section>
  </PageLayout>
}
