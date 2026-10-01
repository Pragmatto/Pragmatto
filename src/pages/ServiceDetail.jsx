import React from "react";
import { siteContent } from "../data/siteContent";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { FinalCTA } from "../components/home/FinalCTA";
import * as Icons from "lucide-react";

export function ServiceDetailPage({ serviceId, onNavigate }) {
  const { services } = siteContent;

  // Find the target service or fallback to first service
  const service = services.find((s) => s.id === serviceId) || services[0];

  const IconComp = Icons[service.icon] || Icons.Code2;

  // Practical approach steps tailored to the service
  const processSteps = [
    {
      num: "01",
      title: "Identify & Assess",
      desc: `We analyze your current processes and pinpoint the exact friction points, data gaps, or software issues in ${service.title.toLowerCase()}.`,
    },
    {
      num: "02",
      title: "Define Focused Scope",
      desc: "We define the minimum practical work needed to solve the problem—without adding unnecessary consulting layers or overhead.",
    },
    {
      num: "03",
      title: "Execute & Test",
      desc: "Our technical specialists execute the work using industry best practices and strict quality validation.",
    },
    {
      num: "04",
      title: "Deliver & Verify",
      desc: "We deliver the completed result and verify performance directly within your operational environment.",
    },
  ];

  // Specific value benefits for detailed view
  const benefits = [
    {
      title: "Reduced Operational Friction",
      desc: "Eliminate repetitive manual steps, software defects, and data inaccuracies that slow down your team.",
      icon: Icons.Zap,
    },
    {
      title: "High Reliability & Precision",
      desc: "Thorough validation ensures your software, reports, and data flows operate dependably every day.",
      icon: Icons.ShieldCheck,
    },
    {
      title: "Focused, Cost-Effective Execution",
      desc: "Pay only for the technical work required to solve your specific problem—no bloated project teams.",
      icon: Icons.Target,
    },
    {
      title: "Clear Accountability",
      desc: "Direct communication with experienced technical leads who remain accountable for the outcome.",
      icon: Icons.CheckCircle2,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Clean White Hero Header (No geo pattern) */}
      <section className="bg-slate-50/70  border-b border-slate-200/80 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Navigation Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <button
              onClick={() => onNavigate && onNavigate("services")}
              className="hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1 font-medium"
            >
              <Icons.ArrowLeft className="w-4 h-4 text-blue-600" />
              <span>Back to All Services</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-semibold">
              {service.title}
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <Badge variant="blue">{service.category}</Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-2xl font-bold text-blue-600 leading-relaxed">
              {service.subheading}
            </p>

            <p className="text-slate-600 text-sm sm:text-lg font-normal leading-relaxed pt-1">
              {service.fullDescription}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate && onNavigate("contact")}
                className="shadow-glow-blue font-bold"
              >
                Discuss This Service
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onNavigate && onNavigate("services")}
                icon={Icons.ArrowLeft}
                className="font-semibold"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Detailed Content Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Detailed Overview & Commitment Callout Card */}
          <div className="bg-slate-50/60 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
                  <IconComp className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Detailed Service Overview
                </h2>
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                {service.description}
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {service.fullDescription}
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Pragmatto Commitment
              </span>
              <h3 className="text-lg font-bold text-white leading-snug">
                Practical execution focused on real business outcomes.
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We don't sell bloated team sizes or multi-month initial
                discovery phases. We understand the task and deliver the result.
              </p>
            </div>
          </div>

          {/* Capabilities & Specific Problems Handled */}
          <div className="space-y-8">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <Badge variant="blue">Capabilities</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Specific Work & Problems We Solve
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Key areas where Pragmatto brings focused technical support for{" "}
                {service.title.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-400/50 transition-all duration-300 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Icons.CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {feat}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Targeted technical support to ensure {feat.toLowerCase()}{" "}
                      is completed cleanly, accurately, and without friction.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <span>Delivered Outcome</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How Pragmatto Delivers This Service (4 Steps) */}
          <div className="bg-slate-50/60 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <Badge variant="blue">Our Approach</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                How We Deliver {service.title}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                A streamlined, practical process designed for speed, quality,
                and clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-3 flex flex-col justify-between hover:shadow-md transition-all duration-300"
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

          {/* Key Value & Business Benefits */}
          <div className="space-y-8">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <Badge variant="blue">Business Impact</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Businesses Choose Pragmatto
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {benefits.map((b, idx) => {
                const BIcon = b.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <BIcon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        {b.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Service Callout Banner */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <Badge variant="dark">Get Started</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Have a Problem Involving {service.title}?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Tell us about your specific requirement. We will help you
                determine the simplest, most practical way to address it.
              </p>
            </div>
            <Button
              variant="cyan"
              size="lg"
              onClick={() => onNavigate && onNavigate("contact")}
              className="w-full md:w-auto shrink-0 font-bold"
            >
              Discuss {service.title}
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}
