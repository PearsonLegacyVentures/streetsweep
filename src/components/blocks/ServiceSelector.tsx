import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const options = [
  { title:"Parking lot", eyebrow:"Commercial", copy:"Keep entrances, parking rows and curb lines presentable with one-time or recurring sweeping.", timing:"Before opening, evening or off-hour windows." },
  { title:"Construction site", eyebrow:"Construction", copy:"Clear loose dirt, sand and aggregate from paved access routes and surrounding surfaces.", timing:"After heavy site activity or on a recurring schedule." },
  { title:"Private road", eyebrow:"Communities", copy:"Plan routine sweeping for shared roads, curbs and common paved areas.", timing:"Monthly or site-specific recurring service." },
  { title:"Hotel / resort", eyebrow:"Hospitality", copy:"Maintain guest-facing arrival roads, parking areas and service routes without relying only on manual cleanup.", timing:"Service windows planned around property operations." },
  { title:"Event area", eyebrow:"Events", copy:"Prepare or restore parking areas, routes and paved entrances around large gatherings.", timing:"Pre-event, post-event or both." },
];

export function ServiceSelector(){
  const [active,setActive]=useState(0);
  const item=options[active];
  return <div className="grid gap-0 overflow-hidden border border-white/15 lg:grid-cols-[.9fr_1.1fr]">
    <div className="bg-[#202322] p-5 sm:p-7">
      <p className="text-xs font-bold uppercase tracking-[.18em] text-accent">What needs cleaning?</p>
      <div className="mt-5 grid gap-2">
        {options.map((x,i)=><button key={x.title} type="button" onClick={()=>setActive(i)} className={`flex min-h-14 items-center justify-between border px-4 text-left text-sm font-bold transition ${active===i?"border-accent bg-accent text-[#171919]":"border-white/10 text-white hover:border-white/30"}`}>
          <span>{x.title}</span><span aria-hidden="true">0{i+1}</span>
        </button>)}
      </div>
    </div>
    <div className="flex min-h-[360px] flex-col justify-between bg-[#f2eee5] p-7 text-[#171919] sm:p-10">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8c6d08]">{item.eyebrow}</p>
        <h3 className="mt-4 text-4xl font-bold sm:text-5xl">{item.title}</h3>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#565650]">{item.copy}</p>
      </div>
      <div className="mt-10 border-t border-black/15 pt-5">
        <p className="text-sm font-semibold">{item.timing}</p>
        <Link to="/request-assessment" className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Discuss this site <ArrowRight className="h-4 w-4"/></Link>
      </div>
    </div>
  </div>
}
