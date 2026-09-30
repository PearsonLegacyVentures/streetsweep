import { Link } from "react-router-dom";
import { ArrowRight, Building2, Construction, Hotel, Landmark, Store, Users } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { industries as industryItems, media } from "@/data/siteContent";

const icons=[Construction,Building2,Hotel,Users,Landmark,Store];
const colors=["#FF6038","#12CFC0","#F4C84A","#3F6BFF","#E34DA4","#EAE5DA"];

export default function Industries(){
  return <PageLayout>
    <Seo title="Street Sweeping for Bahamian Properties | StreetSweeper Bahamas" description="Street sweeping for construction, commercial properties, hotels, communities, public works and events across New Providence." />

    <section className="bg-[#071724] py-20 text-white sm:py-24">
      <div className="content-container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
        <div><p className="text-xs font-black uppercase tracking-[.2em] text-[#12CFC0]">Industries</p><h1 className="mt-4 text-6xl font-bold leading-[.86] sm:text-8xl">WHERE CLEAN PAVEMENT MATTERS.</h1></div>
        <p className="max-w-2xl text-lg leading-8 text-[#B8C8D0]">For the teams responsible for entrances, parking lots, access roads, shared streets and public-facing outdoor spaces.</p>
      </div>
    </section>

    <section className="bg-[#F3EFE6] py-20 sm:py-24">
      <div className="content-container grid gap-5 md:grid-cols-2">
        {industryItems.map(([title,copy],i)=>{const Icon=icons[i]||Building2;const color=colors[i];const dark=color==="#12CFC0"||color==="#F4C84A"||color==="#EAE5DA";return <article key={title} className="group relative min-h-[380px] overflow-hidden rounded-[28px] p-7 sm:p-9" style={{background:color,color:dark?"#071724":"#fff"}}>
          <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#071724] text-white"><Icon className="h-5 w-5"/></span><span className="text-xs font-black opacity-60">0{i+1}</span></div>
          <h2 className="mt-16 text-4xl font-bold sm:text-5xl">{title}</h2><p className="mt-4 max-w-xl leading-7 opacity-85">{copy}</p>
          <Link to="/request-assessment" className="mt-8 inline-flex items-center gap-2 text-sm font-black">Review this site <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></Link>
        </article>})}
      </div>
    </section>

    <section className="bg-[#071724] py-20 text-white sm:py-24">
      <div className="content-container grid overflow-hidden rounded-[32px] bg-[#0E2638] lg:grid-cols-2">
        <div className="relative min-h-[440px]"><img src={media.heroNassau} alt="Illustrative street sweeper operating in a Nassau-style environment" className="absolute inset-0 h-full w-full object-cover"/></div>
        <div className="p-8 sm:p-10 lg:p-12"><p className="text-xs font-black uppercase tracking-[.2em] text-[#12CFC0]">Local context</p><h2 className="mt-4 text-5xl font-bold leading-[.9]">Sand. Traffic. Construction. Outdoor properties.</h2><p className="mt-6 leading-7 text-[#B8C8D0]">The use cases are different, but the basic need is the same: keep paved areas under control without waiting until the buildup becomes the first thing people notice.</p><Link to="/request-assessment" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF6038] px-5 text-sm font-black">Request a Sweep <ArrowRight className="h-4 w-4"/></Link><p className="mt-5 text-[10px] leading-4 text-[#718995]">Illustrative service visualization, not completed client work.</p></div>
      </div>
    </section>
  </PageLayout>
}
