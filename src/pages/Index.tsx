import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock3, Construction, MapPin, Moon, Play, Repeat2, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { VideoEmbed } from "@/components/blocks/VideoEmbed";
import { BeforeAfter } from "@/components/blocks/BeforeAfter";
import { SweepPlanner } from "@/components/blocks/SweepPlanner";
import { EquipmentHotspots } from "@/components/blocks/EquipmentHotspots";
import { company } from "@/lib/site-config";
import { benefits, equipmentCapabilities, media } from "@/data/siteContent";

const faq = [
  ["Where will StreetSweeper Bahamas operate?", "The initial service area is Nassau and New Providence. Each request is reviewed for location, access, surface and equipment fit."],
  ["What can you sweep?", "Commercial parking lots, construction access roads, private communities, event areas and selected paved roads can be reviewed."],
  ["Can I book one cleanup instead of a contract?", "Yes. The service is being structured for both one-time work and recurring schedules."],
  ["Can sweeping happen outside business hours?", "Where property access allows, daytime, evening and off-hour service windows can be discussed."],
  ["How will pricing work?", "Pricing will depend on surface area, debris level, access, timing, frequency and the equipment required. The site is reviewed before a quote is confirmed."],
];

const serviceBlocks = [
  {
    eyebrow: "Commercial",
    title: "Parking lots that look maintained before customers arrive.",
    copy: "For shopping centres, hotels, warehouses, offices and business compounds that need a cleaner paved surface without making manual sweeping a constant job.",
    color: "#12CFC0",
    text: "#071724",
    image: media.afterNassau,
  },
  {
    eyebrow: "Construction",
    title: "Tracked dirt should not become the street's problem.",
    copy: "Sweep paved site entrances and surrounding access routes affected by loose sand, dirt and light aggregate.",
    color: "#FF6038",
    text: "#FFFFFF",
    image: media.dzeroWhite,
  },
  {
    eyebrow: "Private roads + communities",
    title: "Put recurring road care on a schedule.",
    copy: "For private roads, shared curbs, community entrances and common paved areas across New Providence.",
    color: "#F4C84A",
    text: "#071724",
    image: media.dulevo850,
  },
];

const ticker = ["PARKING LOTS", "CONSTRUCTION SITES", "PRIVATE ROADS", "HOTELS", "COMMUNITIES", "EVENT AREAS"];

export default function Index() {
  return (
    <PageLayout>
      <Seo
        title="Street Sweeping Nassau | StreetSweeper Bahamas"
        description="Mechanical street sweeping in Nassau for commercial properties, construction sites, parking lots, private roads and event areas across New Providence."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "LocalBusiness", name: company.name, areaServed: company.serviceArea, email: company.email, url: company.url },
              { "@type": "Service", name: "Street sweeping Nassau", provider: { "@type": "LocalBusiness", name: company.name }, areaServed: "New Providence, Bahamas" },
              { "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
            ],
          }),
        }}
      />

      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#071724] text-white">
        <img
          src={media.heroNassau}
          alt="Illustrative street sweeper operating in a Nassau-style waterfront setting"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,23,36,.96)_0%,rgba(7,23,36,.86)_36%,rgba(7,23,36,.28)_68%,rgba(7,23,36,.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#071724] to-transparent" />

        <div className="content-container relative z-10 flex min-h-[760px] items-center py-16">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#071724]/60 px-4 py-2 backdrop-blur">
              <span className="clearroad-pulse h-2.5 w-2.5 rounded-full bg-[#12CFC0]" />
              <span className="text-[10px] font-black uppercase tracking-[.22em] text-[#D8E3E8]">Mechanical street sweeping · Nassau</span>
            </div>

            <h1 className="mt-7 text-[3.8rem] font-bold leading-[.84] tracking-[-.04em] sm:text-[5.6rem] lg:text-[7rem]">
              CLEANER
              <br />
              <span className="text-[#12CFC0]">STREETS.</span>
              <br />
              BETTER <span className="text-[#F4C84A]">FIRST</span>
              <br />
              IMPRESSIONS.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#D6E0E5] sm:text-lg sm:leading-8">
              StreetSweeper Bahamas is being built to handle paved-area cleanup for commercial properties, construction sites, private roads, communities and event spaces across New Providence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/request-assessment" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#FF6038] px-7 text-sm font-black text-white shadow-[0_12px_40px_rgba(255,96,56,.28)]">
                Request a Sweep <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#difference" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 text-sm font-bold text-white backdrop-blur hover:bg-white/10">
                See the difference
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3">
              {[
                [MapPin, "Nassau + New Providence"],
                [Repeat2, "One-time + recurring"],
                [Clock3, "Flexible service windows"],
              ].map(([Icon, label]) => {
                const I = Icon as typeof MapPin;
                return <div key={label as string} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071724]/60 px-4 py-3 text-xs font-bold text-[#D8E3E8] backdrop-blur"><I className="h-4 w-4 text-[#12CFC0]" />{label as string}</div>;
              })}
            </div>

            <p className="mt-5 max-w-lg text-[10px] leading-4 text-[#94A8B2]">Hero image is an illustrative Nassau-style service visualization. Original project photography will replace concept imagery after launch.</p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FF6038] py-4 text-white">
        <div className="clearroad-ticker flex items-center gap-8 whitespace-nowrap px-4">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-8 text-sm font-black uppercase tracking-[.18em]">
              {item}<span className="text-[#F4C84A]">●</span>
            </span>
          ))}
        </div>
      </section>

      <section id="difference" className="bg-[#F3EFE6] py-20 sm:py-24">
        <div className="content-container">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#FF6038]">The difference is visual</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.9] text-[#071724] sm:text-7xl">Drag it. See what the service is meant to do.</h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-[#4B5A63]">Sand, leaves, dust and loose debris accumulate quickly on Bahamian paved surfaces. Mechanical sweeping gives large outdoor areas a practical reset.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Sand", "Leaves", "Loose dirt", "Light litter", "Tracked material"].map((x) => <span key={x} className="rounded-full bg-[#071724] px-4 py-2 text-xs font-bold text-white">{x}</span>)}
              </div>
            </div>
          </div>
          <div className="mt-12"><BeforeAfter /></div>
        </div>
      </section>

      <section className="bg-[#071724] py-20 text-white sm:py-24">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.66fr_1.34fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#12CFC0]">Where we work</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">One service. Very different sites.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#B8C8D0]">The customer should not have to understand sweeper technology. Show us the site. We review access, surface, debris and timing.</p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {serviceBlocks.map((item, i) => (
              <article key={item.title} className="group relative min-h-[560px] overflow-hidden rounded-[30px]">
                <img src={item.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071724] via-[#071724]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="inline-flex rounded-full px-3 py-2 text-[10px] font-black uppercase tracking-[.18em]" style={{background:item.color,color:item.text}}>{item.eyebrow}</span>
                  <h3 className="mt-5 text-4xl font-bold leading-[.95]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#D3DDE1]">{item.copy}</p>
                  <Link to="/request-assessment" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#12CFC0]">Discuss this site <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                </div>
                <span className="absolute right-5 top-5 text-5xl font-bold text-white/20">0{i+1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#12CFC0] py-20 text-[#071724] sm:py-24">
        <div className="content-container grid gap-10 lg:grid-cols-[.62fr_1.38fr] lg:items-center">
          <div>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#071724] text-white"><Play className="h-5 w-5 fill-current" /></span>
            <p className="mt-7 text-xs font-black uppercase tracking-[.2em]">See the machine work</p>
            <h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">A video explains this business in seconds.</h2>
            <p className="mt-6 max-w-xl leading-7">Watch the brush system, collection process and manoeuvring of a compact street sweeper in action.</p>
            <p className="mt-5 text-xs font-semibold opacity-65">Manufacturer demonstration footage. Final StreetSweeper Bahamas operating equipment may vary.</p>
          </div>
          <div className="overflow-hidden rounded-[30px] border-[6px] border-[#071724] bg-[#071724] shadow-[0_28px_90px_rgba(7,23,36,.25)]">
            <VideoEmbed title="Compact electric street sweeper demonstration" poster={media.heroNassau} caption="Manufacturer demonstration footage shown for equipment reference." />
          </div>
        </div>
      </section>

      <section className="bg-[#F3EFE6] py-20 text-[#071724] sm:py-24">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.68fr_1.32fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#3F6BFF]">Build your request</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">Tell the site. We narrow the service.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#4B5A63]">Use the planner to describe the type of property, the frequency and the main buildup. It is a starting point, not an automated quote.</p>
          </div>
          <div className="mt-12"><SweepPlanner /></div>
        </div>
      </section>

      <section className="bg-[#3F6BFF] py-20 text-white sm:py-24">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#DDE5FF]">Equipment</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">Compact enough for real properties. Built to sweep.</h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-[#E5E9FF]">The planned equipment category is a compact ride-on sweeper suited to parking lots, private roads, compounds and selected construction access routes.</p>
              <Link to="/equipment" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#071724] px-5 text-sm font-black">Explore the equipment <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>

          <div className="mt-12"><EquipmentHotspots /></div>

          <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentCapabilities.map((x) => <div key={x} className="flex min-h-14 items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 text-sm font-bold"><Check className="h-4 w-4 text-[#F4C84A]" />{x}</div>)}
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-[#DDE5FF]">Manufacturer equipment is shown as a reference category only. Final model, capability and specifications will be confirmed before deployment.</p>
        </div>
      </section>

      <section className="bg-[#071724] py-20 text-white sm:py-24">
        <div className="content-container">
          <div className="grid gap-10 lg:grid-cols-[.58fr_1.42fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#F4C84A]">Why book it</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">Less cleanup headache. A clearer plan.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map(([title, copy], i) => (
                <article key={title} className="rounded-[24px] border border-white/10 bg-white/[.045] p-6 transition hover:bg-white/[.08]">
                  <span className="text-xs font-black text-[#12CFC0]">0{i+1}</span>
                  <h3 className="mt-8 text-3xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#B8C8D0]">{copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[30px] bg-[#FF6038] lg:grid-cols-[1.05fr_.95fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <Construction className="h-8 w-8 text-[#F4C84A]" />
              <h3 className="mt-8 text-5xl font-bold leading-[.92]">Built in Nassau. Focused on a problem Nassau businesses can see.</h3>
              <p className="mt-5 max-w-xl leading-7 text-white/85">StreetSweeper Bahamas is a founder-led service being developed by Amar Pearson around straightforward scheduling, suitable equipment and commercial relationships.</p>
            </div>
            <div className="relative min-h-[330px]">
              <img src={media.heroNassau} alt="Illustrative Nassau-style street sweeping scene" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6038] via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-[#071724] sm:py-24">
        <div className="content-container grid gap-10 lg:grid-cols-[.55fr_1.45fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#FF6038]">Questions</p>
            <h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">Before we sweep.</h2>
          </div>
          <div className="grid gap-1">
            {faq.map(([q, a], i) => (
              <details className="group border-b-2 border-[#071724]/10 py-5" key={q}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                  <span><span className="mr-4 text-xs text-[#FF6038]">0{i+1}</span>{q}</span>
                  <span className="text-2xl text-[#3F6BFF] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl pl-9 text-sm leading-6 text-[#4B5A63]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F4C84A] py-20 text-[#071724] sm:py-24">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#12CFC0] opacity-70 blur-[2px]" />
        <div className="absolute -bottom-36 right-[18%] h-72 w-72 rounded-full bg-[#FF6038] opacity-85" />
        <div className="content-container relative">
          <Sparkles className="h-8 w-8" />
          <h2 className="mt-6 max-w-4xl text-6xl font-bold leading-[.86] sm:text-8xl">SHOW US WHAT NEEDS CLEANING.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8">Send the location, surface type and preferred schedule. We will review the site and determine the next step.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/request-assessment" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#071724] px-7 font-black text-white">Request a Sweep <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/services" className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#071724] px-7 font-black">View Services</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
