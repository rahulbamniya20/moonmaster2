import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation';
import Navbar from './Navbar';
import { RoughNotation } from "react-rough-notation";

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
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                repeat={Infinity}
              />
              <span className="block leading-normal">To The Moon?</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg mb-8"
          >
            We are a Web3-native{" "}
            KOL marketing team, led by{" "}
            <RoughNotation type="box" color="#8B5CF6">KOLs from around the globe</RoughNotation>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5c22da] text-white px-6 py-3 rounded-md font-medium hover:bg-purple-600 transition-colors flex items-center space-x-2"
          >
            Schedule a Call
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
