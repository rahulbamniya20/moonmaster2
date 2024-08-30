// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Spline from '@splinetool/react-spline';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import Background from '../assets/KOlsImage/Background.png';

// gsap.registerPlugin(ScrollTrigger);

// const CollaborationSection = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const descriptionRef = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const title = titleRef.current;
//     const description = descriptionRef.current;
//     const button = buttonRef.current;

//     gsap.fromTo(
//       title,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: section,
//           start: 'top 80%',
//           end: 'bottom 20%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );

//     gsap.fromTo(
//       description,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         delay: 0.3,
//         scrollTrigger: {
//           trigger: section,
//           start: 'top 80%',
//           end: 'bottom 20%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );

//     gsap.fromTo(
//       button,
//       { opacity: 0, scale: 0.8 },
//       {
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         delay: 0.6,
//         ease: 'back.out(1.7)',
//         scrollTrigger: {
//           trigger: section,
//           start: 'top 80%',
//           end: 'bottom 20%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );
//   }, []);

//   return (
//     <div ref={sectionRef} className="relative w-full h-screen bg-[#0f0529] overflow-hidden">
//       {/* <div className="absolute inset-0 opacity-30">
//       <Spline scene="https://prod.spline.design/cLZ8GKfMi37c67jY/scene.splinecode" />
//       </div> */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
//         <h2 ref={titleRef} className="text-6xl font-bold text-white mb-6">
//           Let's Work Together
//         </h2>
//         <p ref={descriptionRef} className="text-xl text-gray-300 mb-8 max-w-2xl">
//         We help you build the strongest community for the most powerful pumps! 🚀</p>
//         <button
//           ref={buttonRef}
//           className="bg-purple-700 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors flex items-center space-x-2"
//         >
//           <span>Start Your Collaboration</span>
//           {/* <TelegramIcon size={20} /> */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CollaborationSection;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TelegramIcon from '@mui/icons-material/Telegram';
import Background from '../assets/KOlsImage/Background.png';

gsap.registerPlugin(ScrollTrigger);

const CollaborationSection = () => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;

    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      title,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      description,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      button,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="py-16 bg-gradient-to-r from-[#441b8f] via-[#06173d] to-[#04025b] px-4 sm:px-6 lg:px-8">
      <div 
        ref={cardRef}
        className="max-w-3xl mx-auto bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm p-8 sm:p-12">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
            Let's Work Together
          </h2>
          <p ref={descriptionRef} className="text-lg sm:text-xl text-gray-300 mb-8 text-center">
            We help you build the strongest community for the most powerful pumps! 🚀
          </p>
          <div className="flex justify-center">
            <button
              ref={buttonRef}
              className="bg-purple-700 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors flex items-center space-x-2"
            >
              <span>Start Your Collaboration</span>
              <TelegramIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;