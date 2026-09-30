import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { VideoEmbed } from "@/components/blocks/VideoEmbed";
import { BeforeAfter } from "@/components/blocks/BeforeAfter";
import { ServiceSelector } from "@/components/blocks/ServiceSelector";
import { EquipmentHotspots } from "@/components/blocks/EquipmentHotspots";
import { company } from "@/lib/site-config";
import { benefits, equipmentCapabilities, industries, media } from "@/data/siteContent";

const faq = [
  ["What areas does ClearRoad Bahamas serve?", "ClearRoad is preparing to serve Nassau and New Providence. Each job is reviewed by location, access, surface and debris type."],
  ["What types of properties can be swept?", "Commercial parking lots, construction access roads, private communities, event areas and selected paved roads can be reviewed."],
  ["Do you offer one-time and recurring sweeping?", "Yes. Service can be quoted as one-time work or a recurring schedule based on the property."],
  ["Can sweeping happen outside normal business hours?", "Where site access allows, daytime, evening and off-hour service windows can be discussed."],
  ["How is pricing determined?", "Pricing depends on surface area, debris level, access, timing, frequency and the equipment required for the site."],
];

const proofStrip = ["Commercial properties", "Construction sites", "Private roads", "Events"];

export default function Index() {
  return (
    <PageLayout>
      <Seo
        title="Street Sweeping Nassau | ClearRoad Bahamas"
        description="Street sweeping in Nassau for commercial properties, construction sites, parking lots, private roads and event areas. Request a ClearRoad site assessment."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                name: company.name,
                areaServed: company.serviceArea,
                telephone: company.phone,
                email: company.email,
                url: company.url,
              },
              {
                "@type": "Service",
                name: "Street sweeping Nassau",
                provider: { "@type": "LocalBusiness", name: company.name },
                areaServed: "New Providence, Bahamas",
              },
              {
                "@type": "FAQPage",
                mainEntity: faq.map(([q, a]) => ({
                  "@type": "Question",
                  name: q,
                  acceptedAnswer: { "@type": "Answer", text: a },
                })),
              },
            ],
          }),
        }}
      />

      <section className="hero-grid relative overflow-hidden bg-[#111313] text-[#f6f2e8]">
        <div className="absolute inset-0 road-grid opacity-35" />
        <div className="content-container relative grid min-h-[680px] items-center gap-10 py-12 lg:grid-cols-[.92fr_1.08fr] lg:py-20">
          <div className="relative z-10">
            <p className="text-eyebrow">Street sweeping · New Providence</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[.88] sm:text-6xl lg:text-[5.6rem]">
              Cleaner roads.
              <br />
              Cleaner properties.
              <br />
              <span className="text-accent">Less manual cleanup.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#d2cec5] sm:text-lg sm:leading-8">
              ClearRoad Bahamas provides mechanical street sweeping for commercial properties, construction sites, private roads, communities and event areas across New Providence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="group inline-flex items-center justify-center gap-2 bg-accent px-6 py-4 text-sm font-bold text-[#151515]" to="/request-assessment">
                Request a Site Assessment <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link className="inline-flex items-center justify-center border border-white/30 px-6 py-4 text-sm font-bold text-white hover:border-white/70" to="/services">
                View Services
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4">
              {proofStrip.map((item) => (
                <span key={item} className="bg-[#151818] px-3 py-3 text-center text-[11px] font-bold uppercase tracking-[.12em] text-[#c8c4bc]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-[570px]">
            <div className="absolute inset-8 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute right-0 top-8 text-right">
              <span className="block text-[10px] font-bold uppercase tracking-[.22em] text-[#8f8d86]">Equipment category</span>
              <span className="mt-2 block text-sm font-semibold text-white">Compact ride-on sweeper</span>
            </div>
            <img
              src={media.dzeroWhite}
              alt="Compact electric street sweeper for street sweeping services in Nassau"
              className="sweeper-float relative z-[1] h-full min-h-[360px] w-full object-contain object-center lg:min-h-[570px]"
            />
            <div className="absolute bottom-8 left-0 z-[2] max-w-[270px] border-l-4 border-accent bg-[#111313]/90 p-4 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-accent">Built for practical sites</p>
              <p className="mt-2 text-sm leading-6 text-[#d2cec5]">Parking areas, private roads, compounds and construction access routes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-[#151515]">
        <div className="content-container grid gap-px bg-black/10 md:grid-cols-3">
          {[
            ["01", "One-time sweeping", "For properties that need a reset."],
            ["02", "Recurring service", "Weekly, monthly or site-specific schedules."],
            ["03", "Construction cleanup", "For dirt, sand and aggregate tracked onto paved routes."],
          ].map(([n, title, copy]) => (
            <div key={title} className="bg-accent px-6 py-7">
              <span className="text-xs font-black">{n}</span>
              <h2 className="mt-5 text-2xl font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f2eee5] py-16 sm:py-20">
        <div className="content-container grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8a6b08]">The problem</p>
            <h2 className="mt-4 text-4xl font-bold leading-none sm:text-5xl">Dirt, sand and debris build up fast.</h2>
            <p className="mt-5 max-w-lg leading-7 text-[#595852]">
              Busy properties and active work sites need more than occasional manual cleanup. Mechanical sweeping gives property teams a practical way to cover larger paved areas and keep entrances, roads and parking areas under control.
            </p>
            <div className="mt-7 grid gap-3 text-sm font-semibold">
              {["Loose sand and litter", "Construction track-out", "Parking-lot buildup"].map((x) => (
                <div key={x} className="flex items-center gap-3 border-t border-black/15 pt-3">
                  <Check className="h-4 w-4 text-[#8a6b08]" /> {x}
                </div>
              ))}
            </div>
          </div>
          <BeforeAfter />
        </div>
      </section>

      <section className="bg-[#171919] py-16 text-white sm:py-20">
        <div className="content-container">
          <div className="max-w-2xl">
            <p className="text-eyebrow">Find your use case</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">What needs cleaning?</h2>
            <p className="mt-4 text-[#c8c4bc]">Choose the type of site. The service changes with the surface, access and operating window.</p>
          </div>
          <div className="mt-9">
            <ServiceSelector />
          </div>
        </div>
      </section>

      <section className="bg-[#0d0f0f] py-16 text-white sm:py-20">
        <div className="content-container grid gap-9 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-eyebrow">Watch it work</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">The machine makes the idea obvious.</h2>
            <p className="mt-5 leading-7 text-[#c8c4bc]">
              Compact ride-on sweepers are designed to collect dirt, sand and loose debris across paved areas while covering more ground than manual sweeping alone.
            </p>
            <p className="mt-5 text-xs leading-5 text-[#8f8d86]">Manufacturer demonstration footage. Final ClearRoad operating equipment may vary.</p>
          </div>
          <VideoEmbed
            title="Compact electric street sweeper demonstration"
            poster={media.dzeroWhite}
            caption="Equipment demonstration shown for reference."
          />
        </div>
      </section>

      <section className="bg-[#f2eee5] py-16 sm:py-20">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8a6b08]">Why mechanical sweeping</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">A cleaner site without making cleanup a full-time job.</h2>
            </div>
            <p className="max-w-2xl leading-7 text-[#595852]">
              ClearRoad is built around one simple outcome: keep paved spaces cleaner with equipment suited to the site and a schedule that fits around the property.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-4">
            {benefits.map(([title, copy], i) => (
              <article key={title} className="bg-white p-6">
                <span className="text-xs font-bold text-[#9a7600]">0{i + 1}</span>
                <h3 className="mt-8 text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#595852]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dbe6e4] py-16 sm:py-20">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#516664]">Equipment</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Compact equipment. Serious cleanup.</h2>
            </div>
            <div>
              <p className="leading-7 text-[#4c5b59]">
                The planned equipment category is designed for parking lots, private roads, business compounds, communities and construction access routes where a full-size municipal sweeper may be unnecessary.
              </p>
              <Link to="/equipment" className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Explore the equipment <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>

          <div className="mt-10">
            <EquipmentHotspots />
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentCapabilities.map((x) => (
              <div key={x} className="flex items-center gap-3 border border-black/10 bg-white/45 px-4 py-4 text-sm font-semibold">
                <Check className="h-4 w-4" /> {x}
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-[#516664]">
            Equipment shown represents the compact electric street-sweeper category being considered for ClearRoad Bahamas. Final model and specifications remain subject to supplier verification and commissioning.
          </p>
        </div>
      </section>

      <section className="bg-[#171919] py-16 text-white sm:py-20">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-eyebrow">Where we fit</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Built for active properties and work sites.</h2>
            </div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {industries.map(([title, copy], i) => (
                <Link key={title} to="/industries" className="group bg-[#1d201f] p-6 transition hover:bg-[#242827]">
                  <span className="text-xs font-bold text-accent">0{i + 1}</span>
                  <h3 className="mt-8 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#c8c4bc]">{copy}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-accent">
                    See use case <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="content-container grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8a6b08]">Questions</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Before we sweep.</h2>
          </div>
          <div className="grid gap-2">
            {faq.map(([q, a]) => (
              <details className="group border-b border-black/15 py-5" key={q}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                  {q}<span className="text-accent transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#595852]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-accent py-16 text-[#171717] sm:py-20">
        <div className="absolute right-[-4%] top-1/2 hidden h-[130%] w-[45%] -translate-y-1/2 opacity-15 lg:block">
          <img src={media.dzeroRed} alt="" aria-hidden="true" className="h-full w-full object-contain" />
        </div>
        <div className="content-container relative">
          <Sparkles className="h-8 w-8" />
          <h2 className="mt-5 max-w-3xl text-5xl font-bold leading-[.95] sm:text-6xl">Tell us what needs to be swept.</h2>
          <p className="mt-5 max-w-xl leading-7">Send the location, surface type and preferred schedule. We will review the site and prepare the next step.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/request-assessment" className="bg-[#171919] px-6 py-4 text-center font-bold text-white">Request a Site Assessment</Link>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="border border-[#171919] px-6 py-4 text-center font-bold">
              <Phone className="mr-2 inline h-4 w-4" /> Call ClearRoad
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
