import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { media } from "@/data/siteContent";

export function BeforeAfter() {
  const [position, setPosition] = useState(52);

  return (
    <figure className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_28px_90px_rgba(8,24,38,.14)]">
      <div className="relative aspect-[16/10] min-h-[320px] overflow-hidden bg-[#cfc8b9]">
        <img
          src={media.beforeNassau}
          alt="Illustrative Nassau-style parking area with sand, leaves and loose debris before sweeping"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100-position}% 0 0)` }}>
          <img
            src={media.afterNassau}
            alt="Illustrative Nassau-style parking area after mechanical street sweeping"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <span className="absolute left-4 top-4 z-20 rounded-full bg-[#081826]/92 px-4 py-2 text-[10px] font-black uppercase tracking-[.2em] text-white">Before</span>
        <span className="absolute right-4 top-4 z-20 rounded-full bg-[#12CFC0] px-4 py-2 text-[10px] font-black uppercase tracking-[.2em] text-[#081826]">After</span>

        <div className="pointer-events-none absolute inset-y-0 z-10 w-[2px] bg-white shadow-[0_0_16px_rgba(0,0,0,.35)]" style={{ left: `${position}%` }}>
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

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#081826]/70 to-transparent px-5 pb-5 pt-16 text-white">
          <p className="text-sm font-bold">Drag across the image to compare.</p>
        </div>
      </div>

      <figcaption className="flex flex-col gap-2 bg-[#F3EFE6] px-5 py-4 text-xs leading-5 text-[#52616a] sm:flex-row sm:items-center sm:justify-between">
        <span className="font-bold text-[#081826]">What mechanical sweeping is meant to change.</span>
        <span>Illustrative Nassau-style visualization — not a completed client project.</span>
      </figcaption>
    </figure>
  );
}
