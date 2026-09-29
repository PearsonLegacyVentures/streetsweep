import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/components/Seo";
import { company } from "@/lib/site-config";
import { media } from "@/data/siteContent";

export default function About() {
  return (
    <PageLayout>
      <Seo
        title="About ClearRoad Bahamas | Street Sweeping Nassau"
        description="ClearRoad Bahamas is a founder-led street sweeping company being built for commercial properties, construction sites, communities and public spaces across New Providence."
      />

      <section className="relative overflow-hidden bg-[#111313] text-white">
        <div className="absolute inset-0 road-grid opacity-30" />
        <div className="content-container relative grid min-h-[560px] gap-10 py-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-eyebrow">About ClearRoad</p>
            <h1 className="mt-5 text-5xl font-bold leading-[.92] sm:text-6xl lg:text-7xl">Start with one problem. Solve it properly.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#cbc7be]">
              ClearRoad Bahamas is being built around a simple idea: give Bahamian properties and work sites a practical mechanical option for keeping paved areas cleaner.
            </p>
          </div>
          <img src={media.dzeroWhite} alt="Compact street sweeper representing ClearRoad Bahamas planned equipment category" className="sweeper-float min-h-[360px] w-full object-contain" />
        </div>
      </section>

      <section className="bg-[#f2eee5] py-16 sm:py-20">
        <div className="content-container grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8a6b08]">The business</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Street sweeping first. Broader municipal cleaning later.</h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-[#595852]">
            <p>
              ClearRoad is starting with mechanical street and property sweeping for commercial sites, construction access routes, private roads, communities and event areas across New Providence.
            </p>
            <p>
              The long-term direction is broader commercial and municipal cleaning: more capable sweeping equipment and adjacent services where they solve a real operating problem. The launch remains focused. One clear service. One market to prove.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#171919] py-16 text-white sm:py-20">
        <div className="content-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="relative overflow-hidden bg-accent p-8 text-[#171919] sm:p-10">
            <span className="text-xs font-bold uppercase tracking-[.18em]">Founder</span>
            <div className="mt-10 text-7xl font-bold leading-none sm:text-8xl">AP</div>
            <p className="mt-6 text-2xl font-bold">Amar Pearson</p>
            <p className="mt-2 max-w-sm text-sm leading-6">
              Founder-led from Nassau, with the business being developed around practical service delivery, commercial relationships and disciplined execution.
            </p>
          </div>
          <div>
            <p className="text-eyebrow">Why build it this way</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">The machine is leverage. The company is the product.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#c8c4bc]">
              Buying a sweeper is easy. Building a dependable service around scheduling, site assessment, equipment fit, maintenance and repeat customers is the actual business.
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-sm">
              <MapPin className="h-4 w-4 text-accent" />
              <span>{company.serviceArea}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dbe6e4] py-16 sm:py-20">
        <div className="content-container grid gap-8 lg:grid-cols-3">
          {[
            ["Focused launch", "Start with street sweeping and prove demand before adding more equipment or services."],
            ["Clear communication", "Make it easy for a property manager or contractor to understand what is being quoted and when it will happen."],
            ["Built to scale", "Use recurring routes and repeat commercial work to justify the next machine rather than buying ahead of demand."],
          ].map(([title, copy], i) => (
            <article key={title} className="border-t-4 border-[#171919] bg-white/55 p-6">
              <span className="text-xs font-bold text-[#516664]">0{i + 1}</span>
              <h3 className="mt-8 text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4c5b59]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-accent py-16 text-[#171919]">
        <div className="content-container flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-5xl font-bold">Have a property or work site to assess?</h2>
            <p className="mt-4 max-w-2xl">Tell us the location, surface and preferred schedule. We will review whether the planned equipment fits the job.</p>
          </div>
          <Link to="/request-assessment" className="inline-flex shrink-0 items-center gap-2 bg-[#171919] px-6 py-4 font-bold text-white">
            Request a Site Assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
