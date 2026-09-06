import React, { useState } from 'react';
import { siteContent } from '../data/siteContent';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ServiceCard } from '../components/ui/ServiceCard';
import { FinalCTA } from '../components/home/FinalCTA';
import * as Icons from 'lucide-react';

export function ServicesPage({ onNavigate }) {
  const { services } = siteContent;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(services.map(s => s.category))];

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="bg-pragmatto-bgLight min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-pragmatto-navy text-white py-16 sm:py-24 relative overflow-hidden pragmatto-geo-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="dark" className="mb-4">
            Pragmatto Service Architecture
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Tailored Engineering & Staffing Solutions
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal">
            Expert staffing solutions customized for growing small and medium businesses — prioritizing practical outcomes over bloated consulting fees.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-pragmatto-blue text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-pragmatto-blue border border-cyan-100">
                      {service.category}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-pragmatto-blue flex items-center justify-center">
                      {React.createElement(Icons[service.icon] || Icons.Code, { className: 'w-6 h-6' })}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-pragmatto-navy mb-4">
                    {service.title}
                  </h2>

                  <p className="text-slate-600 leading-relaxed text-base mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-pragmatto-navy">
                      Core Capability Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <Icons.CheckCircle2 className="w-4 h-4 text-pragmatto-cyan shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Full-Time Dedicated Resource</span>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onNavigate && onNavigate('contact')}
                  >
                    Request Talent
                  </Button>
                </div>

              </div>
            ))}
          </div>

          {/* Additional Consulting Simplified Banner */}
          <div className="mt-16 bg-gradient-to-r from-pragmatto-navy to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <Badge variant="dark">Pragmatic Approach</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Consulting Simplified. Outcomes Delivered.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Our consulting approach emphasizes practicality, ensuring solutions are streamlined and focused on real business growth for SMBs without unnecessary fluff.
              </p>
            </div>
            <Button
              variant="cyan"
              size="lg"
              onClick={() => onNavigate && onNavigate('contact')}
            >
              Get Started
            </Button>
          </div>

        </div>
      </section>

      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}
