// import React from 'react';
// import { motion } from 'framer-motion';
// import Spline from '@splinetool/react-spline';
// import { TypeAnimation } from 'react-type-animation';
// import Navbar from './Navbar';
// import { RoughNotation } from "react-rough-notation";

// const Hero = () => {
//   return (
//     <div className="relative w-full h-screen bg-[#0B0B1F] text-white overflow-hidden">
//       {/* Spline background */}
//       <div className="absolute inset-0">
//         <Spline scene="https://prod.spline.design/vt6YrQRpiTpifTWv/scene.splinecode" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col">
//         <Navbar />
//         <div className="flex-grow flex flex-col items-center justify-center text-center px-4 mt-[8%]">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="mb-8"
//           >
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
//               <span className="block leading-normal">Ready To Take Your</span>
//               <TypeAnimation
//                 sequence={[
//                   "Meme Coin",
//                   2000,
//                   "DeFi Project",
//                   2000,
//                   "NFT Collection",
//                   2000,
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
//                 repeat={Infinity}
//               />
//               <span className="block leading-normal">To The Moon?</span>
//             </h1>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg mb-8"
//           >
//             We are a Web3-native{" "}
//             KOL marketing team, led by{" "}
//             <RoughNotation type="box" color="#8B5CF6">KOLs from around the globe</RoughNotation>
//           </motion.p>

//           <motion.button
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-[#5c22da] text-white px-6 py-3 rounded-md font-medium hover:bg-purple-600 transition-colors flex items-center space-x-2"
//           >
//             Schedule a Call
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Phone } from 'lucide-react';

const AnimatedButton = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const icon = iconRef.current;

    gsap.set([button, text, icon], { perspective: 400 });

    const tl = gsap.timeline({ paused: true });

    tl.to(button, {
      duration: 0.5,
      scale: 1.05,
      boxShadow: '0 0 20px rgba(147, 51, 234, 0.7)',
    })
      .to(text, {
        duration: 0.4,
        rotationX: 360,
        y: -2,
      }, 0)
      .to(icon, {
        duration: 0.4,
        rotationY: 360,
        x: 5,
      }, 0);

    button.addEventListener('mouseenter', () => tl.play());
    button.addEventListener('mouseleave', () => tl.reverse());

    return () => {
      button.removeEventListener('mouseenter', () => tl.play());
      button.removeEventListener('mouseleave', () => tl.reverse());
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="group relative overflow-hidden bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:shadow-lg"
    >
      <div className="flex items-center justify-center">
        <span ref={textRef} className="mr-2">Schedule a Call</span>
        <Phone ref={iconRef} size={20} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </button>
  );
};

export default AnimatedButton;