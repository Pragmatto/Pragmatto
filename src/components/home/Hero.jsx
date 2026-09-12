import React from "react";
import { siteContent } from "../../data/siteContent";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import {
  ShieldCheck,
  Users,
  ArrowRight,
  CheckCircle2,
  Building2,
  UserCheck,
} from "lucide-react";

export function Hero({ onNavigate }) {
  const { hero } = siteContent;

  const trustPoints = [
    { text: "Reduce Manual Work", highlight: true },
    { text: "Clean Up Business Data", highlight: true },
    { text: "Improve Existing Software", highlight: false },
    { text: "Build Small Internal Tools", highlight: false },
  ];

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 overflow-hidden pragmatto-light-mesh border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Headline, Description, Trust Grid & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="cyan" className="shadow-xs">
              {hero.badge}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              <span className="text-gradient"> Get Tech Work </span>Done Without
              the Consulting Overhead
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              {hero.subheadline}
            </p>

            {/* Polished 2-Column Responsive Trust Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl">
              {trustPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-blue-500/40 transition-all duration-200"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      point.highlight
                        ? "bg-blue-50 text-blue-600"
                        : "bg-sky-50 text-sky-600"
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900 leading-snug">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                onClick={() => onNavigate && onNavigate("contact")}
              >
                {hero.primaryCta}
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => onNavigate && onNavigate("services")}
              >
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Right Column: Corporate B2B Delivery Architecture Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
                <div className="space-y-6 relative z-10">
                  {/* Status Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-200">
                        U.S. ACCOUNTABILITY
                      </span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-900/60 text-sky-300 px-3 py-1 rounded-full border border-blue-700/50">
                      RIGHT-SIZED TEAMS
                    </span>
                  </div>

                  {/* Delivery Flow Card */}
                  <div className="bg-slate-950/90 rounded-2xl p-5 border border-slate-800 space-y-3.5">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      <span>Focused Delivery Model</span>
                      <span className="text-sky-400 font-mono">
                        Direct Alignment
                      </span>
                    </div>

                    <div className="flex items-center gap-3.5 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">
                          U.S.-Based Accountability
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          A clear point of responsibility for your business.
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center my-0.5">
                      <div className="w-0.5 h-5 bg-gradient-to-b from-blue-600 to-sky-400 rounded-full" />
                    </div>

                    <div className="flex items-center gap-3.5 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      <div className="w-10 h-10 rounded-lg bg-sky-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">
                          Full-Time Technical Professionals
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          Right-sized team matched strictly to your work.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Benefits */}
                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 px-1">
                      FOCUSED DELIVERY. LESS OVERHEAD.
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-sky-400">
                            Problem First
                          </span>
                          <UserCheck className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-xs font-bold text-white">
                          No lengthy consulting
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Work starts with what's needed.
                        </div>
                      </div>

                      <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-sky-400">
                            Better Value
                          </span>
                          <ShieldCheck className="w-4 h-4 text-sky-400" />
                        </div>
                        <div className="text-xs font-bold text-white">
                          Less Overhead
                        </div>
                        <div className="text-[11px] text-slate-400">
                          More budget into actual results.
                        </div>
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
