import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

const AboutUs = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const roughNotationRef = useRef(null);
  const [showRoughNotation, setShowRoughNotation] = useState(false);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const phrases = useMemo(() => [
    "About MoonMaster",
    "Launching Dreams",
    "Crafting Memes",
    "Building Futures"
  ], []);

  const animateText = useCallback(() => {
    if (animationRef.current) animationRef.current.kill();

    const tl = gsap.timeline({ repeat: -1 });
    animationRef.current = tl;

    phrases.forEach((phrase) => {
      tl.to(headingRef.current, {
        duration: 1,
        text: phrase,
        ease: "power4.out",
      })
      .to({}, { duration: 3 }); // Pause for 3 seconds before next phrase
    });
  }, [phrases]);

  useEffect(() => {
    animateText();
    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, [animateText]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowRoughNotation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (roughNotationRef.current) {
      observer.observe(roughNotationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0f0529] text-white font-inter overflow-hidden">
      <motion.div 
        className="relative z-20 container mx-auto px-4 py-20"
        initial="initial"
        animate="animate"
        variants={stagger}
        ref={contentRef}
      >
        <motion.h1 
          ref={headingRef}
          className="text-4xl text-purple-400 font-bold mb-12 text-center"
          style={{ opacity, scale }}
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          About MoonMaster
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" variants={fadeInUp} ref={roughNotationRef}>
            <RoughNotationGroup show={showRoughNotation}>
              <p className="text-xl leading-relaxed">
                At <RoughNotation type="highlight" color="rgba(239, 68, 68, 0.2)">MoonMaster</RoughNotation>, we're not just another crypto marketing team. We're
                a <RoughNotation type="underline" color="#60A5FA">constellation</RoughNotation> of top Crypto KOLs, united by our passion for
                launching meme coins into the <RoughNotation type="circle" color="#FBBF24">stratosphere</RoughNotation> of success.
              </p>
              <p className="text-xl leading-relaxed">
                Founded by <RoughNotation type="box" color="#8B5CF6">industry-leading</RoughNotation> Key Opinion Leaders, we bring
                unparalleled expertise and influence to every project we touch.
                Our mission? To guide your <RoughNotation type="highlight" color="rgba(16, 185, 129, 0.2)">meme coin</RoughNotation> through the vast crypto
                universe and land it safely on the <RoughNotation type="underline" color="#F59E0B">moon</RoughNotation>.
              </p>
            </RoughNotationGroup>
          </motion.div>

          <motion.div 
            className="relative h-80 md:h-full min-h-[400px]"
            variants={fadeInUp}
          >
            <div className="absolute inset-0 pointer-events-none">
              <Spline scene="https://prod.spline.design/LwX1NK-f5Or9ovwY/scene.splinecode" className='scale[4]' />
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-20 text-center" variants={fadeInUp}>
          <motion.h2 
            className="text-4xl font-semibold mb-12 text-purple-400"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            Why Choose MoonMaster?
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={stagger}>
            {['Global Influence', 'Meme Mastery', 'Web3 Native'].map((title, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden rounded-lg p-6 bg-purple-800 shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: '0 0 30px rgba(139,92,246,0.3)' }}
              >
                <h3 className="text-2xl font-semibold mb-4 relative z-10">{title}</h3>
                <p className="relative z-10">
                  {index === 0 && "Our network spans across continents, ensuring your meme coin gets worldwide exposure."}
                  {index === 1 && "We don't just understand memes; we breathe them. Our strategies are fine-tuned for virality."}
                  {index === 2 && "Born in the blockchain, we navigate the complexities of Web3 with ease and expertise."}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          variants={fadeInUp}
        >
          <motion.button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(167, 139, 250, 0)",
                "0 0 0 10px rgba(167, 139, 250, 0.1)",
                "0 0 0 20px rgba(167, 139, 250, 0.05)",
                "0 0 0 30px rgba(167, 139, 250, 0)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            Launch Your Meme Coin With Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;