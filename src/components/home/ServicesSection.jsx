import React from "react";
import { siteContent } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function ServicesSection({ onNavigate }) {
  const { services } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Businesses Focus"
          title="Practical Technology Support for Small & Medium-Sized Businesses"
          subtitle="Focused, practical technology work for the problems that matter to your daily operations."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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

        <div className="mt-14 text-center ">
          <Button
            variant="primary"
            size="md"
            icon={ArrowRight}
            onClick={() => onNavigate && onNavigate("services")}
          >
            See Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
