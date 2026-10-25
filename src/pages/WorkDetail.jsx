import React from "react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { FinalCTA } from "../components/home/FinalCTA";
import { getWorkDetail } from "../data/workDetails";
import * as Icons from "lucide-react";

export function WorkDetailPage({ serviceId, workId, onNavigate }) {
  const work = getWorkDetail(serviceId, workId);

  const ServiceIconComp = Icons[work.serviceIcon] || Icons.Code2;

  // 4-step pragmatic approach tailored for this specific work
  const approachSteps = [
    {
      num: "01",
      title: "Assess Current Friction",
      desc: `We review your current operational procedures, input files, and system workflows for ${work.title.toLowerCase()} to pinpoint the exact failure points.`,
    },
    {
      num: "02",
      title: "Define Minimal Practical Solution",
      desc: "We define the most direct, focused technical solution needed to solve the problem—without adding consulting layers or unnecessary project overhead.",
    },
    {
      num: "03",
      title: "Execute & Validate",
      desc: "Our technical specialists build and test the required scripts, tools, or integrations with rigorous quality checks against your real-world scenarios.",
    },
    {
      num: "04",
      title: "Deploy & Verify",
      desc: "We deploy the solution directly into your daily operational environment and verify that it performs dependably for your team.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Clean White Hero Header (No geo pattern) */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500">
            <button
              onClick={() => onNavigate && onNavigate("services")}
              className="hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1 font-medium"
            >
              <Icons.ArrowLeft className="w-4 h-4 text-blue-600" />
              <span>All Services</span>
            </button>
            <span className="text-slate-300">/</span>
            <button
              onClick={() =>
                onNavigate && onNavigate("service-detail", work.serviceId)
              }
              className="hover:text-blue-600 transition-colors cursor-pointer font-medium"
            >
              {work.serviceTitle}
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-semibold">{work.title}</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="blue">{work.serviceCategory}</Badge>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                Focused Capability
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {work.title}
            </h1>

            <p className="text-lg sm:text-2xl font-bold text-blue-600 leading-relaxed">
              {work.tagline}
            </p>

            <p className="text-slate-600 text-sm sm:text-lg font-normal leading-relaxed pt-1">
              {work.problemSummary}
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate && onNavigate("contact")}
                className="shadow-glow-blue font-bold"
              >
                Discuss This Problem
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  onNavigate && onNavigate("service-detail", work.serviceId)
                }
                icon={Icons.ArrowLeft}
                className="font-semibold"
              >
                Back to {work.serviceTitle}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          {/* Section 1: The Problem We Solve & Common Pain Points */}
          <div className="space-y-8">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <Badge variant="blue">The Problem</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why This Problem Slows Businesses Down
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Common operational bottlenecks and risks when{" "}
                {work.title.toLowerCase()} is handled manually or left unaddressed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {work.painPoints.map((pain, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex items-start gap-4 hover:border-slate-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60">
                    <Icons.AlertCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      Friction Point 0{idx + 1}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {pain}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: What Pragmatto Delivers */}
          <div className="bg-slate-50/60 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xs space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <Badge variant="blue">Our Technical Scope</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                What Pragmatto Delivers
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Focused technical execution designed around your specific
                operational requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Left Column: What We Do */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <ServiceIconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Technical Capability & Execution
                    </h3>
                    <p className="text-xs text-slate-500">
                      How we tackle {work.title.toLowerCase()}
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {work.whatPragmattoDoes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Icons.Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Tangible Deliverables */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Icons.FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Tangible Deliverables
                    </h3>
                    <p className="text-xs text-slate-500">
                      Concrete outputs delivered directly to your business
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {work.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-3"
                    >
                      <Icons.CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-slate-800 text-sm sm:text-base font-medium">
                        {deliv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Our 4-Step Practical Approach */}
          <div className="space-y-8">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <Badge variant="blue">Our Approach</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                How We Deliver {work.title}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Simple, transparent execution focused purely on delivering the outcome.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approachSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-3 flex flex-col justify-between hover:shadow-md hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <span className="text-3xl font-extrabold text-blue-600 font-mono block">
                      {step.num}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Expected Business Outcomes */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Measurable Impact
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Expected Business Outcomes
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Why businesses trust Pragmatto to solve {work.title.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {work.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                      <Icons.TrendingUp className="w-4 h-4" />
                    </div>
                    <p className="text-base font-semibold text-white leading-snug">
                      {outcome}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-slate-400 pt-2 border-t border-slate-700/60 block">
                    Verified Outcome
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Other Work in this Service Area */}
          {work.siblingWorks && work.siblingWorks.length > 0 && (
            <div className="space-y-8 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Explore More
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Other Work We Solve in {work.serviceTitle}
                  </h2>
                </div>
                <button
                  onClick={() =>
                    onNavigate && onNavigate("service-detail", work.serviceId)
                  }
                  className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>View All in {work.serviceTitle}</span>
                  <Icons.ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {work.siblingWorks.slice(0, 6).map((sibling, idx) => (
                  <div
                    key={idx}
                    onClick={() =>
                      onNavigate &&
                      onNavigate("work-detail", work.serviceId, sibling.slug)
                    }
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-400/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                  >
                    <div className="space-y-2.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Icons.CheckCircle2 className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {sibling.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {sibling.tagline}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                      <span>Explore This Work</span>
                      <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 6: Bottom Callout Banner */}
          <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs relative overflow-hidden">
            <div className="max-w-2xl space-y-4">
              <Badge variant="blue">Have a Similar Challenge?</Badge>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Need Help With {work.shortTitle || work.title}?
              </h3>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                Tell us what is slowing your team down. We'll help you determine
                the simplest, most practical way to address it.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <Button
                  variant="primary"
                  size="md"
                  icon={Icons.ArrowRight}
                  onClick={() => onNavigate && onNavigate("contact")}
                  className="shadow-glow-blue font-bold"
                >
                  Discuss This Requirement
                </Button>

                <button
                  type="button"
                  onClick={() =>
                    onNavigate && onNavigate("service-detail", work.serviceId)
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 shadow-xs hover:bg-slate-50 hover:text-blue-600 hover:border-slate-300 transition-all cursor-pointer"
                >
                  <Icons.ArrowLeft className="w-4 h-4 text-slate-400" />
                  <span>Back to {work.serviceTitle}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}
