import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { VideoEmbed } from "@/components/blocks/VideoEmbed";
import { BeforeAfter } from "@/components/blocks/BeforeAfter";
import { ServiceSelector } from "@/components/blocks/ServiceSelector";
import { SweepPlanner } from "@/components/blocks/SweepPlanner";
import { EquipmentHotspots } from "@/components/blocks/EquipmentHotspots";
import { company } from "@/lib/site-config";
import { equipmentCapabilities, industries, media } from "@/data/siteContent";

const faq = [
  ["What areas does ClearRoad Bahamas serve?", "ClearRoad is preparing to serve Nassau and New Providence. Each job is reviewed by location, access, surface and debris type."],
  ["What types of properties can be swept?", "Commercial parking lots, construction access roads, private communities, event areas and selected paved roads can be reviewed."],
  ["Do you offer one-time and recurring sweeping?", "Yes. Service can be quoted as one-time work or a recurring schedule based on the property."],
  ["Can sweeping happen outside normal business hours?", "Where site access allows, daytime, evening and off-hour service windows can be discussed."],
  ["How is pricing determined?", "Pricing depends on surface area, debris level, access, timing, frequency and the equipment required for the site."],
];

const tickerItems = [
  "Parking lots",
  "Construction sites",
  "Private roads",
  "Communities",
  "Hotels",
  "Event areas",
  "Commercial compounds",
];

const industryColors = ["#FF6038", "#12CFC0", "#F4C84A", "#3F6BFF", "#E34DA4", "#F3EFE6"];

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

      <section className="relative overflow-hidden bg-[#081826] text-white">
        <div className="absolute inset-0 road-grid opacity-45" />
        <div className="content-container relative grid min-h-[700px] items-center gap-10 py-12 lg:grid-cols-[.9fr_1.1fr] lg:py-20">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 border border-white/15 bg-white/5 px-3 py-2">
              <span className="clearroad-pulse h-2.5 w-2.5 rounded-full bg-[#12CFC0]" />
              <span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#B7C7CF]">Street sweeping · New Providence</span>
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[.86] sm:text-6xl lg:text-[5.9rem]">
              Cleaner roads.
              <br />
              Cleaner sites.
              <br />
              <span className="text-[#FF6038]">One machine.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#C9D4DA] sm:text-lg sm:leading-8">
              Mechanical street sweeping for commercial properties, construction sites, private roads, communities and event areas across New Providence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="group inline-flex min-h-14 items-center justify-center gap-2 bg-[#FF6038] px-6 text-sm font-bold text-white" to="/request-assessment">
                Request a Site Assessment <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link className="inline-flex min-h-14 items-center justify-center border border-[#12CFC0] px-6 text-sm font-bold text-[#8BE8DE]" to="/services">
                View Services
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-2 text-center">
              <div className="bg-[#12CFC0] px-3 py-4 text-[#08201E]">
                <span className="block text-xl font-black">ONE-TIME</span>
                <span className="text-[10px] font-bold uppercase tracking-[.14em]">Cleanup</span>
              </div>
              <div className="bg-[#F4C84A] px-3 py-4 text-[#161B22]">
                <span className="block text-xl font-black">RECURRING</span>
                <span className="text-[10px] font-bold uppercase tracking-[.14em]">Routes</span>
              </div>
              <div className="bg-[#3F6BFF] px-3 py-4 text-white">
                <span className="block text-xl font-black">PROJECT</span>
                <span className="text-[10px] font-bold uppercase tracking-[.14em]">Sweeping</span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[390px] lg:min-h-[590px]">
            <div className="absolute right-0 top-[8%] h-[78%] w-[84%] bg-[#12CFC0]" />
            <div className="absolute bottom-[3%] left-[2%] h-[34%] w-[42%] bg-[#F4C84A]" />
            <div className="absolute right-[1%] top-[4%] z-[2] bg-[#3F6BFF] px-4 py-3 text-right text-white">
              <span className="block text-[9px] font-black uppercase tracking-[.2em]">Equipment category</span>
              <span className="mt-1 block text-sm font-bold">Compact ride-on sweeper</span>
            </div>
            <img
              src={media.dzeroWhite}
              alt="Compact electric street sweeper for street sweeping services in Nassau"
              className="sweeper-float relative z-[3] h-full min-h-[390px] w-full object-contain object-center lg:min-h-[590px]"
            />
            <div className="absolute bottom-[7%] left-[3%] z-[4] max-w-[280px] bg-[#FF6038] p-4 text-white">
              <p className="text-xs font-black uppercase tracking-[.16em]">Built for practical sites</p>
              <p className="mt-2 text-sm leading-6">Parking areas, private roads, compounds and construction access routes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FF6038] py-4 text-white">
        <div className="clearroad-ticker flex items-center gap-8 whitespace-nowrap px-4">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-8 text-sm font-black uppercase tracking-[.18em]">
              {item}<span className="text-[#F4C84A]">●</span>
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#F4C84A] py-16 text-[#161B22] sm:py-20">
        <div className="content-container grid gap-10 lg:grid-cols-[.68fr_1.32fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em]">The problem</p>
            <h2 className="mt-4 text-5xl font-bold leading-[.92] sm:text-6xl">Dirt builds up. Your property still has to look maintained.</h2>
            <p className="mt-5 max-w-lg leading-7">
              Mechanical sweeping gives property teams and contractors a faster way to cover larger paved areas when sand, tracked dirt and loose debris start to pile up.
            </p>
            <div className="mt-7 grid gap-3 text-sm font-bold">
              {["Loose sand + litter", "Construction track-out", "Parking-lot buildup"].map((x) => (
                <div key={x} className="flex items-center gap-3 border-t border-black/20 pt-3">
                  <Check className="h-4 w-4" /> {x}
                </div>
              ))}
            </div>
          </div>
          <BeforeAfter />
        </div>
      </section>

      <section className="bg-[#081826] py-16 text-white sm:py-20">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#8BE8DE]">Choose your site</p>
              <h2 className="mt-4 text-5xl font-bold sm:text-6xl">Same machine. Different job.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#C8D3D8]">
              Dulevo itself organises equipment around intended use and application. We use the same idea here: start with the site, then match the service around access, buildup and schedule.
            </p>
          </div>
          <div className="mt-10">
            <ServiceSelector />
          </div>
        </div>
      </section>

      <section className="bg-[#12CFC0] py-16 text-[#08201E] sm:py-20">
        <div className="content-container grid gap-10 lg:grid-cols-[.68fr_1.32fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em]">See it work</p>
            <h2 className="mt-4 text-5xl font-bold leading-[.92] sm:text-6xl">The machine explains the service better than a paragraph can.</h2>
            <p className="mt-5 leading-7">
              Watch how a compact ride-on sweeper moves across paved surfaces, works the brush system and collects loose material.
            </p>
            <p className="mt-5 text-xs font-semibold opacity-70">Manufacturer demonstration footage. Final ClearRoad operating equipment may vary.</p>
          </div>
          <div className="border-4 border-[#081826] bg-[#081826] p-2">
            <VideoEmbed
              title="Compact electric street sweeper demonstration"
              poster={media.dzeroWhite}
              caption="Equipment demonstration shown for reference."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F3EFE6] py-16 text-[#081826] sm:py-20">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.18em] text-[#FF6038]">Find your fit</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.92] sm:text-6xl">Three choices. One clearer starting point.</h2>
            </div>
            <p className="max-w-2xl leading-7 text-[#465661]">
              Equipment companies like JCB and Caterpillar use guided selectors to help customers narrow down the right machine. Our version helps a property manager narrow down the right ClearRoad service.
            </p>
          </div>
          <div className="mt-10">
            <SweepPlanner />
          </div>
        </div>
      </section>

      <section className="bg-[#3F6BFF] py-16 text-white sm:py-20">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.18em] text-[#DDE5FF]">Equipment</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.92] sm:text-6xl">Tap the machine. See what matters.</h2>
            </div>
            <div>
              <p className="leading-7 text-[#E4E9FF]">
                Compact equipment matters because it can fit the scale of parking lots, private roads, business compounds and construction access routes without defaulting to a full-size municipal truck.
              </p>
              <Link to="/equipment" className="mt-5 inline-flex min-h-12 items-center gap-2 bg-[#081826] px-5 text-sm font-bold text-white">
                Explore the equipment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <EquipmentHotspots />
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentCapabilities.map((x) => (
              <div key={x} className="flex min-h-14 items-center gap-3 border border-white/25 bg-white/10 px-4 text-sm font-bold">
                <Check className="h-4 w-4 text-[#F4C84A]" /> {x}
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-[#DDE5FF]">
            Equipment shown represents the compact electric street-sweeper category being considered for ClearRoad Bahamas. Final model and specifications remain subject to supplier verification and commissioning.
          </p>
        </div>
      </section>

      <section className="bg-[#081826] py-16 text-white sm:py-20">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.6fr_1.4fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#8BE8DE]">Where we fit</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.92] sm:text-6xl">Built for active properties and work sites.</h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {industries.map(([title, copy], i) => {
                const color = industryColors[i % industryColors.length];
                const darkText = color === "#12CFC0" || color === "#F4C84A" || color === "#F3EFE6";
                return (
                  <Link
                    key={title}
                    to="/industries"
                    className="group min-h-[240px] p-6 transition-transform hover:-translate-y-1"
                    style={{ background: color, color: darkText ? "#081826" : "#FFFFFF" }}
                  >
                    <span className="text-xs font-black opacity-65">0{i + 1}</span>
                    <h3 className="mt-10 text-3xl font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 opacity-85">{copy}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em]">
                      See use case <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3EFE6] py-16 text-[#081826] sm:py-20">
        <div className="content-container grid gap-10 lg:grid-cols-[.58fr_1.42fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-[#FF6038]">Questions</p>
            <h2 className="mt-4 text-5xl font-bold sm:text-6xl">Before we sweep.</h2>
          </div>
          <div className="grid gap-2">
            {faq.map(([q, a], i) => (
              <details className="group border-b-2 border-[#081826]/15 py-5" key={q}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                  <span><span className="mr-4 text-xs text-[#FF6038]">0{i + 1}</span>{q}</span>
                  <span className="text-2xl text-[#3F6BFF] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl pl-9 text-sm leading-6 text-[#465661]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FF6038] py-16 text-white sm:py-20">
        <div className="absolute right-[-4%] top-1/2 hidden h-[135%] w-[46%] -translate-y-1/2 opacity-20 lg:block">
          <img src={media.dzeroRed} alt="" aria-hidden="true" className="h-full w-full object-contain" />
        </div>
        <div className="content-container relative">
          <Sparkles className="h-8 w-8 text-[#F4C84A]" />
          <h2 className="mt-5 max-w-3xl text-5xl font-bold leading-[.92] sm:text-7xl">Tell us what needs to be swept.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8">Send the location, surface type and preferred schedule. We will review the site and prepare the next step.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/request-assessment" className="bg-[#081826] px-6 py-4 text-center font-bold text-white">Request a Site Assessment</Link>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="border-2 border-white px-6 py-4 text-center font-bold">
              <Phone className="mr-2 inline h-4 w-4" /> Call ClearRoad
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
