import React from "react";
import { siteContent } from "../data/siteContent";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { FinalCTA } from "../components/home/FinalCTA";
import * as Icons from "lucide-react";

export function ServicesPage({ onNavigate }) {
  const { services, servicesPageHeader, servicesFinalSection } = siteContent;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden pragmatto-geo-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="dark" className="mb-4">
            Manufacturing Technology Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {servicesPageHeader.title}
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-sky-400 font-semibold max-w-3xl mx-auto">
            {servicesPageHeader.subheading}
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {servicesPageHeader.intro}
          </p>
        </div>
      </section>

      {/* Main Content Area: 4 Detailed Service Cards */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-blue-700 border border-sky-200/80">
                      {service.category}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      {React.createElement(Icons[service.icon] || Icons.Code2, {
                        className: "w-6 h-6",
                      })}
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h2>

                  <p className="text-sm font-bold text-blue-600 mb-4">
                    {service.subheading}
                  </p>

                  <p className="text-slate-600 leading-relaxed text-base mb-6">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Examples of Work We Solve:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-slate-700"
                        >
                          <Icons.CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Practical & Focused Delivery
                  </span>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onNavigate && onNavigate("contact")}
                  >
                    Discuss This Service
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Services Final Section */}
          <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <Badge variant="dark">Problem-First Approach</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {servicesFinalSection.title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {servicesFinalSection.content}
              </p>
            </div>
            <Button
              variant="cyan"
              size="lg"
              onClick={() => onNavigate && onNavigate("contact")}
            >
              {servicesFinalSection.buttonText}
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}
