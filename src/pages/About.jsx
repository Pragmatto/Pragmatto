import React from 'react';
import { siteContent } from '../data/siteContent';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { FinalCTA } from '../components/home/FinalCTA';
import { ShieldCheck, HeartHandshake, Award, Sparkles, ArrowRight } from 'lucide-react';

export function AboutPage({ onNavigate }) {
  const { aboutMission } = siteContent;

  return (
    <div className="bg-pragmatto-bgLight min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-pragmatto-navy text-white py-16 sm:py-24 relative overflow-hidden pragmatto-geo-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="dark" className="mb-4">
            About Pragmatto Solutions
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {aboutMission.title}
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-cyan-300 italic max-w-3xl mx-auto font-medium">
            "{aboutMission.quote}"
          </p>
        </div>
      </section>

      {/* Story & Values */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Narrative Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-pragmatto-blue">
                Our Core Philosophy
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-pragmatto-navy tracking-tight">
                US Accountability Meets Skilled Remote Talent
              </h2>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                {aboutMission.paragraphs.map((para, idx) => (
                  <p key={idx} className="font-normal">
                    {para}
                  </p>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  Work With Us
                </Button>
              </div>
            </div>

            {/* Visual Value Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pragmatto-blue text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-pragmatto-navy mb-1">
                    Dedicated U.S. Account Manager
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Single point of contact responsible for alignment, strategy, and rapid response whenever you need us.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pragmatto-cyan text-pragmatto-navy flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-pragmatto-navy mb-1">
                    Integrated Extension of Your Team
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Full-time employees dedicated exclusively to your business — working your schedule and learning your culture.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-pragmatto-navy mb-1">
                    Low Overhead & High Reliability
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Get enterprise-grade technical execution at a fraction of traditional consulting costs.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}
