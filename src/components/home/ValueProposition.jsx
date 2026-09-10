import React from 'react';
import { siteContent } from '../../data/siteContent';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { CheckCircle2, ArrowRight, ShieldCheck, Layers } from 'lucide-react';

export function ValueProposition({ onNavigate }) {
  const { problemSection } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={problemSection.badge}
          title={problemSection.title}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Left Column: Problem Points & Practical Solution */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3.5">
              {problemSection.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg text-slate-800 font-medium leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Closing Statement Box */}
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
                {problemSection.closing}
              </p>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                onClick={() => onNavigate && onNavigate('services')}
              >
                See Our Services
              </Button>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-900 text-white rounded-3xl p-8 shadow-md border border-slate-800 overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Practical Focus</h4>
                    <span className="text-xs text-sky-400">Work-First Delivery</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-sm">
                    <span className="text-slate-300">Repetitive Work</span>
                    <span className="text-emerald-400 font-semibold text-xs bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-1 rounded-md">Automate & Simplify</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-sm">
                    <span className="text-slate-300">Messy Data</span>
                    <span className="text-sky-300 font-semibold text-xs bg-sky-950/80 border border-sky-800/60 px-2.5 py-1 rounded-md">Clean & Organize</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-sm">
                    <span className="text-slate-300">Existing Systems</span>
                    <span className="text-sky-300 font-semibold text-xs bg-sky-950/80 border border-sky-800/60 px-2.5 py-1 rounded-md">Maintain & Improve</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                  <span className="text-xs font-semibold text-slate-300">
                    No unnecessary project layers. Right-sized delivery.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
