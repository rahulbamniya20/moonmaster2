
import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import OurNumbers from './Components/Numbers';
import AboutUs from './Components/AboutUs';
import WeHelp from './Components/WeHelp';
import KOL from './Components/Kol';
import TopCollaborations from './Components/TopCollaborations';
import CollaborationSection from './Components/CollaborationSection';
import Footer from './Components/Footer';

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <Navbar 
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <Hero />
      <TopCollaborations />
      <OurNumbers />
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={servicesRef}>
        <WeHelp />
      </div>
      <KOL />
      <CollaborationSection />
      
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
