/* eslint-disable no-unused-vars */
// import React from 'react'
// import './App.css';
// import Hero from './Components/Hero';
// import AboutUs from './Components/AboutUs';
// import OurNumbers from './Components/Numbers';
// import WeHelp from './Components/WeHelp';
// import KOL from './Components/Kol';
// import CollaborationSection from './Components/CollaborationSection';
// import TopCollaborations from './Components/TopCollaborations';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <>
//       {/* <Hero /> */}

//       <OurNumbers />
//       <AboutUs />
//       <WeHelp />
//       <KOL />
//       <CollaborationSection />
//       <TopCollaborations />
//        <Footer />
//     </>
//   );
// }
// export default App

// import React from 'react';
// import Hero from './Components/Hero';
// import OurNumbers from './Components/Numbers';
// import AboutUs from './Components/AboutUs';
// import WeHelp from './Components/WeHelp';
// import KOL from './Components/Kol';
// import TopCollaborations from './Components/TopCollaborations';
// import CollaborationSection from './Components/CollaborationSection';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <>
//       <Hero />
//       <OurNumbers />
//       <AboutUs />
//       <WeHelp />
//       <KOL />
//       <CollaborationSection />
//       <TopCollaborations />
//       <Footer />
//     </>
//   );
// }

// export default App;

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
      <OurNumbers />
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={servicesRef}>
        <WeHelp />
      </div>
      <KOL />
      <CollaborationSection />
      <TopCollaborations />
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;