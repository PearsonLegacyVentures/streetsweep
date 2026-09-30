import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

type Site = "commercial" | "construction" | "community" | "event";
type Frequency = "one-time" | "recurring";
type Debris = "light" | "sand" | "aggregate";

const siteOptions: Array<{value: Site; label: string; color: string; text: string}> = [
  { value: "commercial", label: "Commercial property", color: "#12CFC0", text: "#08201E" },
  { value: "construction", label: "Construction site", color: "#FF6038", text: "#FFFFFF" },
  { value: "community", label: "Private road / community", color: "#F4C84A", text: "#161B22" },
  { value: "event", label: "Event / venue", color: "#3F6BFF", text: "#FFFFFF" },
];

const frequencyOptions: Array<{value: Frequency; label: string}> = [
  { value: "one-time", label: "One-time cleanup" },
  { value: "recurring", label: "Recurring service" },
];

const debrisOptions: Array<{value: Debris; label: string}> = [
  { value: "light", label: "Light dirt + litter" },
  { value: "sand", label: "Sand + surface buildup" },
  { value: "aggregate", label: "Tracked dirt + aggregate" },
];

export function SweepPlanner() {
  const [site, setSite] = useState<Site>("commercial");
  const [frequency, setFrequency] = useState<Frequency>("recurring");
  const [debris, setDebris] = useState<Debris>("light");

  const result = useMemo(() => {
    if (site === "construction" || debris === "aggregate") {
      return {
        title: "Construction Sweep",
        copy: "Best fit for active work sites, access roads and paved areas affected by tracked dirt or loose aggregate.",
        note: frequency === "recurring" ? "Consider a recurring schedule around heavy site activity." : "Good for a post-work or one-off cleanup.",
        color: "#FF6038",
      };
    }

    if (site === "event") {
      return {
        title: "Site Cleanup",
        copy: "Best fit for parking areas, entrances and paved routes that need to be prepared or restored around an event.",
        note: "Pre-event, post-event or both can be reviewed.",
        color: "#3F6BFF",
      };
    }

    return {
      title: "Routine Sweep",
      copy: "Best fit for commercial properties, private roads and communities that need consistent paved-area maintenance.",
      note: frequency === "recurring" ? "A repeat schedule is the strongest fit." : "A one-time reset can be quoted first.",
      color: site === "community" ? "#F4C84A" : "#12CFC0",
    };
  }, [site, frequency, debris]);

  const reset = () => {
    setSite("commercial");
    setFrequency("recurring");
    setDebris("light");
  };

  return (
    <div className="overflow-hidden border border-white/15 bg-[#0B1A25] text-white">
      <div className="grid lg:grid-cols-[1.05fr_.95fr]">
        <div className="p-5 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8BE8DE]">Interactive planner</p>
              <h3 className="mt-3 text-3xl font-bold sm:text-4xl">Build your sweeping request.</h3>
            </div>
            <button type="button" onClick={reset} className="inline-flex min-h-11 items-center gap-2 border border-white/15 px-3 text-xs font-bold text-[#C8D3D8] hover:border-white/40">
              <RotateCcw className="h-4 w-4" /> Reset
            </button>
          </div>

          <div className="mt-8 grid gap-7">
            <fieldset>
              <legend className="text-xs font-bold uppercase tracking-[.16em] text-[#91A4AE]">1. Site type</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {siteOptions.map((option) => {
                  const selected = site === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setSite(option.value)}
                      className="min-h-14 border px-4 text-left text-sm font-bold transition"
                      style={{
                        background: selected ? option.color : "transparent",
                        color: selected ? option.text : "#FFFFFF",
                        borderColor: selected ? option.color : "rgba(255,255,255,.14)",
                      }}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-xs font-bold uppercase tracking-[.16em] text-[#91A4AE]">2. Service pattern</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {frequencyOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFrequency(option.value)}
                    className={`min-h-12 border px-4 text-left text-sm font-bold transition ${frequency === option.value ? "border-[#12CFC0] bg-[#12CFC0]/10 text-[#8BE8DE]" : "border-white/15 text-white"}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-xs font-bold uppercase tracking-[.16em] text-[#91A4AE]">3. Main buildup</legend>
              <div className="mt-3 grid gap-2">
                {debrisOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setDebris(option.value)}
                    className={`flex min-h-12 items-center justify-between border px-4 text-left text-sm font-bold transition ${debris === option.value ? "border-[#FF6038] bg-[#FF6038]/10 text-[#FF9A80]" : "border-white/15 text-white"}`}
                  >
                    <span>{option.label}</span>
                    {debris === option.value && <CheckCircle2 className="h-4 w-4" />}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        </div>

        <div className="flex min-h-[420px] flex-col justify-between p-6 sm:p-8" style={{ background: result.color, color: result.color === "#F4C84A" ? "#111827" : "#FFFFFF" }}>
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] opacity-75">Suggested service</p>
            <h4 className="mt-5 text-5xl font-bold leading-none sm:text-6xl">{result.title}</h4>
            <p className="mt-6 max-w-lg text-base font-medium leading-7 opacity-90">{result.copy}</p>
          </div>
          <div className="mt-10 border-t border-current/25 pt-5">
            <p className="text-sm font-bold">{result.note}</p>
            <p className="mt-3 text-xs leading-5 opacity-75">This is a planning aid, not a final quote. Site access, surface and debris still need to be reviewed.</p>
            <Link to="/request-assessment" className="mt-6 inline-flex min-h-12 items-center gap-2 bg-[#081826] px-5 text-sm font-bold text-white">
              Send this request <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
