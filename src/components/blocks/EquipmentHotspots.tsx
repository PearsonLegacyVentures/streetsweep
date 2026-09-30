import { useState } from "react";
import { media } from "@/data/siteContent";

const points = [
  {
    label: "Front brushes",
    copy: "Sweep along edges and guide loose surface debris toward the collection path.",
    pos: "left-[18%] top-[70%]",
    color: "#FF6038",
    ink: "#FFFFFF",
  },
  {
    label: "Operator cabin",
    copy: "Ride-on operation gives the operator a clear working position and compact footprint.",
    pos: "left-[50%] top-[22%]",
    color: "#12CFC0",
    ink: "#08201E",
  },
  {
    label: "Compact chassis",
    copy: "A smaller machine can work across parking areas, private roads and tighter commercial sites.",
    pos: "left-[66%] top-[57%]",
    color: "#F4C84A",
    ink: "#161B22",
  },
];

export function EquipmentHotspots() {
  const [active, setActive] = useState(0);
  const point = points[active];

  return (
    <div className="grid overflow-hidden border border-black/10 lg:grid-cols-[1.28fr_.72fr]">
      <div className="relative min-h-[380px] overflow-hidden bg-[#081826] p-4 sm:min-h-[500px] sm:p-8">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(90deg,transparent_0_15%,rgba(244,200,74,.18)_15%_35%,transparent_35%_65%,rgba(244,200,74,.18)_65%_85%,transparent_85%)]" />
        <img
          src={media.dzeroWhite}
          alt="Compact electric street sweeper equipment reference"
          className="relative z-[1] h-full min-h-[350px] w-full object-contain"
        />

        {points.map((item, i) => {
          const selected = active === i;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${item.label} information`}
              className={`absolute z-[2] grid h-11 w-11 place-items-center rounded-full border-2 font-black shadow-lg transition ${item.pos}`}
              style={{
                background: selected ? item.color : "#081826",
                borderColor: item.color,
                color: selected ? item.ink : item.color,
              }}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      <div className="flex min-h-[380px] flex-col justify-between p-6 sm:p-8" style={{ background: point.color, color: point.ink }}>
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] opacity-70">Tap the machine</p>
          <h3 className="mt-4 text-4xl font-bold sm:text-5xl">{point.label}</h3>
          <p className="mt-5 leading-7 opacity-90">{point.copy}</p>
        </div>

        <div className="mt-8 grid gap-2">
          {points.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActive(i)}
              type="button"
              className="min-h-12 border border-current/25 px-4 text-left text-sm font-bold transition"
              style={{
                background: active === i ? "#081826" : "transparent",
                color: active === i ? "#FFFFFF" : "inherit",
              }}
            >
              {i + 1}. {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
