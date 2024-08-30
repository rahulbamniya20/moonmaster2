
// import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
// import Spline from '@splinetool/react-spline';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import gsap from 'gsap';
// import { TextPlugin } from 'gsap/TextPlugin';
// import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

// // Register the TextPlugin
// gsap.registerPlugin(TextPlugin);

// const AboutUs = () => {
//   const headingRef = useRef(null);
//   const contentRef = useRef(null);
//   const animationRef = useRef(null);
//   const roughNotationRef = useRef(null);
//   const [showRoughNotation, setShowRoughNotation] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: contentRef,
//     offset: ["start end", "end start"]
//   });

//   const phrases = useMemo(() => [
//     "About MoonMaster",
//     "Launching Dreams",
//     "Crafting Memes",
//     "Building Futures"
//   ], []);

//   const animateText = useCallback(() => {
//     if (animationRef.current) animationRef.current.kill();

//     const tl = gsap.timeline({ repeat: -1 });
//     animationRef.current = tl;

//     phrases.forEach((phrase) => {
//       tl.to(headingRef.current, {
//         duration: 1,
//         text: phrase,
//         ease: "power4.out",
//       })
//       .to({}, { duration: 3 }); // Pause for 3 seconds before next phrase
//     });
//   }, [phrases]);

//   useEffect(() => {
//     animateText();
//     return () => {
//       if (animationRef.current) animationRef.current.kill();
//     };
//   }, [animateText]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShowRoughNotation(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (roughNotationRef.current) {
//       observer.observe(roughNotationRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   };

//   const stagger = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         mass: 0.75
//       }
//     },
//     hover: { 
//       scale: 1.05,
//       boxShadow: '0 0 30px rgba(139,92,246,0.5)',
//       transition: { 
//         type: "spring",
//         stiffness: 400,
//         damping: 10
//       }
//     },
//     tap: { scale: 0.95 }
//   };

//   const iconVariants = {
//     hidden: { scale: 0 },
//     visible: { 
//       scale: 1,
//       transition: { 
//         type: "spring",
//         stiffness: 500,
//         delay: 0.2
//       }
//     }
//   };

//   const cardInfo = [
//     { 
//       title: 'Global Influence', 
//       description: "Our network spans across continents, ensuring your meme coin gets worldwide exposure.",
//       icon: '🌍'
//     },
//     { 
//       title: 'Meme Mastery', 
//       description: "We don't just understand memes; we breathe them. Our strategies are fine-tuned for virality.",
//       icon: '🚀'
//     },
//     { 
//       title: 'Web3 Native', 
//       description: "Born in the blockchain, we navigate the complexities of Web3 with ease and expertise.",
//       icon: '🔗'
//     }
//   ];

//   return (
//     <section className="relative min-h-screen bg-[#0f0529] text-white font-inter overflow-hidden">
//       <motion.div 
//         className="relative z-20 container mx-auto px-4 py-20"
//         initial="initial"
//         animate="animate"
//         variants={stagger}
//         ref={contentRef}
//       >
//         <motion.h1 
//           ref={headingRef}
//           className="text-4xl text-purple-400 font-bold mb-12 text-center"
//           variants={fadeInUp}
//           whileHover={{ scale: 1.05 }}
//         >
//           About MoonMaster
//         </motion.h1>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div className="space-y-6" variants={fadeInUp} ref={roughNotationRef}>
//             <RoughNotationGroup show={showRoughNotation}>
//               <p className="text-xl leading-relaxed">
//                 At <RoughNotation type="highlight" color="rgba(239, 68, 68, 0.2)">MoonMaster</RoughNotation>, we're not just another crypto marketing team. We're
//                 a <RoughNotation type="underline" color="#60A5FA">constellation</RoughNotation> of top Crypto KOLs, united by our passion for
//                 launching meme coins into the <RoughNotation type="circle" color="#FBBF24">stratosphere</RoughNotation> of success.
//               </p>
//               <p className="text-xl leading-relaxed">
//                 Founded by <RoughNotation type="box" color="#8B5CF6">industry-leading</RoughNotation> Key Opinion Leaders, we bring
//                 unparalleled expertise and influence to every project we touch.
//                 Our mission? To guide your <RoughNotation type="highlight" color="rgba(16, 185, 129, 0.2)">meme coin</RoughNotation> through the vast crypto
//                 universe and land it safely on the <RoughNotation type="underline" color="#F59E0B">moon</RoughNotation>.
//               </p>
//             </RoughNotationGroup>
//           </motion.div>

//           <motion.div 
//             className="relative h-80 md:h-full min-h-[400px]"
//             variants={fadeInUp}
//           >
//             <div className="absolute inset-0 pointer-events-none">
//               <Spline scene="https://prod.spline.design/LwX1NK-f5Or9ovwY/scene.splinecode" className='scale[4]' />
//             </div>
//           </motion.div>
//         </div>

//         <motion.div className="mt-20 text-center" variants={fadeInUp}>
//           <motion.h2 
//             className="text-4xl font-semibold mb-12 text-purple-400"
//             variants={fadeInUp}
//             whileHover={{ scale: 1.05 }}
//           >
//             Why Choose MoonMaster?
//           </motion.h2>
//           <motion.div className="grid md:grid-cols-3 gap-8" variants={stagger}>
//             {cardInfo.map((card, index) => (
//               <motion.div 
//                 key={index}
//                 className="relative overflow-hidden rounded-lg p-6 bg-gradient-to-br from-purple-800 to-indigo-900 shadow-lg"
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate="visible"
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 <motion.div 
//                   className="absolute top-2 right-2 text-4xl"
//                   variants={iconVariants}
//                 >
//                   {card.icon}
//                 </motion.div>
//                 <h3 className="text-2xl font-semibold mb-4 relative z-10">{card.title}</h3>
//                 <p className="relative z-10 text-purple-200">
//                   {card.description}
//                 </p>
//                 <motion.div 
//                   className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ delay: 0.5, duration: 0.5 }}
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         <motion.div 
//           className="mt-20 text-center"
//           variants={fadeInUp}
//         >
//           <motion.button 
//             className="bg-gradient-to-r from-purple-600 to-[#33069d] text-white px-8 py-3 rounded-md text-xl font-semibold hover:from-[#33069d] hover:to-purple-600 ease-in-out transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             animate={{
//               boxShadow: [
//                 "0 0 0 0 rgba(169, 130, 255, 2)",
//                 "0 0 0 10px rgba(167, 139, 250, 0.1)",
//                 "0 0 0 20px rgba(167, 139, 250, 0.05)",
//                 "0 0 0 30px rgba(167, 139, 250, 0)",
//               ],
//             }}
//             transition={{
//               boxShadow: {
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               },
//             }}
//           >
//             Launch Your Meme Coin With Us
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default AboutUs;

import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

const Card = ({ title, description, icon }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx = -particle.dx;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy = -particle.dy;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    drawParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg p-6 bg-gradient-to-br from-purple-900 to-indigo-900 shadow-lg"
      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}
      whileTap={{ scale: 0.95 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold mb-4 text-purple-300">{title}</h3>
        <p className="text-purple-100">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500" />
    </motion.div>
  );
};

const AboutUs = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const roughNotationRef = useRef(null);
  const canvasRef = useRef(null);
  const [showRoughNotation, setShowRoughNotation] = useState(false);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"]
  });

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx = -particle.dx;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy = -particle.dy;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
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

  const cardInfo = [
    { 
      title: 'Global Influence', 
      description: "Our network spans across continents, ensuring your meme coin gets worldwide exposure.",
      icon: '🌍'
    },
    { 
      title: 'Meme Mastery', 
      description: "We don't just understand memes; we breathe them. Our strategies are fine-tuned for virality.",
      icon: '🚀'
    },
    { 
      title: 'Web3 Native', 
      description: "Born in the blockchain, we navigate the complexities of Web3 with ease and expertise.",
      icon: '🔗'
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0529] via-[#1a0b3b] to-[#33069d] text-white font-inter">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <motion.div 
        className="relative z-10 container mx-auto px-4 py-20"
        initial="initial"
        animate="animate"
        variants={stagger}
        ref={contentRef}
      >
        <motion.h1 
          ref={headingRef}
          className="text-4xl text-purple-400 font-bold mb-12 text-center"
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
            {cardInfo.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          variants={fadeInUp}
        >
          <motion.button 
            className="bg-gradient-to-r from-purple-600 to-[#33069d] text-white px-6 py-2 rounded-md text-lg font-normal hover:from-[#33069d] hover:to-purple-600 ease-in-out transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(169, 130, 255, 2)",
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