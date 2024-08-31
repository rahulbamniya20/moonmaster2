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

const SCROLL_SPEED = 30; // pixels per second

const TopCollaborations = () => {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
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

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#0B0B1F] overflow-hidden">
      <style jsx>{`
        .radiant-glow {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 600px;
          background: radial-gradient(ellipse at top, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 25%, rgba(139, 92, 246, 0.1) 50%, rgba(139, 92, 246, 0.05) 75%, rgba(139, 92, 246, 0) 100%);
          filter: blur(60px);
        }
        .soft-light {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0) 100%);
          pointer-events: none;
        }
      `}</style>
      
      <div className="radiant-glow"></div>
      <div className="soft-light"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-12 relative z-20"
        >
          Top Collaborations
        </motion.h2>
        
        <div className="w-full overflow-hidden relative">
          <div 
            ref={containerRef}
            className="flex"
            style={{
              transform: `translateX(${-scrollX}px)`,
              width: `${collaborations.length * 300}px`,
            }}
          >
            {[...collaborations, ...collaborations].map((collab, index) => (
              <motion.div
                key={`${collab.name}-${index}`}
                className="flex-shrink-0 w-72 mx-4"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.div 
                  className="mt-8 bg-purple-900 bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl border border-purple-500/30"
                  whileHover={{ boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
                >
                  <div className="flex items-center p-4">
                    <img 
                      src={collab.image} 
                      alt={collab.name} 
                      className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-purple-400"
                    />
                    <div>
                      <p className="text-white font-medium text-lg">{collab.name}</p>
                      <p className="text-purple-300 text-sm mt-1">Top Collaboration</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollaborations;
