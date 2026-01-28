import React from 'react';
import TopNav from '@/components/TopNav';
import HeroSection from '@/components/HeroSection';
import Marquee from '@/components/Marquee';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <HeroSection />
      <Marquee />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
