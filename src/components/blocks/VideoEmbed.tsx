import { useState } from "react";
import { Play } from "lucide-react";

export function VideoEmbed({ title, caption, poster }: { title: string; caption: string; poster: string }) {
  const [loaded, setLoaded] = useState(false);
  return <figure>
    <div className="relative aspect-video overflow-hidden bg-[#0b0d0d] ring-1 ring-white/10">
      {loaded ? <iframe className="h-full w-full" src="https://www.youtube-nocookie.com/embed/hkD3nMrWuMw?rel=0&modestbranding=1" title={title} loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <button type="button" onClick={() => setLoaded(true)} className="group h-full w-full text-left" aria-label={`Play video: ${title}`}>
        <img src={poster} alt="Manufacturer demonstration poster showing compact street sweeper reference equipment" loading="lazy" width="1200" height="675" className="h-full w-full object-contain p-8" />
        <span className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/60" />
        <span className="absolute left-6 top-6 max-w-sm text-sm font-semibold text-white/80">Official Dulevo manufacturer demonstration</span>
        <span className="absolute inset-0 grid place-items-center"><span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-[#111] shadow-xl transition group-hover:scale-105"><Play className="ml-1 h-7 w-7" fill="currentColor" /></span></span>
      </button>}
    </div>
    <figcaption className="mt-3 text-xs leading-5 text-white/60">{caption}</figcaption>
  </figure>;
}
