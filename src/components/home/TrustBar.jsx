import React from "react";
import { siteContent } from "../../data/siteContent";
import * as Icons from "lucide-react";

export function TrustBar() {
  const { trustPillars } = siteContent;

  return (
    <section className="bg-white py-10 border-b border-slate-100 relative z-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustPillars.map((pillar, idx) => {
            const IconComponent = Icons[pillar.icon] || Icons.CheckCircle;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-pragmatto-blue/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-pragmatto-blue flex items-center justify-center shrink-0 mt-0.5">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-pragmatto-navy">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
