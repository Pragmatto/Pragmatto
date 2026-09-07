import React from 'react';
import { siteContent } from '../../data/siteContent';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ShieldCheck, Users, ArrowRight, CheckCircle2, Building2, UserCheck, Sparkles } from 'lucide-react';

export function Hero({ onNavigate }) {
  const { company } = siteContent;

  const trustPoints = [
    { text: "Full-Time Employees (No Freelancers)", highlight: true },
    { text: "Dedicated U.S. Account Manager", highlight: true },
    { text: "Pre-Screened & Job-Ready Talent", highlight: false },
    { text: "Significant Cost Savings", highlight: false }
  ];

  return (
    <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 overflow-hidden pragmatto-light-mesh border-b border-slate-200/60">
      
      {/* Background Geometric Accent Inspired by Logo Triangles */}
      <div className="absolute top-0 right-0 -translate-y-16 translate-x-16 w-[500px] h-[500px] pointer-events-none opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-pragmatto-cyan">
          <polygon points="100,0 100,100 0,0" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Description, Trust Grid & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <Badge variant="cyan" className="shadow-xs">
              {company.badge}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-pragmatto-navy tracking-tight leading-[1.12]">
              Building Cost-Effective Internal <span className="text-gradient">Tech Teams</span> for US SMBs
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              {company.subtagline}
            </p>

            {/* Polished 2-Column Responsive Trust Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl">
              {trustPoints.map((point, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-pragmatto-blue/40 transition-all duration-200"
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    point.highlight ? 'bg-blue-50 text-pragmatto-blue' : 'bg-cyan-50 text-pragmatto-cyan'
                  }`}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-pragmatto-navy leading-snug">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => onNavigate && onNavigate('contact')}
                className="shadow-glow-blue font-bold rounded-xl"
              >
                Contact Us
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onNavigate && onNavigate('about')}
                className="font-bold rounded-xl"
              >
                Our Mission
              </Button>
            </div>

          </div>

          {/* Right Column: Unified Ecosystem Visual Architecture */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Single Main Cohesive Visual Card Container */}
              <div className="bg-pragmatto-navy text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700/80 relative overflow-hidden pragmatto-geo-pattern">
                
                {/* Geometric Fold Accent */}
                <div className="absolute top-0 right-0 w-36 h-36 opacity-15 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-pragmatto-cyan">
                    <polygon points="100,0 100,100 0,0" />
                  </svg>
                </div>

                <div className="space-y-6 relative z-10">
                  
                  {/* Top Status Header */}
                  <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-200">
                        US Account Management Active
                      </span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-pragmatto-blue/40 text-cyan-300 px-3 py-1 rounded-full border border-pragmatto-cyan/30">
                      Pragmatto Hub
                    </span>
                  </div>

                  {/* Connected Ecosystem Flow Architecture */}
                  <div className="bg-pragmatto-navy-dark/95 rounded-2xl p-5 border border-slate-800 space-y-3.5">
                    
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <span>US SMB Client Leadership</span>
                      <span className="text-pragmatto-cyan font-mono">Direct Synergy</span>
                    </div>

                    {/* Step 1: US Account Manager */}
                    <div className="flex items-center gap-3.5 bg-slate-800/90 p-3.5 rounded-xl border border-slate-700/80">
                      <div className="w-10 h-10 rounded-xl bg-pragmatto-blue text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
                        <Building2 className="w-5 h-5 text-cyan-200" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">
                          Dedicated US Account Manager
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          Single point of US responsibility & strategic alignment
                        </div>
                      </div>
                    </div>

                    {/* Connecting Vertical Indicator Line */}
                    <div className="flex justify-center my-0.5">
                      <div className="w-0.5 h-5 bg-gradient-to-b from-pragmatto-blue via-pragmatto-cyan to-pragmatto-cyan/60 rounded-full" />
                    </div>

                    {/* Step 2: Full-Time Remote Engineers */}
                    <div className="flex items-center gap-3.5 bg-slate-800/90 p-3.5 rounded-xl border border-slate-700/80">
                      <div className="w-10 h-10 rounded-xl bg-pragmatto-cyan text-pragmatto-navy flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">
                          Full-Time Remote Engineers
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          Pre-screened ERP, CRM, QA & Dev talent (India Tier 2/3)
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Fully Integrated Bottom Benefits Grid */}
                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 px-1">
                      Reliable Long-Term Team Benefits
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      {/* Integrated Benefit 1: 100% Full-Time Staff */}
                      <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-extrabold text-pragmatto-cyan">100%</span>
                          <UserCheck className="w-4 h-4 text-pragmatto-blue" />
                        </div>
                        <div className="text-xs font-bold text-white">Full-Time Staff</div>
                        <div className="text-[11px] text-slate-400">Zero freelancer risks</div>
                      </div>

                      {/* Integrated Benefit 2: Low Overhead & Reliability */}
                      <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-cyan-300">High Reliability</span>
                          <ShieldCheck className="w-4 h-4 text-pragmatto-cyan" />
                        </div>
                        <div className="text-xs font-bold text-white">Low Overhead</div>
                        <div className="text-[11px] text-slate-400">Long-term team integration</div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
