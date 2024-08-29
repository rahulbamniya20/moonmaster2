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

import React from 'react';
import Hero from './Components/Hero';
import OurNumbers from './Components/Numbers';
import AboutUs from './Components/AboutUs';
import WeHelp from './Components/WeHelp';
import KOL from './Components/Kol';
import TopCollaborations from './Components/TopCollaborations';
import CollaborationSection from './Components/CollaborationSection';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Hero />
      <OurNumbers />
      <AboutUs />
      <WeHelp />
      <KOL />
      <CollaborationSection />
      <TopCollaborations />
      <Footer />
    </>
  );
}

export default App;