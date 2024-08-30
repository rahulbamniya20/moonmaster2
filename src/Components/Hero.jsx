import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Phone } from 'lucide-react';
import Navbar from './Navbar';

const Hero = () => {
  const [showAnnotation, setShowAnnotation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnnotation(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#0B0B1F] text-white overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/vt6YrQRpiTpifTWv/scene.splinecode" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4 mt-[8%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
              <span className="block leading-normal">Ready To Take Your</span>
              <TypeAnimation
                sequence={[
                  "Meme Coin",
                  2000,
                  "DeFi Project",
                  2000,
                  "NFT Collection",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                // className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                className="text-transparent bg-clip-text  bg-purple-500"
                repeat={Infinity}
              />
              <span className="block leading-normal">To The Moon?</span>
            </h1>
          </motion.div>

         
          <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg mb-8 relative z-20 flex flex-wrap items-center"
      >
        <span>We are a Web3-native KOL marketing team, led by</span>
        <span className="inline-block w-2 mr-1">{" "}  </span> {/* Forced space */}
        <RoughNotationGroup show={showAnnotation}>
          <RoughNotation type="box" color="#8B5CF6" strokeWidth={2} padding={[2, 4]}>
            <span className="relative z-30">KOLs from around the globe</span>
          </RoughNotation>
        </RoughNotationGroup>
      </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-normal text-white rounded-md group bg-gradient-to-r from-purple-600 to-[#33069d] hover:from-[#33069d] hover:to-purple-600 "
            >
              {/* <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0"></span> */}
              {/* <span className="absolute top-0 left-0 w-full bg-gradient-to-r from-transparent via-white to-transparent h-[2px] animate-shine"></span> */}
              {/* <span className="absolute bottom-0 right-0 w-full bg-gradient-to-r from-transparent via-white to-transparent h-[2px] animate-shine"></span> */}
              {/* <span className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent h-full animate-shine"></span> */}
              {/* <span className="absolute top-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent h-full animate-shine"></span> */}
              {/* <span className="absolute inset-0 w-full h-full border border-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span> */}
              {/* <span className="absolute inset-0 w-full h-full border border-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out animate-ping"></span> */}
              {/* <span className="relative flex items-center transition duration-300 ease-out group-hover:text-white"> */}
                Schedule a Call
                <motion.span
                  className="ml-2"
                  animate={{ rotate: [0, 20, 0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Phone className="w-5 h-5" />
                </motion.span>
              {/* </span> */}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
