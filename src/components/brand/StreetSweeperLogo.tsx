import { Link } from "react-router-dom";

type Props = {
  compact?: boolean;
  className?: string;
};

export function StreetSweeperLogo({ compact = false, className = "" }: Props) {
  return (
    <Link to="/" aria-label="StreetSweeper Bahamas home" className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative grid h-10 w-12 shrink-0 place-items-center overflow-hidden rounded-[2px] bg-[#FF6038]">
        <svg viewBox="0 0 48 40" className="h-full w-full" aria-hidden="true">
          <path d="M4 29h40" stroke="#081826" strokeWidth="3" />
          <path d="M8 34h9m6 0h9m6 0h5" stroke="#F4C84A" strokeWidth="2.5" />
          <path d="M11 22h21l5 7H8l3-7Z" fill="#fff" />
          <path d="M14 14h14l4 8H12l2-8Z" fill="#12CFC0" />
          <circle cx="15" cy="30" r="3.2" fill="#081826" />
          <circle cx="33" cy="30" r="3.2" fill="#081826" />
          <path d="M7 31c5-2 8-2 12 0M29 31c5-2 8-2 12 0" stroke="#081826" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-black tracking-[-.055em] text-white" style={{fontFamily:"'Barlow Condensed', Inter, sans-serif"}}>
          STREET<span className="text-[#12CFC0]">SWEEPER</span>
        </span>
        {!compact && <span className="mt-1 block text-[9px] font-black uppercase tracking-[.34em] text-[#F4C84A]">Bahamas</span>}
      </span>
    </Link>
  );
}
