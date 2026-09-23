import React from "react";
import { siteContent } from "../data/siteContent";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  ShieldCheck,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Building2,
  CheckSquare,
  Award,
  Search,
  FileText,
  Wrench,
  TrendingUp,
} from "lucide-react";
import * as Icons from "lucide-react";

export function AboutPage({ onNavigate }) {
  const { aboutPage } = siteContent;
  const {
    hero,
    whyWeBuilt,
    ourApproach,
    founder,
    experience,
    clientImpact,
    philosophy,
  } = aboutPage;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO — ABOUT PRAGMATTO */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden pragmatto-geo-pattern border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.15]">
            {hero.title}
          </h1>

          <p className="text-base sm:text-2xl font-bold text-sky-400 leading-relaxed max-w-3xl mx-auto">
            {hero.paragraph}
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {hero.coreMessage}
          </p>
        </div>
      </section>

      {/* 2. WHY WE BUILT PRAGMATTO */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="blue">{whyWeBuilt.badge}</Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {whyWeBuilt.title}
          </h2>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            {whyWeBuilt.p1}
          </p>
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={ourApproach.badge}
            title={ourApproach.title}
            subtitle={ourApproach.subtitle}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12 items-stretch">
            {ourApproach.cards.map((card, idx) => {
              const iconMap = {
                Search: Search,
                FileText: FileText,
                Wrench: Wrench,
                CheckCircle2: CheckCircle2,
                TrendingUp: TrendingUp,
              };
              const IconComp = iconMap[card.icon] || CheckCircle2;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FOUNDER & CEO */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <Badge variant="dark" className="mb-2">
                  {founder.badge}
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {founder.name}
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-sky-400 text-xs sm:text-sm font-semibold border border-slate-700">
                <Award className="w-4 h-4 text-sky-400" />
                <span>Executive Leadership</span>
              </div>
            </div>

            <p className="text-base sm:text-lg font-bold text-sky-300">
              {founder.subheading}
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {founder.summary}
            </p>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE & EXPERTISE */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* QUALITY & DATA EXPERTISE */}
          <div>
            <SectionHeading
              badge={experience.badge}
              title={experience.title}
              align="center"
            />

            {/* Quality & Data Expertise Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {experience.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <CheckSquare className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pt-2">
                    {pillar.items}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ENTERPRISE TECHNOLOGY EXPERIENCE */}
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              badge={experience.enterpriseBadge}
              title={experience.enterpriseTitle}
              subtitle={experience.enterpriseSubtitle}
              align="center"
            />

            {/* Enterprise Technology Experience Container */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
              {/* Companies Badges Grid */}
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 text-center block">
                  Representative Enterprise Client & System Experience
                </span>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
                  {experience.companies.map((company, idx) => {
                    const name =
                      typeof company === "object" ? company.name : company;
                    const logo =
                      typeof company === "object"
                        ? company.logo
                        : `/${company}.png`;

                    return (
                      <div
                        key={idx}
                        className="px-6 py-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 shadow-xs hover:shadow-md hover:bg-white hover:border-blue-400/40 transition-all duration-300 flex items-center justify-center h-20 w-36 shrink-0"
                      >
                        <img
                          src={logo}
                          alt={`${name} logo`}
                          className="max-h-10 sm:max-h-12 max-w-full object-contain"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Major Areas Tags */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 text-center block">
                  Core System Domains
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                  {experience.majorAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg bg-sky-50 text-blue-700 text-xs sm:text-sm font-semibold border border-sky-200/80"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT THIS MEANS FOR OUR CLIENTS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge={clientImpact.badge}
            title="A Simple, Direct Approach to Technology Execution"
            subtitle={clientImpact.supportingStatement}
            align="center"
          />

          {/* Visual 4-Step Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {clientImpact.flowSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between relative group"
              >
                <div>
                  <span className="text-3xl font-extrabold text-blue-600 font-mono block mb-3">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                </div>
                {idx < clientImpact.flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-5 h-5 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR PHILOSOPHY (FINAL SECTION) */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden pragmatto-geo-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <Badge variant="dark">{philosophy.badge}</Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {philosophy.title}
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            {philosophy.statement}
          </p>

          {/* <div>
            <h1 className="text-lg">You define the task. We deliver it.</h1>
          </div> */}
          <div className="pt-4 flex justify-center">
            <Button
              variant="cyan"
              size="lg"
              icon={ArrowRight}
              onClick={() => onNavigate && onNavigate("contact")}
            >
              Talk to Pragmatto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
