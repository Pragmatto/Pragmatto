import React from 'react';
import { siteContent } from '../../data/siteContent';
import { Badge } from '../ui/Badge';
import { CheckCircle2, UserCheck, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function EmployeeCommitment({ onNavigate }) {
  const { employeeCommitment } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-pragmatto-navy text-white relative overflow-hidden pragmatto-geo-pattern">
      
      {/* Geometric background triangles */}
      <div className="geo-triangle-top-right" />
      <div className="geo-triangle-bottom-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="dark">Zero Freelancer Risk</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {employeeCommitment.title}
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-normal">
            {employeeCommitment.description}
          </p>
        </div>

        {/* Feature Grid Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {employeeCommitment.points.map((point, idx) => (
            <div 
              key={idx}
              className="bg-pragmatto-navy-light/90 backdrop-blur-md rounded-2xl p-6 border border-slate-700/60 shadow-lg hover:border-pragmatto-cyan/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-pragmatto-blue/30 text-pragmatto-cyan flex items-center justify-center border border-pragmatto-cyan/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white leading-snug">
                  {point}
                </h4>
              </div>
              <div className="pt-4 border-t border-slate-800 mt-6 flex items-center justify-between text-xs text-slate-400">
                <span>Pragmatto Standard</span>
                <span className="text-pragmatto-cyan font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout: Pragmatto Full-Time vs Freelancers */}
        <div className="bg-slate-900/90 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            {/* Traditional Freelancers / Subcontractors */}
            <div className="space-y-4 pb-6 md:pb-0">
              <div className="flex items-center gap-3 text-red-400 font-bold text-lg">
                <ShieldAlert className="w-6 h-6 shrink-0" />
                <span>Traditional Freelancers / Gig Workers</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>High attrition & sudden project abandonment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>Split attention across multiple client projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>No ongoing technical training or soft skill development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>Lack of accountability and management oversight</span>
                </li>
              </ul>
            </div>

            {/* Pragmatto Full-Time Employees */}
            <div className="space-y-4 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-3 text-pragmatto-cyan font-bold text-lg">
                <UserCheck className="w-6 h-6 shrink-0 text-pragmatto-blue" />
                <span>Pragmatto Full-Time Dedicated Engineers</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pragmatto-cyan shrink-0" />
                  <span className="font-medium">100% committed to your long-term roadmap</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pragmatto-cyan shrink-0" />
                  <span className="font-medium">Integrated extension of your internal team</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pragmatto-cyan shrink-0" />
                  <span className="font-medium">Continuous Pragmatto technical & soft skills upskilling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pragmatto-cyan shrink-0" />
                  <span className="font-medium">Direct U.S. Account Manager guidance</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <Button
              variant="cyan"
              size="md"
              onClick={() => onNavigate && onNavigate('contact')}
            >
              Build Your Full-Time Remote Team
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
