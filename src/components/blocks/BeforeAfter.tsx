import { useState } from "react";

export function BeforeAfter() {
  const [position, setPosition] = useState(58);

  return (
    <div className="relative overflow-hidden bg-[#d8d3c8]">
      <div className="relative aspect-[16/9] min-h-[280px]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(140deg,#8c8273_0%,#6d665d_42%,#383b39_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[repeating-linear-gradient(12deg,rgba(255,255,255,.06)_0_2px,transparent_2px_18px)]" />
          <div className="absolute left-[12%] top-[55%] h-2 w-36 rotate-6 bg-[#c4ad78]/80" />
          <div className="absolute left-[31%] top-[67%] h-3 w-24 -rotate-3 bg-[#b59a67]/70" />
          <div className="absolute left-[45%] top-[48%] h-2 w-16 rotate-12 bg-[#b7a170]/80" />
          <span className="absolute left-5 top-5 bg-[#171919]/90 px-3 py-2 text-xs font-bold uppercase tracking-[.18em] text-white">Before</span>
        </div>

        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100-position}% 0 0)` }}>
          <div className="absolute inset-0 bg-[linear-gradient(140deg,#a5a29a_0%,#80827d_48%,#3f4240_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[repeating-linear-gradient(12deg,rgba(255,255,255,.03)_0_2px,transparent_2px_18px)]" />
          <span className="absolute left-5 top-5 bg-accent px-3 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#171919]">After</span>
        </div>

        <div className="pointer-events-none absolute inset-y-0 w-px bg-white" style={{ left: `${position}%` }}>
          <div className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-sm font-bold text-[#171919] shadow-lg">↔</div>
        </div>

        <input
          aria-label="Compare dirty and cleaned paved surface"
          type="range"
          min="10"
          max="90"
          value={position}
          onChange={(e)=>setPosition(Number(e.target.value))}
          className="absolute inset-x-4 bottom-4 z-10 w-[calc(100%-2rem)] accent-[#e8bd28]"
        />
      </div>
      <div className="flex items-center justify-between border-t border-black/10 bg-[#f4f0e7] px-5 py-3 text-xs font-bold uppercase tracking-[.16em] text-[#4b4b47]">
        <span>Loose sand + debris</span><span>Mechanically swept surface</span>
      </div>
    </div>
  );
}
