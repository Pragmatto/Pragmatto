import React from 'react';
import { siteContent } from '../../data/siteContent';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { CheckCircle2, ArrowRight, Layers } from 'lucide-react';

export function StartSmallScaleFast({ onNavigate }) {
  const { startSmallScaleFast } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Background Decorative Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-pragmatto-blue">
          <polygon points="100,0 100,100 0,100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Messaging */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="Flexible Engagement Models"
              title={startSmallScaleFast.title}
              subtitle={startSmallScaleFast.description}
              align="left"
            />

            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-3">
              <h4 className="font-bold text-pragmatto-navy text-base flex items-center gap-2">
                <Layers className="w-5 h-5 text-pragmatto-blue" />
                Adaptive Staffing Flexibility
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                You don't need a 10-person contract to begin. Test our execution quality with a single engineer or part-time specialist, and scale your pod seamlessly as your operational backlogs grow.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => onNavigate && onNavigate('contact')}
              >
                Start a Conversation
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Role & Scale Examples */}
          <div className="lg:col-span-6 space-y-4">
            {startSmallScaleFast.examples.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card-hover hover:border-pragmatto-blue/40 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold text-pragmatto-navy">
                    {item.role}
                  </h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-pragmatto-blue/10 text-pragmatto-blue">
                    {item.model}
                  </span>
                </div>
                <p className="text-slate-600 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pragmatto-cyan shrink-0" />
                  {item.fit}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
