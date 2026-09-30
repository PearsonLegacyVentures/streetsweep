import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { company } from "@/lib/site-config";
import { media } from "@/data/siteContent";

export default function About(){
  return <PageLayout>
    <Seo title="About StreetSweeper Bahamas | Nassau Street Sweeping" description="StreetSweeper Bahamas is a founder-led street sweeping business being developed for commercial properties, construction sites and private roads across New Providence." />

    <section className="relative overflow-hidden bg-[#071724] text-white">
      <div className="content-container grid min-h-[620px] gap-10 py-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.2em] text-[#12CFC0]">About StreetSweeper Bahamas</p><h1 className="mt-5 text-6xl font-bold leading-[.86] sm:text-8xl">START WITH ONE VISIBLE PROBLEM.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#D4DFE4]">Give Nassau businesses, contractors and communities a practical mechanical option for keeping paved areas cleaner.</p></div>
        <div className="relative min-h-[430px] overflow-hidden rounded-[32px]">
          <img src={media.heroAction} alt="Compact street sweeper operating on a paved route" className="absolute inset-0 h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071724]/70 via-transparent to-transparent"/>
          <span className="absolute left-5 top-5 rounded-full bg-[#071724]/90 px-4 py-2 text-[10px] font-black uppercase tracking-[.18em]">Equipment category reference</span>
        </div>
      </div>
    </section>

    <section className="bg-[#F3EFE6] py-20 text-[#071724] sm:py-24">
      <div className="content-container grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
        <div><p className="text-xs font-black uppercase tracking-[.2em] text-[#FF6038]">The idea</p><h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">Street sweeping first. Earn the right to expand.</h2></div>
        <div className="space-y-6 text-lg leading-8 text-[#4B5A63]"><p>The launch is intentionally focused: mechanical sweeping for commercial sites, construction access routes, private roads, communities and event areas across New Providence.</p><p>The longer-term opportunity is broader commercial and municipal cleaning, but the first job is simpler — prove that one machine can solve a real problem repeatedly and reliably.</p></div>
      </div>
    </section>

    <section className="bg-[#071724] py-20 text-white sm:py-24">
      <div className="content-container grid overflow-hidden rounded-[32px] bg-[#FF6038] lg:grid-cols-[.78fr_1.22fr]">
        <div className="p-8 sm:p-10 lg:p-12"><p className="text-xs font-black uppercase tracking-[.2em] text-[#F4C84A]">Founder-led</p><div className="mt-10 text-8xl font-bold leading-none">AP</div><p className="mt-6 text-3xl font-bold">Amar Pearson</p><p className="mt-4 max-w-md leading-7 text-white/85">StreetSweeper Bahamas is being developed from Nassau around practical service delivery, commercial relationships and disciplined expansion.</p></div>
        <div className="bg-[#0D2639] p-8 sm:p-10 lg:p-12"><p className="text-xs font-black uppercase tracking-[.2em] text-[#12CFC0]">Operating principle</p><h2 className="mt-4 text-5xl font-bold leading-[.9]">The machine is leverage. The service is the business.</h2><p className="mt-6 leading-7 text-[#B8C8D0]">Equipment alone does not create a dependable company. The actual work is choosing the right sites, maintaining the machine, scheduling well, communicating clearly and earning repeat contracts.</p><div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-sm"><MapPin className="h-4 w-4 text-[#12CFC0]"/>{company.serviceArea}</div></div>
      </div>
    </section>

    <section className="bg-[#12CFC0] py-20 text-[#071724] sm:py-24"><div className="content-container flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs font-black uppercase tracking-[.2em]">Have a site in mind?</p><h2 className="mt-4 max-w-3xl text-6xl font-bold leading-[.88] sm:text-7xl">LET'S SEE IF SWEEPING FITS IT.</h2></div><Link to="/request-assessment" className="inline-flex min-h-14 shrink-0 items-center gap-2 rounded-full bg-[#071724] px-7 font-black text-white">Request a Sweep <ArrowRight className="h-4 w-4"/></Link></div></section>
  </PageLayout>
}