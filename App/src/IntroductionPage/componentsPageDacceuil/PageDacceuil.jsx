import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Footer from './Footer';
import FeaturesSection from './FeaturesSection';
import Team from './Team';




const PageDacceuil = () => {
  
  return (
      <div>
        <HeroSection />
        {/* Other components and content */}
        <AboutSection />
        <FeaturesSection></FeaturesSection>
        <Team />
        <Footer />

    </div>
  );
};

export default PageDacceuil;
