import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { company } from "@/lib/site-config";

const serviceOptions = [
  "Commercial property sweeping",
  "Construction-site sweeping",
  "Private road / community sweeping",
  "Event area cleanup",
  "Post-storm cleanup",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageLayout>
      <Seo
        title="Request a Street Sweeping Site Assessment | ClearRoad Bahamas"
        description="Request a street sweeping site assessment for a commercial property, construction site, private road or event area in New Providence."
      />

      <section className="relative overflow-hidden bg-[#111313] text-white">
        <div className="absolute inset-0 road-grid opacity-30" />
        <div className="content-container relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-eyebrow">Request a site assessment</p>
            <h1 className="mt-5 text-5xl font-bold leading-[.92] sm:text-6xl lg:text-7xl">Show us what needs to be swept.</h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#cbc7be]">
            Send the location, surface type and preferred schedule. Photos help us understand access, debris and whether compact sweeping equipment is suitable for the job.
          </p>
        </div>
      </section>

      <section className="bg-[#f2eee5] py-16 sm:py-20">
        <div className="content-container grid gap-10 lg:grid-cols-[.62fr_1.38fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8a6b08]">Before you send it</p>
            <h2 className="mt-4 text-4xl font-bold">Three things help us assess the job faster.</h2>
            <div className="mt-8 grid gap-px overflow-hidden border border-black/10 bg-black/10">
              {[
                ["01", "Location", "Where is the road, lot or work site?"],
                ["02", "Surface", "What area needs sweeping and what usually builds up there?"],
                ["03", "Timing", "Is this one-time, recurring, daytime or off-hour work?"],
              ].map(([n, title, copy]) => (
                <div key={title} className="bg-white p-5">
                  <span className="text-xs font-bold text-[#9a7600]">{n}</span>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#595852]">{copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 border-t border-black/15 pt-6 text-sm">
              <p className="flex gap-3"><MapPin className="h-4 w-4 shrink-0" /> {company.serviceArea}</p>
              <p className="flex gap-3"><Phone className="h-4 w-4 shrink-0" /> {company.phone} <span className="text-[#77736b]">(placeholder)</span></p>
              <p className="flex gap-3"><Mail className="h-4 w-4 shrink-0" /> {company.email}</p>
            </div>
          </aside>

          <div className="bg-white p-5 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="border-l-4 border-accent bg-[#f8f2df] p-7">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8a6b08]">Form preview</p>
                <h2 className="mt-4 text-3xl font-bold">The form is ready for backend connection.</h2>
                <p className="mt-4 max-w-2xl leading-7 text-[#595852]">
                  This website does not yet have an enquiry delivery backend, so the information was not sent. Connect the final inbox or form service before launch.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-6 border border-[#171919] px-5 py-3 text-sm font-bold">Back to form</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold">Full name<input required name="name" className="h-12 border border-[#bbb5aa] bg-[#fbfaf7] px-4 font-normal" /></label>
                  <label className="grid gap-2 text-sm font-bold">Company<input name="company" className="h-12 border border-[#bbb5aa] bg-[#fbfaf7] px-4 font-normal" /></label>
                  <label className="grid gap-2 text-sm font-bold">Phone<input required name="phone" type="tel" className="h-12 border border-[#bbb5aa] bg-[#fbfaf7] px-4 font-normal" /></label>
                  <label className="grid gap-2 text-sm font-bold">Email<input required name="email" type="email" className="h-12 border border-[#bbb5aa] bg-[#fbfaf7] px-4 font-normal" /></label>
                </div>

                <label className="grid gap-2 text-sm font-bold">Service location<input required name="location" placeholder="Property, road or area" className="h-12 border border-[#bbb5aa] bg-[#fbfaf7] px-4 font-normal" /></label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold">Service needed
                    <select required name="service" className="h-12 border border-[#bbb5aa] bg-[#fbfaf7] px-4 font-normal">
                      <option value="">Select service</option>
                      {serviceOptions.map((x) => <option key={x}>{x}</option>)}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-bold">Frequency
                    <select name="frequency" className="h-12 border border-[#bbb5aa] bg-[#fbfaf7] px-4 font-normal">
                      <option>One-time</option>
                      <option>Weekly</option>
                      <option>Biweekly</option>
                      <option>Monthly</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold">Approximate area or road distance<input name="area" placeholder="If known" className="h-12 border border-[#bbb5aa] bg-[#fbfaf7] px-4 font-normal" /></label>
                  <label className="grid gap-2 text-sm font-bold">Preferred service window<input name="window" placeholder="Morning, evening, after close..." className="h-12 border border-[#bbb5aa] bg-[#fbfaf7] px-4 font-normal" /></label>
                </div>

                <label className="grid gap-2 text-sm font-bold">What needs to be cleaned?
                  <textarea name="description" rows={5} placeholder="Tell us about the surface, debris, access and anything else we should know." className="border border-[#bbb5aa] bg-[#fbfaf7] p-4 font-normal" />
                </label>

                <label className="grid gap-2 text-sm font-bold">Photos <input type="file" accept="image/*" multiple className="border border-dashed border-[#aaa399] bg-[#fbfaf7] p-4 font-normal" /></label>

                <label className="flex items-start gap-3 text-sm leading-6 text-[#595852]">
                  <input required type="checkbox" className="mt-1" />
                  I consent to ClearRoad Bahamas using these details to review my service request. This form is not yet connected to a delivery service.
                </label>

                <button className="bg-[#171919] px-6 py-4 text-sm font-bold text-white sm:justify-self-start">Prepare Request</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
