import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { StreetSweeperLogo } from "@/components/brand/StreetSweeperLogo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071724]/95 text-white backdrop-blur-xl">
      <div className="content-container flex min-h-[5rem] items-center justify-between gap-4">
        <StreetSweeperLogo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative text-[11px] font-black uppercase tracking-[.16em] transition ${active ? "text-[#12CFC0]" : "text-[#C8D3D8] hover:text-white"}`}
              >
                {item.label}
                {active && <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#12CFC0]" />}
              </Link>
            );
          })}
        </nav>

        <Link to="/request-assessment" className="group hidden min-h-12 items-center gap-2 rounded-full bg-[#FF6038] px-5 text-[11px] font-black uppercase tracking-[.14em] text-white sm:inline-flex">
          Request a Sweep <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 lg:hidden" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#071724] lg:hidden" aria-label="Mobile">
          <div className="content-container grid gap-2 py-4">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => setOpen(false)} className="rounded-xl bg-white/5 px-4 py-4 text-sm font-bold text-[#EAF1F4]">
                {item.label}
              </Link>
            ))}
            <Link to="/request-assessment" onClick={() => setOpen(false)} className="mt-1 rounded-xl bg-[#FF6038] px-4 py-4 text-center text-sm font-black text-white">
              Request a Sweep
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
