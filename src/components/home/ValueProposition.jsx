import React from 'react';
import { siteContent } from '../../data/siteContent';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Check, Shield, Users2, Sparkles, ArrowRight } from 'lucide-react';

export function ValueProposition({ onNavigate }) {
  const { valueProposition } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Subtle Geometric Background Shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 pointer-events-none opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-pragmatto-blue">
          <polygon points="0,0 100,50 0,100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Core Value Proposition"
          title={valueProposition.title}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Paragraphs & Key Takeaway Card */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="prose prose-slate max-w-none text-base sm:text-lg leading-relaxed space-y-4">
              {valueProposition.paragraphs.map((para, idx) => (
                <p key={idx} className="text-slate-700 font-normal">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50/50 border border-blue-100/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-pragmatto-blue text-white flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-pragmatto-blue block mb-1">
                  The Pragmatto Promise
                </span>
                <p className="text-lg font-bold text-pragmatto-navy">
                  {valueProposition.highlight}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                onClick={() => onNavigate && onNavigate('about')}
              >
                Learn More About Our Mission
              </Button>
            </div>

          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-pragmatto-navy text-white rounded-3xl p-8 shadow-card-hover border border-slate-700/60 overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 opacity-15">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-pragmatto-cyan">
                  <polygon points="100,0 100,100 0,0" />
                </svg>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pragmatto-blue text-white flex items-center justify-center font-bold">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">US-Based Accountability</h4>
                    <span className="text-xs text-pragmatto-cyan">Dedicated US Account Manager</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-sm">
                    <span className="text-slate-300">Communication & Strategy</span>
                    <span className="text-emerald-400 font-semibold text-xs bg-emerald-950/60 px-2 py-0.5 rounded">US Timezones</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-sm">
                    <span className="text-slate-300">Talent Pool Location</span>
                    <span className="text-cyan-300 font-semibold text-xs bg-cyan-950/60 px-2 py-0.5 rounded">India Tier 2/3 Tech Hubs</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-sm">
                    <span className="text-slate-300">Employment Contract</span>
                    <span className="text-cyan-300 font-semibold text-xs bg-cyan-950/60 px-2 py-0.5 rounded">100% Full-Time</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-pragmatto-blue/20 border border-pragmatto-blue/40 text-center">
                  <span className="text-xs font-semibold text-slate-200">
                    No vendor dependency. No bloated consulting fees.
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
