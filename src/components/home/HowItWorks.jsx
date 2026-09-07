import React from 'react';
import { siteContent } from '../../data/siteContent';
import { SectionHeading } from '../ui/SectionHeading';

export function HowItWorks() {
  const { howItWorks } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden pragmatto-geo-pattern border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Streamlined Onboarding"
          title="How It Works"
          subtitle="From initial workflow mapping to dedicated team deployment — a simple 4-step process built for speed and accountability."
          dark={true}
          align="center"
        />

        {/* Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative mt-16">
          {howItWorks.map((step, idx) => (
            <div key={idx} className="relative group">
              
              {/* Connector line for desktop */}
              {idx < howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-pragmatto-blue to-pragmatto-cyan opacity-30 group-hover:opacity-100 transition-opacity" />
              )}

              <div className="bg-pragmatto-navy-light/90 rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-pragmatto-cyan/50 shadow-xl hover:-translate-y-1 transition-all duration-300 relative z-10 flex flex-col justify-between h-full">
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pragmatto-cyan to-blue-400 font-mono">
                      {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-800 text-pragmatto-cyan flex items-center justify-center text-xs font-bold border border-slate-700">
                      Step
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center gap-2 text-xs text-pragmatto-cyan font-semibold">
                  <span>Phase {idx + 1} Execution</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
