import { useState } from "react";
import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { media } from "@/data/siteContent";

const options = [
  {
    title: "Parking lot",
    eyebrow: "Commercial",
    copy: "Keep entrances, parking rows and curb lines presentable with one-time or recurring sweeping.",
    timing: "Before opening, evening or off-hour windows.",
    color: "#12CFC0",
    ink: "#08201E",
    image: media.dzeroWhite,
  },
  {
    title: "Construction site",
    eyebrow: "Construction",
    copy: "Clear loose dirt, sand and aggregate from paved access routes and surrounding surfaces.",
    timing: "After heavy site activity or on a recurring schedule.",
    color: "#FF6038",
    ink: "#FFFFFF",
    image: media.dulevo850,
  },
  {
    title: "Private road",
    eyebrow: "Communities",
    copy: "Plan routine sweeping for shared roads, curbs and common paved areas.",
    timing: "Monthly or site-specific recurring service.",
    color: "#F4C84A",
    ink: "#161B22",
    image: media.dzeroWhite,
  },
  {
    title: "Hotel / resort",
    eyebrow: "Hospitality",
    copy: "Maintain guest-facing arrival roads, parking areas and service routes without relying only on manual cleanup.",
    timing: "Service windows planned around property operations.",
    color: "#3F6BFF",
    ink: "#FFFFFF",
    image: media.dzeroRed,
  },
  {
    title: "Event area",
    eyebrow: "Events",
    copy: "Prepare or restore parking areas, routes and paved entrances around large gatherings.",
    timing: "Pre-event, post-event or both.",
    color: "#E34DA4",
    ink: "#FFFFFF",
    image: media.dzeroWhite,
  },
];

export function ServiceSelector() {
  const [active, setActive] = useState(0);
  const item = options[active];

  return (
    <div className="grid overflow-hidden border border-white/15 lg:grid-cols-[.82fr_1.18fr]">
      <div className="bg-[#081826] p-5 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8BE8DE]">Choose a site</p>
        <div className="mt-5 grid gap-2">
          {options.map((option, i) => {
            const selected = active === i;
            return (
              <button
                key={option.title}
                type="button"
                onClick={() => setActive(i)}
                className="flex min-h-14 items-center justify-between border px-4 text-left text-sm font-bold transition"
                style={{
                  background: selected ? option.color : "transparent",
                  color: selected ? option.ink : "#FFFFFF",
                  borderColor: selected ? option.color : "rgba(255,255,255,.12)",
                }}
              >
                <span>{option.title}</span>
                <span aria-hidden="true" className="text-xs opacity-70">0{i + 1}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative min-h-[430px] overflow-hidden p-7 sm:p-10" style={{ background: item.color, color: item.ink }}>
        <div className="absolute right-[-10%] top-1/2 h-[80%] w-[58%] -translate-y-1/2 opacity-20">
          <img src={item.image} alt="" aria-hidden="true" className="h-full w-full object-contain" />
        </div>

        <div className="relative z-[1] flex min-h-[360px] max-w-xl flex-col justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] opacity-70">{item.eyebrow}</p>
            <h3 className="mt-4 text-5xl font-bold leading-none sm:text-6xl">{item.title}</h3>
            <p className="mt-5 max-w-lg text-base font-medium leading-7 opacity-90">{item.copy}</p>
          </div>

          <div className="mt-10">
            <div className="grid gap-3 border-t border-current/25 pt-5 text-sm font-bold sm:grid-cols-2">
              <span className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> {item.timing}</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> New Providence</span>
            </div>
            <Link to="/request-assessment" className="mt-6 inline-flex min-h-12 items-center gap-2 bg-[#081826] px-5 text-sm font-bold text-white">
              Discuss this site <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
