import React from "react";
import { siteContent } from "../../data/siteContent";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function ValueProposition({ onNavigate }) {
  const { problemSection } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Topic Badge */}
        <div>
          <Badge variant="cyan" className="shadow-xs">
            {problemSection.badge}
          </Badge>
        </div>

        {/* Main Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          {problemSection.title}
        </h2>

        {/* Body Paragraph */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
          {problemSection.body}
        </p>

        {/* Tagline / Delivered Outcomes Highlight Banner */}
        <div className="pt-2">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
            <span className="text-base sm:text-lg font-bold text-sky-400">
              Focused work.
            </span>
            <span className="hidden sm:inline text-slate-600 font-bold">•</span>
            <span className="text-base sm:text-lg font-bold text-white">
              Practical technology.
            </span>
            <span className="hidden sm:inline text-slate-600 font-bold">•</span>
            <span className="text-base sm:text-lg font-bold text-emerald-400">
              Delivered outcomes.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
