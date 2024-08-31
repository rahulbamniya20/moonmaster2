import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { TrendingUp, Users, Rocket, DollarSign } from 'lucide-react';

const StatItem = ({ value, label, icon: Icon, animate }) => {
  const numValue = parseFloat(value.replace(/\D/g, ''));
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-purple-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-purple-300 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Icon size={36} />
      </motion.div>
      <div className="text-4xl font-bold text-white mb-2 text-center">
        <CountUp
          start={0}
          end={numValue}
          duration={2.5}
          separator=","
          prefix={value.startsWith('$') ? '$' : ''}
          suffix={value.endsWith('+') ? '+' : ''}
          useEasing={true}
          useGrouping={true}
          preserveValue={true}
          startOnMount={false}
          redraw={animate}
        >
          {({ countUpRef, start }) => (
            <span ref={countUpRef} onMouseEnter={animate ? start : undefined} />
          )}
        </CountUp>
      </div>
      <div className="text-sm text-purple-200 font-medium text-center">{label}</div>
    </motion.div>
  );
};

const OurNumbers = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  // bg-gradient-to-r from-[#2F58CD] via-[#4E31AA] to-[#3A1078]
  return (
    <div className=" bg-[#00005C] py-20 px-4" ref={sectionRef}>
      <motion.h2
        className="text-3xl md:text-4xl text-center font-bold text-purple-400 mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our Numbers Speaks for Themselves
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatItem value="$100M+" label="Total Volume" icon={DollarSign} animate={animate} />
        <StatItem value="100,000+" label="Token Holders" icon={Users} animate={animate} />
        <StatItem value="50+" label="Memecoin Launches" icon={Rocket} animate={animate} />
        <StatItem value="$100M+" label="Trading Volume" icon={TrendingUp} animate={animate} />
      </div>
    </div>
  );
};

export default OurNumbers;
