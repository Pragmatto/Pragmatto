import React from 'react';
import { siteContent } from '../../data/siteContent';
import { SectionHeading } from '../ui/SectionHeading';
import { FeatureCard } from '../ui/FeatureCard';

export function WhyChooseUs() {
  const { whyPragmatto } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={whyPragmatto.badge}
          title={whyPragmatto.title}
          subtitle={whyPragmatto.intro}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
          {whyPragmatto.points.map((item, idx) => (
            <FeatureCard
              key={idx}
              index={idx}
              title={item.title}
              description={item.description}
              iconName={item.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
