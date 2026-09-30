import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0f0f]/95 text-white backdrop-blur-xl">
      <div className="content-container flex min-h-[4.7rem] items-center justify-between gap-4">
        <Link to="/" className="group flex items-end gap-2" aria-label="ClearRoad Bahamas home">
          <span className="text-xl font-black tracking-[-.04em] sm:text-2xl">
            <span className="text-accent">CLEAR</span>ROAD
          </span>
          <span className="mb-1 text-[9px] font-bold uppercase tracking-[.2em] text-[#88867f]">Bahamas</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative text-[11px] font-bold uppercase tracking-[.16em] transition ${active ? "text-accent" : "text-[#c9c7c1] hover:text-white"}`}
              >
                {item.label}
                {active && <span className="absolute -bottom-2 left-0 h-px w-full bg-accent" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link to="/request-assessment" className="group inline-flex items-center gap-2 bg-accent px-4 py-3 text-[11px] font-bold uppercase tracking-[.14em] text-[#171919]">
            Request Assessment <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button type="button" className="grid h-10 w-10 place-items-center border border-white/15 lg:hidden" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0d0f0f] lg:hidden" aria-label="Mobile">
          <div className="content-container grid gap-px bg-white/10 py-4">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => setOpen(false)} className="bg-[#111313] px-4 py-4 text-sm font-bold text-[#e9e4d9]">
                {item.label}
              </Link>
            ))}
            <Link to="/request-assessment" onClick={() => setOpen(false)} className="mt-2 bg-accent px-4 py-4 text-center text-sm font-bold text-[#171919]">
              Request a Site Assessment
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
