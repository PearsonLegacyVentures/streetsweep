import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { company } from "@/lib/site-config";
import { media } from "@/data/siteContent";

const serviceOptions=["Commercial property sweeping","Construction-site sweeping","Private road / community sweeping","Event area cleanup","Post-storm cleanup","Other"];

export default function Contact(){
  const [submitted,setSubmitted]=useState(false);
  return <PageLayout>
    <Seo title="Request a Street Sweeping Site Assessment | StreetSweeper Bahamas" description="Request a street sweeping site assessment for a commercial property, construction site, private road or event area in New Providence." />

    <section className="relative overflow-hidden bg-[#071724] text-white">
      <div className="absolute inset-0 road-grid opacity-25"/>
      <div className="content-container relative grid min-h-[560px] gap-10 py-14 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
        <div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.2em] text-[#12CFC0]">Request a site assessment</p><h1 className="mt-5 text-6xl font-bold leading-[.86] sm:text-8xl">SHOW US WHAT NEEDS TO BE SWEPT.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#D4DFE4]">Send the location, surface type, frequency and a few details. Photos help us understand access and debris before the next conversation.</p></div>
        <div className="relative min-h-[390px] overflow-hidden rounded-[30px]">
          <img src={media.tropicalLot} alt="Tropical commercial parking area used as a service setting reference" className="absolute inset-0 h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-[#071724]/18"/>
          <img src={media.dzeroWhite} alt="" aria-hidden="true" className="absolute bottom-[2%] right-[2%] h-[62%] w-[65%] object-contain drop-shadow-[0_18px_28px_rgba(7,23,36,.38)]"/>
          <span className="absolute left-5 top-5 rounded-full bg-[#071724]/90 px-4 py-2 text-[10px] font-black uppercase tracking-[.18em]">Illustrative site composition</span>
        </div>
      </div>
    </section>

    <section className="bg-[#F3EFE6] py-20 text-[#071724] sm:py-24">
      <div className="content-container grid gap-10 lg:grid-cols-[.58fr_1.42fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#FF6038]">Three useful details</p>
          <h2 className="mt-4 text-5xl font-bold leading-[.9]">Location. Surface. Timing.</h2>
          <div className="mt-8 grid gap-3">
            {[["01","Location","Where is the road, lot or work site?"],["02","Surface","What needs sweeping and what builds up there?"],["03","Timing","One-time, recurring, daytime or off-hour?"]].map(([n,t,c])=><div key={t} className="rounded-[20px] bg-white p-5 shadow-[0_12px_40px_rgba(7,23,36,.06)]"><span className="text-xs font-black text-[#3F6BFF]">{n}</span><h3 className="mt-4 text-xl font-bold">{t}</h3><p className="mt-2 text-sm leading-6 text-[#52616a]">{c}</p></div>)}
          </div>
          <div className="mt-8 grid gap-4 border-t border-[#071724]/10 pt-6 text-sm"><p className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-[#FF6038]"/>{company.serviceArea}</p><p className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-[#FF6038]"/>{company.email}</p></div>
        </aside>

        <div className="overflow-hidden rounded-[30px] bg-white p-6 shadow-[0_24px_80px_rgba(7,23,36,.1)] sm:p-9 lg:p-11">
          {submitted?<div className="rounded-[22px] bg-[#12CFC0] p-7"><p className="text-xs font-black uppercase tracking-[.18em]">Form preview</p><h2 className="mt-4 text-4xl font-bold">Your request is structured.</h2><p className="mt-4 max-w-2xl leading-7">The enquiry backend is not connected yet, so nothing was sent. The final delivery inbox needs to be connected before public launch.</p><button type="button" onClick={()=>setSubmitted(false)} className="mt-6 rounded-full bg-[#071724] px-5 py-3 text-sm font-black text-white">Back to form</button></div>:
          <form onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}} className="grid gap-6">
            <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold">Full name<input required name="name" className="h-12 rounded-xl border border-[#C9D0D3] bg-[#FBFAF7] px-4 font-normal"/></label><label className="grid gap-2 text-sm font-bold">Company<input name="company" className="h-12 rounded-xl border border-[#C9D0D3] bg-[#FBFAF7] px-4 font-normal"/></label><label className="grid gap-2 text-sm font-bold">Phone<input required name="phone" type="tel" className="h-12 rounded-xl border border-[#C9D0D3] bg-[#FBFAF7] px-4 font-normal"/></label><label className="grid gap-2 text-sm font-bold">Email<input required name="email" type="email" className="h-12 rounded-xl border border-[#C9D0D3] bg-[#FBFAF7] px-4 font-normal"/></label></div>
            <label className="grid gap-2 text-sm font-bold">Service location<input required name="location" placeholder="Property, road or area" className="h-12 rounded-xl border border-[#C9D0D3] bg-[#FBFAF7] px-4 font-normal"/></label>
            <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold">Service needed<select required name="service" className="h-12 rounded-xl border border-[#C9D0D3] bg-[#FBFAF7] px-4 font-normal"><option value="">Select service</option>{serviceOptions.map(x=><option key={x}>{x}</option>)}</select></label><label className="grid gap-2 text-sm font-bold">Frequency<select name="frequency" className="h-12 rounded-xl border border-[#C9D0D3] bg-[#FBFAF7] px-4 font-normal"><option>One-time</option><option>Weekly</option><option>Biweekly</option><option>Monthly</option><option>Not sure yet</option></select></label></div>
            <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold">Approximate area or road distance<input name="area" placeholder="If known" className="h-12 rounded-xl border border-[#C9D0D3] bg-[#FBFAF7] px-4 font-normal"/></label><label className="grid gap-2 text-sm font-bold">Preferred service window<input name="window" placeholder="Morning, evening, after close..." className="h-12 rounded-xl border border-[#C9D0D3] bg-[#FBFAF7] px-4 font-normal"/></label></div>
            <label className="grid gap-2 text-sm font-bold">What needs to be cleaned?<textarea name="description" rows={5} placeholder="Tell us about the surface, debris, access and anything else we should know." className="rounded-xl border border-[#C9D0D3] bg-[#FBFAF7] p-4 font-normal"/></label>
            <label className="grid gap-2 text-sm font-bold">Photos<input type="file" accept="image/*" multiple className="rounded-xl border border-dashed border-[#AAB5BA] bg-[#FBFAF7] p-4 font-normal"/></label>
            <label className="flex items-start gap-3 text-sm leading-6 text-[#52616a]"><input required type="checkbox" className="mt-1"/>I consent to StreetSweeper Bahamas using these details to review my service request. This form is not yet connected to a delivery service.</label>
            <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#FF6038] px-7 text-sm font-black text-white sm:justify-self-start">Prepare Request <ArrowRight className="h-4 w-4"/></button>
          </form>}
        </div>
      </div>
    </section>
  </PageLayout>
}