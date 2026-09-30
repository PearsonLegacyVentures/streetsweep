import { useState } from "react";
import { Play } from "lucide-react";

export function VideoEmbed({ title, caption, poster }: { title: string; caption: string; poster: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden bg-[#071724] ring-1 ring-white/10">
        {loaded ? (
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/hkD3nMrWuMw?rel=0&modestbranding=1"
            title={title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setLoaded(true)} className="group h-full w-full text-left" aria-label={`Play video: ${title}`}>
            <img src={poster} alt="Manufacturer demonstration poster showing compact street sweeper reference equipment" loading="lazy" width="1200" height="675" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#071724]/80 via-[#071724]/20 to-[#071724]/55" />
            <span className="absolute left-5 top-5 rounded-full bg-[#071724]/80 px-4 py-2 text-[10px] font-black uppercase tracking-[.16em] text-white backdrop-blur">Official Dulevo manufacturer demo</span>
            <span className="absolute inset-0 grid place-items-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FF6038] text-white shadow-[0_16px_46px_rgba(0,0,0,.34)] transition group-hover:scale-105">
                <Play className="ml-1 h-8 w-8" fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-xs leading-5 text-white/60">{caption}</figcaption>
    </figure>
  );
}