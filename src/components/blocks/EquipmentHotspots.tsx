import { useState } from "react";
import { media } from "@/data/siteContent";

const points = [
  { label:"Front brushes", copy:"Sweep along edges and guide loose surface debris toward the collection path.", pos:"left-[18%] top-[70%]" },
  { label:"Operator cabin", copy:"Ride-on operation gives the operator a clear working position and compact footprint.", pos:"left-[50%] top-[22%]" },
  { label:"Compact chassis", copy:"A smaller machine can work across parking areas, private roads and tighter commercial sites.", pos:"left-[66%] top-[57%]" },
];

export function EquipmentHotspots(){
  const [active,setActive]=useState(0);
  return <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
    <div className="relative min-h-[360px] overflow-hidden bg-[#111313] p-4 sm:min-h-[460px] sm:p-8">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <img src={media.dzeroWhite} alt="Compact electric street sweeper equipment reference" className="relative z-[1] h-full min-h-[330px] w-full object-contain" />
      {points.map((p,i)=><button key={p.label} type="button" onClick={()=>setActive(i)} aria-label={`Show ${p.label} information`} className={`absolute z-[2] grid h-9 w-9 place-items-center rounded-full border-2 font-bold shadow-md transition ${p.pos} ${active===i?"border-accent bg-accent text-[#171919]":"border-white bg-[#171919] text-white"}`}>{i+1}</button>)}
    </div>
    <div>
      <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8c6d08]">Tap the machine</p>
      <h3 className="mt-3 text-4xl font-bold">{points[active].label}</h3>
      <p className="mt-4 leading-7 text-[#5d5b55]">{points[active].copy}</p>
      <div className="mt-8 grid gap-2">
        {points.map((p,i)=><button key={p.label} onClick={()=>setActive(i)} type="button" className={`border-l-4 px-4 py-3 text-left text-sm font-bold ${active===i?"border-accent bg-white":"border-black/15"}`}>{i+1}. {p.label}</button>)}
      </div>
    </div>
  </div>
}
