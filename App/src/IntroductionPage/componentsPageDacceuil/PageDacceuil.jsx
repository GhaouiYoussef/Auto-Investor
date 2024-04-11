import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Footer from './Footer';
import FeaturesSection from './FeaturesSection';
import Team from './Team';
import Process from './Process';



const PageDacceuil = () => {
  
  return (
      <div>
<section id='hero'>
<HeroSection />
</section>        {/* Other components and content */}
<section id='about'>
<AboutSection />
</section>
<section id='process'>
<Process />
</section>
<section id='features'>
        <FeaturesSection></FeaturesSection>
        </section>
        <section id='team'>
        <Team />
        </section>
        <Footer />

    </div>
  );
};

export default PageDacceuil;
