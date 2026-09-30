import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { company, siteConfig } from "@/lib/site-config";
import { StreetSweeperLogo } from "@/components/brand/StreetSweeperLogo";

export function Footer() {
  return (
    <footer className="bg-[#06121C] text-[#F4F7F8]">
      <div className="h-2 bg-[linear-gradient(90deg,#FF6038_0_34%,#12CFC0_34%_67%,#F4C84A_67%_100%)]" />
      <div className="content-container py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_.65fr_.7fr]">
          <div>
            <StreetSweeperLogo />
            <p className="mt-6 max-w-md text-sm leading-7 text-[#B9C8CF]">
              Mechanical street sweeping for commercial properties, construction sites, private roads, communities and event areas across New Providence.
            </p>
            <Link to="/request-assessment" className="group mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF6038] px-5 text-xs font-black uppercase tracking-[.14em] text-white">
              Request a Sweep <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-[.18em] text-[#12CFC0]">Explore</h2>
            <div className="mt-5 grid gap-3">
              {siteConfig.nav.map((item) => <Link className="text-sm text-[#D8E1E5] hover:text-white" key={item.href} to={item.href}>{item.label}</Link>)}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-[.18em] text-[#F4C84A]">Service area</h2>
            <div className="mt-5 grid gap-3 text-sm text-[#D8E1E5]">
              <p>{company.serviceArea}</p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <p className="text-xs leading-5 text-[#7E929C]">Phone and WhatsApp details will be added before public launch.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#7E929C] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Nassau · New Providence · The Bahamas</span>
        </div>
      </div>
    </footer>
  );
}
