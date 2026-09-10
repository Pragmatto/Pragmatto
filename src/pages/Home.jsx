import React from 'react';
import { Hero } from '../components/home/Hero';
import { ValueProposition } from '../components/home/ValueProposition';
import { ServicesSection } from '../components/home/ServicesSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { FinalCTA } from '../components/home/FinalCTA';

export function HomePage({ onNavigate }) {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <ValueProposition onNavigate={onNavigate} />
      <ServicesSection onNavigate={onNavigate} />
      <HowItWorks />
      <WhyChooseUs />
      <FinalCTA onNavigate={onNavigate} />
    </main>
  );
}
