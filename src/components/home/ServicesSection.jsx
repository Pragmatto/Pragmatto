import React from 'react';
import { siteContent } from '../../data/siteContent';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export function ServicesSection({ onNavigate }) {
  const { services } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Pragmatto Service Offerings"
          title="Custom Staffing & Technology Solutions"
          subtitle="Expert staffing solutions customized for growing small and medium businesses — delivering pragmatic outcomes without bloated consulting."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              category={service.category}
              description={service.description}
              iconName={service.icon}
              features={service.features}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="secondary"
            size="lg"
            icon={ArrowRight}
            onClick={() => onNavigate && onNavigate('services')}
          >
            Explore Detailed Service Specifications
          </Button>
        </div>

      </div>
    </section>
  );
}
