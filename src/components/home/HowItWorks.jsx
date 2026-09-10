import React from "react";
import { siteContent } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";
import { ShieldCheck } from "lucide-react";

export function HowItWorks() {
  const { differentiator } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden pragmatto-geo-pattern border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={differentiator.badge}
          title={differentiator.title}
          subtitle={differentiator.intro}
          dark={true}
          align="center"
        />

        {/* Process Flow Grid - 5 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative mt-14">
          {differentiator.steps.map((step, idx) => (
            <div key={idx} className="relative group flex flex-col h-full">
              {/* Connector line for desktop */}
              {idx < differentiator.steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-slate-800 group-hover:bg-blue-500/50 transition-colors" />
              )}

              <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 shadow-md hover:-translate-y-1 transition-all duration-300 relative z-10 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-sky-400 font-mono">
                      {step.step}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-sky-400 flex items-center justify-center text-[10px] font-bold border border-slate-800">
                      Step
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-900 flex items-center gap-1.5 text-[11px] text-sky-400 font-semibold">
                  <span>Phase {idx + 1} Execution</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement Callout */}
        <div className="mt-14 max-w-3xl mx-auto p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center shadow-md">
          <div className="flex items-center justify-center gap-2 text-sky-400 mb-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Better Economics
            </span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
            {differentiator.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
