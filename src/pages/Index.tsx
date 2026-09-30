import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock3, Construction, MapPin, Play, Repeat2, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { VideoEmbed } from "@/components/blocks/VideoEmbed";
import { BeforeAfter } from "@/components/blocks/BeforeAfter";
import { SweepPlanner } from "@/components/blocks/SweepPlanner";
import { EquipmentHotspots } from "@/components/blocks/EquipmentHotspots";
import { company } from "@/lib/site-config";
import { equipmentCapabilities, media } from "@/data/siteContent";

const faq = [
  ["Where will StreetSweeper Bahamas operate?", "The initial service area is Nassau and New Providence. Each request is reviewed for location, access, surface and equipment fit."],
  ["What can you sweep?", "Commercial parking lots, construction access roads, private communities, event areas and selected paved roads can be reviewed."],
  ["Can I book one cleanup instead of a contract?", "Yes. The service is being structured for both one-time work and recurring schedules."],
  ["Can sweeping happen outside business hours?", "Where property access allows, daytime, evening and off-hour service windows can be discussed."],
  ["How will pricing work?", "Pricing will depend on surface area, debris level, access, timing, frequency and the equipment required. The site is reviewed before a quote is confirmed."],
];

const ticker = ["PARKING LOTS", "CONSTRUCTION SITES", "PRIVATE ROADS", "HOTELS", "COMMUNITIES", "EVENT AREAS"];

const useCases = [
  {title:"Commercial properties", copy:"Parking lots, entrances and paved customer-facing areas.", color:"#12CFC0", text:"#071724"},
  {title:"Construction sites", copy:"Tracked dirt, sand and light aggregate around paved access routes.", color:"#FF6038", text:"#FFFFFF"},
  {title:"Private roads", copy:"Recurring sweeping for developments, communities and shared paved roads.", color:"#F4C84A", text:"#071724"},
  {title:"Events", copy:"Prepare and restore parking areas, routes and venue approaches.", color:"#3F6BFF", text:"#FFFFFF"},
];

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

      <section className="relative overflow-hidden bg-[#071724] text-white">
        <div className="absolute inset-0 road-grid opacity-30" />
        <div className="content-container relative grid min-h-[760px] gap-10 py-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:py-16">
          <div className="relative z-10 max-w-[720px]">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[.05] px-4 py-2 backdrop-blur">
              <span className="clearroad-pulse h-2.5 w-2.5 rounded-full bg-[#12CFC0]" />
              <span className="text-[10px] font-black uppercase tracking-[.22em] text-[#D8E3E8]">Mechanical street sweeping · Nassau</span>
            </div>

            <h1 className="mt-7 text-[3.8rem] font-bold leading-[.84] tracking-[-.04em] sm:text-[5.7rem] lg:text-[6.9rem]">
              CLEANER
              <br />
              <span className="text-[#12CFC0]">PAVEMENT.</span>
              <br />
              BETTER <span className="text-[#F4C84A]">FIRST</span>
              <br />
              IMPRESSIONS.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#D6E0E5] sm:text-lg sm:leading-8">
              StreetSweeper Bahamas is being built for the paved areas people notice first — parking lots, construction entrances, private roads, communities and event spaces across New Providence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/request-assessment" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#FF6038] px-7 text-sm font-black text-white shadow-[0_14px_44px_rgba(255,96,56,.28)]">
                Request a Sweep <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#difference" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[.04] px-7 text-sm font-bold text-white backdrop-blur hover:bg-white/[.08]">
                See the difference
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-2 sm:grid-cols-3">
              {[
                [MapPin, "Nassau + New Providence"],
                [Repeat2, "One-time + recurring"],
                [Clock3, "Flexible service windows"],
              ].map(([Icon, label]) => {
                const I = Icon as typeof MapPin;
                return <div key={label as string} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.045] px-4 py-3 text-xs font-bold text-[#D8E3E8]"><I className="h-4 w-4 text-[#12CFC0]" />{label as string}</div>;
              })}
            </div>
          </div>

          <div className="relative min-h-[520px] lg:min-h-[650px]">
            <div className="absolute inset-[5%_0_5%_8%] overflow-hidden rounded-[42px] bg-[#E6E0D3] shadow-[0_40px_100px_rgba(0,0,0,.34)]">
              <img src={media.tropicalLot} alt="Tropical parking area used as a service setting reference" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,36,.08),rgba(7,23,36,.2))]" />
              <img src={media.dzeroWhite} alt="Compact electric street sweeper manufacturer reference" className="absolute bottom-[3%] right-[1%] z-[2] h-[58%] w-[68%] object-contain drop-shadow-[0_24px_28px_rgba(7,23,36,.38)]" />
              <div className="absolute left-5 top-5 z-[3] rounded-full bg-[#071724]/90 px-4 py-2 text-[10px] font-black uppercase tracking-[.18em] text-white backdrop-blur">Illustrative site composition</div>
              <div className="absolute bottom-5 left-5 z-[3] max-w-[280px] rounded-[20px] bg-[#FF6038] p-5 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[.18em] text-[#FFF2DD]">Built around visible problems</p>
                <p className="mt-2 text-sm leading-6">Sand. Leaves. Dirt. Construction track-out. Large paved areas that need a reset.</p>
              </div>
            </div>

            <div className="absolute right-0 top-[3%] z-[4] hidden rounded-[22px] bg-[#12CFC0] px-5 py-4 text-[#071724] shadow-xl sm:block">
              <span className="block text-[10px] font-black uppercase tracking-[.18em]">StreetSweeper Bahamas</span>
              <span className="mt-1 block text-sm font-black">Focused service. Clear job.</span>
            </div>
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

      <section className="bg-[#F3EFE6] py-20 sm:py-24">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#FF6038]">What we clean</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.9] text-[#071724] sm:text-7xl">The job should be obvious in five seconds.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#4B5A63]">Choose the paved area. We review the surface, access, debris and timing. No complicated packages or technical jargon.</p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item, i) => (
              <Link key={item.title} to="/request-assessment" className="group min-h-[290px] rounded-[28px] p-6 transition-transform hover:-translate-y-1" style={{background:item.color,color:item.text}}>
                <span className="text-xs font-black opacity-60">0{i+1}</span>
                <h3 className="mt-16 text-4xl font-bold leading-[.95]">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 opacity-85">{item.copy}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em]">Discuss this site <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="difference" className="bg-white py-20 sm:py-24">
        <div className="content-container">
          <div className="grid gap-10 lg:grid-cols-[.68fr_1.32fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#3F6BFF]">The difference is visual</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.9] text-[#071724] sm:text-7xl">Drag it. See what sweeping is supposed to change.</h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-[#4B5A63]">Sand, leaves, dust and loose debris accumulate quickly on outdoor paved surfaces. The point of the service is simple: make the area look maintained again.</p>
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
          <div className="grid gap-8 lg:grid-cols-[.58fr_1.42fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#12CFC0]">See the category in action</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">The machine is the visual proof of the idea.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#B8C8D0]">Manufacturer action photography shows how compact sweepers work in tighter urban areas, paved paths and property-scale environments.</p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <figure className="group relative min-h-[520px] overflow-hidden rounded-[32px]">
              <img src={media.heroAction} alt="Dulevo compact street sweeper operating on a paved path" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071724]/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-7">
                <span className="rounded-full bg-[#12CFC0] px-3 py-2 text-[10px] font-black uppercase tracking-[.18em] text-[#071724]">Manufacturer action photography</span>
                <h3 className="mt-5 max-w-xl text-4xl font-bold">Compact sweeping where a full-size truck may be unnecessary.</h3>
              </figcaption>
            </figure>

            <div className="grid gap-5">
              <figure className="group relative min-h-[250px] overflow-hidden rounded-[28px]">
                <img src={media.actionUrban} alt="Dulevo electric street sweeper operating in an urban setting" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071724]/80 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 p-5 text-xl font-bold">Urban access</figcaption>
              </figure>
              <figure className="group relative min-h-[250px] overflow-hidden rounded-[28px]">
                <img src={media.actionStreet} alt="Dulevo compact street sweeper operating beside buildings" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071724]/80 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 p-5 text-xl font-bold">Tighter paved areas</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#12CFC0] py-20 text-[#071724] sm:py-24">
        <div className="content-container grid gap-10 lg:grid-cols-[.62fr_1.38fr] lg:items-center">
          <div>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#071724] text-white"><Play className="h-5 w-5 fill-current" /></span>
            <p className="mt-7 text-xs font-black uppercase tracking-[.2em]">Watch it work</p>
            <h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">A video explains the business in seconds.</h2>
            <p className="mt-6 max-w-xl leading-7">Watch the brush system, collection process and manoeuvring of a compact street sweeper in action.</p>
            <p className="mt-5 text-xs font-semibold opacity-65">Manufacturer demonstration footage. Final StreetSweeper Bahamas operating equipment may vary.</p>
          </div>
          <div className="overflow-hidden rounded-[30px] border-[6px] border-[#071724] bg-[#071724] shadow-[0_28px_90px_rgba(7,23,36,.24)]">
            <VideoEmbed title="Compact electric street sweeper demonstration" poster={media.heroAction} caption="Manufacturer demonstration footage shown for equipment reference." />
          </div>
        </div>
      </section>

      <section className="bg-[#F3EFE6] py-20 text-[#071724] sm:py-24">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.64fr_1.36fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#3F6BFF]">Build your request</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">Tell us the site. We narrow the service.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#4B5A63]">Use the planner to describe the property, frequency and main buildup. It is a fast starting point, not an automated quote.</p>
          </div>
          <div className="mt-12"><SweepPlanner /></div>
        </div>
      </section>

      <section className="bg-[#3F6BFF] py-20 text-white sm:py-24">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#DDE5FF]">Equipment</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">Tap the machine. Understand the job.</h2>
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
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#F4C84A]">How booking works</p>
              <h2 className="mt-4 text-5xl font-bold leading-[.9] sm:text-7xl">Three steps. No mystery.</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {[
                ["01","Show us the site","Send the location, surface and what is building up."],
                ["02","We review the job","We look at access, area, debris and timing."],
                ["03","Confirm the sweep","You receive the scope and scheduling options."],
              ].map(([n,title,copy]) => (
                <article key={n} className="rounded-[26px] border border-white/10 bg-white/[.05] p-6">
                  <span className="text-xs font-black text-[#12CFC0]">{n}</span>
                  <h3 className="mt-10 text-3xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#B8C8D0]">{copy}</p>
                </article>
              ))}
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
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#12CFC0] opacity-70" />
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