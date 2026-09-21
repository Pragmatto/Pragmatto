import React from "react";
import { siteContent } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function ServicesSection({ onNavigate }) {
  const { services } = siteContent;
  // Display only the first 4 services on the Home Page for a perfectly symmetrical 2x2 grid
  const featuredServices = services.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Businesses Focus"
          title="Practical Technology Support for Small & Medium-Sized Businesses"
          subtitle="Focused, practical technology work for the problems that matter to your daily operations."
          align="center"
        />

        {/* Perfectly Symmetrical 2x2 Grid (4 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch mt-12">
          {featuredServices.map((service) => (
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

        {/* CTA Button to navigate to the Services Page for all remaining services */}
        <div className="mt-14 text-center">
          <Button
            variant="primary"
            size="md"
            icon={ArrowRight}
            onClick={() => onNavigate && onNavigate("services")}
          >
            See All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
