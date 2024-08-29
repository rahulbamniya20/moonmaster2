import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import APUSTAJA from '../assets/KOlsImage/APUSTAJA.jpg';
import Myro from '../assets/KOlsImage/Myro.jpg';
import MANEKI from '../assets/KOlsImage/MANEKI.jpg';
import PeiPei from '../assets/KOlsImage/PeiPei.jpg';
import Vita from '../assets/KOlsImage/Vita.jpg';
import ToshiTheCat from '../assets/KOlsImage/ToshiTheCat.jpg';

const collaborations = [
  { name: 'APU (APUSTAJA)', image: APUSTAJA },
  { name: 'MYRO', image: Myro },
  { name: 'Maneki Coin', image: MANEKI },
  { name: 'PeiPei Coin', image: PeiPei },
  { name: 'Vita Inu', image: Vita },
  { name: 'ToshiTheCat', image: ToshiTheCat },
];

const SCROLL_SPEED = 50; // pixels per second

const TopCollaborations = () => {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
    const viewWidth = container.offsetWidth;

    let animationFrameId;
    let lastTimestamp = 0;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setScrollX((prevScrollX) => {
        let newScrollX = prevScrollX + (SCROLL_SPEED * delta) / 1000;
        if (newScrollX >= totalWidth / 2) {
          newScrollX -= totalWidth / 2;
        }
        return newScrollX;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="bg-[#0B0B1F] py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-purple-400 text-center mb-16"
      >
        Top Collaborations
      </motion.h2>
      
      <div className="w-full max-w-5xl mb-16 overflow-hidden">
        <div 
          ref={containerRef}
          className="flex"
          style={{
            transform: `translateX(${-scrollX}px)`,
            width: `${collaborations.length * 200}px`, // Adjust based on your card width
          }}
        >
          {[...collaborations, ...collaborations].map((collab, index) => (
            <div
              key={`${collab.name}-${index}`}
              className="flex-shrink-0 w-48 mx-4"
            >
              <div className="bg-[#1A1A3A] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img 
                  src={collab.image} 
                  alt={collab.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-white font-medium text-center">{collab.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCollaborations;