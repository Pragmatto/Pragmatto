import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustBar } from '../components/home/TrustBar';
import { ValueProposition } from '../components/home/ValueProposition';
import { EmployeeCommitment } from '../components/home/EmployeeCommitment';
import { ServicesSection } from '../components/home/ServicesSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { HowItWorks } from '../components/home/HowItWorks';
import { StartSmallScaleFast } from '../components/home/StartSmallScaleFast';
import { FinalCTA } from '../components/home/FinalCTA';

export function HomePage({ onNavigate }) {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <TrustBar />
      <ValueProposition onNavigate={onNavigate} />
      <EmployeeCommitment onNavigate={onNavigate} />
      <ServicesSection onNavigate={onNavigate} />
      <WhyChooseUs />
      <HowItWorks />
      <StartSmallScaleFast onNavigate={onNavigate} />
      <FinalCTA onNavigate={onNavigate} />
    </main>
  );
}
