import { Link } from "react-router-dom";

export function MobileCTA(){
  return <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#111313]/95 p-3 backdrop-blur sm:hidden">
    <Link to="/request-assessment" className="block bg-accent px-4 py-3 text-center text-sm font-bold uppercase tracking-[.12em] text-[#171919]">Request a Site Assessment</Link>
  </div>
}
