import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Spline from '@splinetool/react-spline';
import TelegramIcon from '@mui/icons-material/Telegram';

gsap.registerPlugin(ScrollTrigger);

const CollaborationSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      description,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
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
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-screen bg-[#0f0529] overflow-hidden">
      {/* <div className="absolute inset-0 opacity-30">
      <Spline scene="https://prod.spline.design/cLZ8GKfMi37c67jY/scene.splinecode" />
      </div> */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        <h2 ref={titleRef} className="text-6xl font-bold text-white mb-6">
          Let's Work Together
        </h2>
        <p ref={descriptionRef} className="text-xl text-gray-300 mb-8 max-w-2xl">
        We help you build the strongest community for the most powerful pumps! 🚀</p>
        <button
          ref={buttonRef}
          className="bg-purple-700 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors flex items-center space-x-2"
        >
          <span>Start Your Collaboration</span>
          {/* <TelegramIcon size={20} /> */}
        </button>
      </div>
    </div>
  );
};

export default CollaborationSection;