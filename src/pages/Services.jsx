import React, { useState } from "react";
import { siteContent } from "../data/siteContent";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { FinalCTA } from "../components/home/FinalCTA";
import * as Icons from "lucide-react";

export function ServicesPage({ onNavigate }) {
  const { services, servicesPageHeader, servicesFinalSection } = siteContent;
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(services.map((s) => s.category))];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 sm:py-20 lg:py-24 relative overflow-hidden pragmatto-geo-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="dark" className="mb-3 sm:mb-4">
            Technology Services
          </Badge>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {servicesPageHeader.title}
          </h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-2xl text-sky-400 font-semibold max-w-3xl mx-auto">
            {servicesPageHeader.subheading}
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {servicesPageHeader.intro}
          </p>
        </div>
      </section>

      {/* Main Content Area: Filter Pills & Fully Responsive Row-by-Row Cards */}
      <section className="py-12 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          {categories.length > 2 && (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Full-Width Row-by-Row Service Cards Stack (Fully Responsive Across All Devices) */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  {/* Left Column: Category, Icon, Title, Subheading & Description */}
                  <div className="lg:col-span-6 space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-blue-700 border border-sky-200/80">
                        {service.category}
                      </span>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
                        {React.createElement(
                          Icons[service.icon] || Icons.Code2,
                          { className: "w-5 h-5 sm:w-6 sm:h-6" },
                        )}
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-xs sm:text-base font-bold text-blue-600">
                      {service.subheading}
                    </p>

                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Right Column: Work Examples & Footer CTA */}
                  <div className="lg:col-span-6 border-t border-slate-100 pt-6 mt-2 lg:border-t-0 lg:pt-0 lg:mt-0 lg:border-l lg:pl-8 flex flex-col justify-between h-full">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 block">
                        Examples of Work We Solve:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {service.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-700 text-xs sm:text-sm font-medium hover:bg-slate-100/70 transition-colors"
                          >
                            <Icons.CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Row */}
                    <div className="pt-5 sm:pt-6 mt-6 sm:mt-8 border-t border-slate-100 flex flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block shrink-0" />
                        <span>Practical & Focused Delivery</span>
                      </div>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => onNavigate && onNavigate("contact")}
                        className="w-auto"
                      >
                        Discuss This Service
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Services Final Section Callout Banner */}
          <div className="mt-12 sm:mt-16 lg:mt-20 bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2 sm:space-y-3 max-w-xl text-center md:text-left">
              <Badge variant="dark">Problem-First Approach</Badge>
              <h3 className="text-xl sm:text-3xl font-bold text-white">
                {servicesFinalSection.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {servicesFinalSection.content}
              </p>
            </div>
            <Button
              variant="cyan"
              size="lg"
              onClick={() => onNavigate && onNavigate("contact")}
              className="w-full md:w-auto"
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
