import { Link } from "react-router-dom";

type Props = {
  compact?: boolean;
  className?: string;
};

export function StreetSweeperLogo({ compact = false, className = "" }: Props) {
  return (
    <Link to="/" aria-label="StreetSweeper Bahamas home" className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative grid h-11 w-14 shrink-0 place-items-center overflow-hidden rounded-[12px] bg-[#FF6038] shadow-[0_8px_24px_rgba(255,96,56,.24)]">
        <svg viewBox="0 0 56 44" className="h-full w-full" aria-hidden="true">
          <path d="M0 35h56v9H0z" fill="#F4C84A" />
          <path d="M5 38h12m7 0h13m7 0h7" stroke="#071724" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M11 27h27l6 7H8l3-7Z" fill="#F7FAFB" />
          <path d="M16 15h17l5 12H12l4-12Z" fill="#12CFC0" />
          <path d="M20 18h10l3 7H17l3-7Z" fill="#071724" opacity=".82" />
          <circle cx="15" cy="34" r="4" fill="#071724" />
          <circle cx="38" cy="34" r="4" fill="#071724" />
          <path d="M8 35c3.2-2.6 6.5-3.3 10-2M37 33c4-1 7.5-.4 11 2" stroke="#071724" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 31c-2 1-4 2-6 4M45 31c3 1 5 2 8 4" stroke="#071724" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>

      <span className="leading-none">
        <span
          className="block text-[1.02rem] font-black uppercase tracking-[-.045em] text-white sm:text-[1.08rem]"
          style={{fontFamily:"'Barlow Condensed', Inter, sans-serif"}}
        >
          STREET<span className="text-[#12CFC0]">SWEEPER</span>
        </span>
        {!compact && (
          <span className="mt-1.5 block text-[8px] font-black uppercase tracking-[.38em] text-[#F4C84A]">
            Bahamas
          </span>
        )}
      </span>
    </Link>
  );
}