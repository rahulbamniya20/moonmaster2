import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-[#0B0B1F] text-white overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vt6YrQRpiTpifTWv/scene.splinecode" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />
        {/* Main content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-purple-300 mb-6 text-sm tracking-wider"
          >
            Founded by Top Crypto KOLs
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4">
              <span className="block">Ready To Take Your</span>
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
                className="text-[#B57BFF]"
                repeat={Infinity}
              />
              <span className="block">To The Moon?</span>
            </h1>
          </motion.div>

          <RoughNotationGroup show={true}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg mb-8"
            >
              We are a{" "}
              <RoughNotation type="underline" strokeWidth={3} padding={2} iterations={2} animationDuration={1500} color="#7C3AED">
                <span className="text-white px-1">Web3-native</span>
              </RoughNotation>{" "}
              KOL marketing team, led by{" "}
              <RoughNotation type="bracket" brackets={['left', 'right']} strokeWidth={3} padding={6} color="#DB2777">
                <span className="text-white px-1">KOLs from around the globe</span>
              </RoughNotation>
            </motion.p>
          </RoughNotationGroup>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#8B5CF6] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#7C3AED] transition-colors"
          >
            Schedule a Call
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
