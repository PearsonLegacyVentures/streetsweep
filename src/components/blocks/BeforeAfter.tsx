import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { media } from "@/data/siteContent";

const debris = [
  ["12%","69%","18px","6px","10deg"],
  ["20%","78%","11px","5px","-8deg"],
  ["28%","61%","15px","5px","18deg"],
  ["36%","83%","20px","6px","-16deg"],
  ["44%","70%","9px","5px","25deg"],
  ["52%","88%","15px","5px","-4deg"],
  ["61%","65%","13px","5px","13deg"],
  ["70%","80%","19px","6px","-20deg"],
  ["78%","62%","10px","4px","8deg"],
  ["86%","74%","16px","5px","20deg"],
];

export function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <figure className="overflow-hidden rounded-[32px] border border-[#071724]/10 bg-white shadow-[0_30px_100px_rgba(7,23,36,.16)]">
      <div className="relative aspect-[16/9] min-h-[320px] overflow-hidden bg-[#D8D4C9]">
        <img
          src={media.tropicalLot}
          alt="Tropical commercial parking area used to illustrate a street sweeping before and after"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(82,55,33,.06),rgba(82,55,33,.14))]" />
        <div className="absolute inset-x-0 bottom-0 h-[56%] bg-[radial-gradient(circle_at_20%_60%,rgba(180,145,88,.75)_0_2px,transparent_3px),radial-gradient(circle_at_70%_35%,rgba(120,90,48,.55)_0_1px,transparent_2px)] bg-[length:34px_30px,24px_22px] opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-[43%] bg-[linear-gradient(10deg,rgba(210,180,120,.44),transparent_56%)]" />
        {debris.map(([left,top,w,h,rotate],i) => (
          <span
            key={i}
            className="absolute z-[2] rounded-full bg-[#7B572F]/80 shadow-sm"
            style={{left,top,width:w,height:h,transform:`rotate(${rotate})`}}
          />
        ))}

        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100-position}% 0 0)` }}>
          <img
            src={media.tropicalLot}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover saturate-[1.03]"
          />
          <div className="absolute inset-0 bg-white/[.035]" />
          <img
            src={media.dzeroWhite}
            alt=""
            aria-hidden="true"
            className="absolute bottom-[5%] right-[4%] h-[43%] w-[43%] object-contain drop-shadow-[0_18px_24px_rgba(7,23,36,.35)]"
          />
        </div>

        <span className="absolute left-4 top-4 z-20 rounded-full bg-[#071724]/92 px-4 py-2 text-[10px] font-black uppercase tracking-[.2em] text-white">Before</span>
        <span className="absolute right-4 top-4 z-20 rounded-full bg-[#12CFC0] px-4 py-2 text-[10px] font-black uppercase tracking-[.2em] text-[#071724]">After</span>

        <div className="pointer-events-none absolute inset-y-0 z-10 w-[2px] bg-white shadow-[0_0_18px_rgba(7,23,36,.45)]" style={{ left: `${position}%` }}>
          <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-[#FF6038] text-white shadow-xl">
            <MoveHorizontal className="h-5 w-5" />
          </div>
        </div>

        <input
          aria-label="Compare the before and after street sweeping visualization"
          type="range"
          min="8"
          max="92"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#071724]/75 to-transparent px-5 pb-5 pt-20 text-white">
          <p className="text-sm font-bold">Drag across the image to compare.</p>
        </div>
      </div>

      <figcaption className="flex flex-col gap-2 bg-[#F3EFE6] px-5 py-4 text-xs leading-5 text-[#52616A] sm:flex-row sm:items-center sm:justify-between">
        <span className="font-bold text-[#071724]">Sand, leaves and surface buildup → a cleaner paved area.</span>
        <span>Illustrative comparison for service planning. Not a completed client project.</span>
      </figcaption>
    </figure>
  );
}