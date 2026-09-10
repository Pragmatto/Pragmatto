import React from "react";
import { siteContent } from "../data/siteContent";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  ShieldCheck,
  Globe,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function AboutPage({ onNavigate }) {
  const { aboutPage } = siteContent;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. PAGE HEADING Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden pragmatto-geo-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="dark" className="mb-4">
            Our Philosophy
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {aboutPage.title}
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-sky-400 font-medium max-w-3xl mx-auto">
            "{aboutPage.subheading}"
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {aboutPage.intro}
          </p>
        </div>
      </section>

      {/* 2. WHY WE BUILT PRAGMATTO */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="blue">Our Purpose</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {aboutPage.whyWeBuilt.title}
          </h2>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed font-normal">
            {aboutPage.whyWeBuilt.content}
          </p>
        </div>
      </section>

      {/* 3. OUR MODEL: The Right Team Depends on the Work */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden pragmatto-geo-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Our Model"
            title={aboutPage.ourModel.title}
            subtitle={aboutPage.ourModel.intro}
            dark={true}
            align="center"
          />

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {aboutPage.ourModel.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-950 rounded-2xl p-6 border border-slate-800 shadow-md flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-sky-400 font-mono block mb-2">
                    0{step.num}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {step.label}
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <p className="text-lg sm:text-xl font-bold text-white">
              {aboutPage.ourModel.closing}
            </p>
          </div>
        </div>
      </section>

      {/* 4. OUR DIFFERENCE: Not More People. More Useful Work. */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Difference"
            title={aboutPage.ourDifference.title}
            subtitle={aboutPage.ourDifference.intro}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {aboutPage.ourDifference.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4 hover:border-blue-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  {idx === 0 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 1 && <Globe className="w-6 h-6 text-sky-600" />}
                  {idx === 2 && <Users className="w-6 h-6" />}
                  {idx === 3 && (
                    <CheckCircle2 className="w-6 h-6 text-sky-600" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {pillar.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING FOCUS: Why We Work With Manufacturers */}
      <section className="py-16 sm:py-24 bg-slate-50 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Badge variant="blue">Manufacturing Focus</Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {aboutPage.manufacturingFocus.title}
          </h2>

          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl mx-auto">
            {aboutPage.manufacturingFocus.content}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
            {aboutPage.manufacturingFocus.problems.map((prob, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-base font-bold text-slate-900">
                  {prob}
                </span>
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg font-semibold text-slate-800 pt-4">
            {aboutPage.manufacturingFocus.closing}
          </p>
        </div>
      </section>

      {/* 6. ABOUT - FINAL CTA */}
      <section className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden pragmatto-geo-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {aboutPage.finalCta.title}
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {aboutPage.finalCta.content}
            </p>
            <div className="pt-4 flex justify-center">
              <Button
                variant="cyan"
                size="lg"
                icon={ArrowRight}
                onClick={() => onNavigate && onNavigate("contact")}
              >
                {aboutPage.finalCta.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
