import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { company, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090b0b] text-[#f5f1e8]">
      <div className="content-container py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <p className="text-2xl font-black tracking-[-.04em]"><span className="text-accent">CLEAR</span>ROAD <span className="text-sm tracking-normal text-[#8d8a82]">BAHAMAS</span></p>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#b9b7b0]">
              Mechanical street sweeping for commercial properties, construction sites, private roads, communities and event areas across New Providence.
            </p>
            <Link to="/request-assessment" className="group mt-7 inline-flex items-center gap-2 bg-accent px-5 py-3 text-xs font-bold uppercase tracking-[.14em] text-[#111]">
              Request a Site Assessment <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[.18em] text-accent">Navigate</h2>
            <div className="mt-5 grid gap-3">
              {siteConfig.nav.map((item) => <Link className="text-sm text-[#d8d4cc] hover:text-white" key={item.href} to={item.href}>{item.label}</Link>)}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[.18em] text-accent">Contact</h2>
            <div className="mt-5 grid gap-3 text-sm text-[#d8d4cc]">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone} <span className="text-[#76746f]">(placeholder)</span></a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <p>{company.serviceArea}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#76746f] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Street sweeping · Nassau · New Providence</span>
        </div>
      </div>
    </footer>
  );
}
