import { Link } from "react-router-dom";
import { ArrowRight, Check, Info } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { VideoEmbed } from "@/components/blocks/VideoEmbed";
import { EquipmentHotspots } from "@/components/blocks/EquipmentHotspots";
import { equipmentCapabilities, media } from "@/data/siteContent";

const applications = [
  "Commercial parking lots",
  "Shopping centres",
  "Hotels and resorts",
  "Private communities",
  "Warehouses and compounds",
  "Construction access routes",
  "Event areas",
  "Selected private and public roads",
];

export default function Equipment() {
  return (
    <PageLayout>
      <Seo
        title="Compact Street Sweeping Equipment | ClearRoad Bahamas"
        description="Explore the compact electric street sweeping equipment category planned for commercial properties, private roads and work sites across New Providence."
      />

      <section className="relative overflow-hidden bg-[#111313] text-white">
        <div className="absolute inset-0 road-grid opacity-30" />
        <div className="content-container relative grid min-h-[590px] gap-10 py-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-eyebrow">Planned equipment category</p>
            <h1 className="mt-5 text-5xl font-bold leading-[.92] sm:text-6xl lg:text-7xl">
              Compact electric street sweeping equipment.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#cbc7be]">
              ClearRoad is preparing to use compact ride-on sweeping equipment for commercial properties, private roads, communities, construction access areas and public spaces.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/request-assessment" className="bg-accent px-6 py-4 text-center text-sm font-bold text-[#171919]">Request a Site Assessment</Link>
              <a href="#machine" className="border border-white/30 px-6 py-4 text-center text-sm font-bold">Explore the machine</a>
            </div>
            <p className="mt-5 max-w-xl text-xs leading-5 text-[#8f8d86]">
              Equipment shown is manufacturer reference imagery. Final operating model and specifications will be confirmed before deployment.
            </p>
          </div>
          <div className="relative min-h-[400px]">
            <div className="absolute inset-10 rounded-full bg-accent/10 blur-3xl" />
            <img src={media.dzeroWhite} alt="Compact electric street sweeper reference for Nassau street sweeping" className="sweeper-float relative z-[1] h-full min-h-[400px] w-full object-contain" />
          </div>
        </div>
      </section>

      <section id="machine" className="bg-[#dbe6e4] py-16 sm:py-20">
        <div className="content-container">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#516664]">Tap the machine</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">See what makes compact equipment useful.</h2>
            <p className="mt-4 leading-7 text-[#4c5b59]">The machine is the tool. The value is being able to cover paved areas consistently without bringing a full-size municipal truck onto every site.</p>
          </div>
          <div className="mt-10">
            <EquipmentHotspots />
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee5] py-16 sm:py-20">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8a6b08]">Why this equipment type</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Built for the sites we plan to serve.</h2>
            </div>
            <p className="max-w-2xl leading-7 text-[#595852]">
              A compact ride-on sweeper can work across parking areas, private roads and commercial sites where a larger road-going sweeper may be unnecessary.
            </p>
          </div>
          <div className="mt-10 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentCapabilities.map((x, i) => (
              <div key={x} className="bg-white p-6">
                <span className="text-xs font-bold text-[#9a7600]">0{i + 1}</span>
                <p className="mt-7 font-bold">{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171919] py-16 text-white sm:py-20">
        <div className="content-container">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-eyebrow">Planned applications</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Where compact sweeping fits.</h2>
              <p className="mt-5 text-[#c8c4bc]">Every site will be reviewed before service is confirmed.</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {applications.map((x) => (
                <div key={x} className="flex min-h-20 items-center gap-3 border border-white/10 bg-[#1d201f] px-5">
                  <Check className="h-4 w-4 text-accent" /> <span className="font-semibold">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d0f0f] py-16 text-white sm:py-20">
        <div className="content-container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-eyebrow">Manufacturer demonstration</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Watch the equipment operate.</h2>
            <p className="mt-5 leading-7 text-[#c8c4bc]">See the brush system, manoeuvring and collection process in motion.</p>
          </div>
          <VideoEmbed title="Compact electric street sweeper manufacturer demonstration" poster={media.dzeroWhite} caption="Manufacturer demonstration footage shown for equipment reference." />
        </div>
      </section>

      <section className="bg-[#f2eee5] py-16 sm:py-20">
        <div className="content-container">
          <div className="grid gap-4 lg:grid-cols-3">
            {[media.dzeroWhite, media.dulevo850, media.dzeroRed].map((src, i) => (
              <figure key={src} className="group overflow-hidden bg-white p-5">
                <img src={src} alt={["White compact electric street sweeper manufacturer reference","Compact ride-on street sweeper manufacturer reference","Red compact electric street sweeper manufacturer reference"][i]} className="h-72 w-full object-contain transition duration-500 group-hover:scale-[1.03]" loading={i ? "lazy" : undefined} />
                <figcaption className="mt-4 border-t border-black/10 pt-3 text-xs font-bold uppercase tracking-[.12em] text-[#69665f]">Manufacturer reference · view {i + 1}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="content-container grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8a6b08]">Site suitability</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">The right machine depends on the site.</h2>
          </div>
          <div className="border-l-4 border-accent pl-6">
            <Info className="h-6 w-6" />
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#595852]">
              Surface condition, slope, access, traffic, debris type and working area all affect whether compact sweeping equipment is suitable. ClearRoad will review the location before confirming service.
            </p>
            <Link to="/request-assessment" className="mt-7 inline-flex items-center gap-2 bg-[#171919] px-6 py-4 text-sm font-bold text-white">
              Request a Site Assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
