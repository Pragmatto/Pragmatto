import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export function FinalCTA({ onNavigate }) {
  const { company } = siteContent;

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-pragmatto-navy via-slate-900 to-pragmatto-navy-dark text-white relative overflow-hidden pragmatto-geo-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-pragmatto-blue/30 text-cyan-300 border border-pragmatto-cyan/20">
            <ShieldCheck className="w-4 h-4 text-pragmatto-cyan" />
            Ready to Transform Your Engineering Capacity?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Build Your High-Performing Remote Tech Team Today
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Partner with Pragmatto for pre-screened full-time IT talent, low overhead, and dedicated U.S. account management accountability.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="cyan"
              size="lg"
              icon={ArrowRight}
              onClick={() => onNavigate && onNavigate('contact')}
            >
              Contact Us Now
            </Button>
            
            <a
              href={`mailto:${company.contactEmail}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5 text-pragmatto-cyan" />
              Email Us Directly ({company.contactEmail})
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            No long hiring cycles • 100% Full-Time Employees • US Timezone Sync
          </p>
        </div>

      </div>
    </section>
  );
}
