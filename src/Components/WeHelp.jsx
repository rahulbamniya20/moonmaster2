// import React from 'react';
// import { motion } from 'framer-motion';
// import { VisibilityOutlined, GroupsOutlined, DescriptionOutlined, AnalyticsOutlined, SpaOutlined } from '@mui/icons-material';

// const ServiceItem = ({ Icon, title, description }) => (
//   <motion.div 
//     className="flex flex-col items-center text-center p-6 bg-opacity-20 bg-white backdrop-blur-sm rounded-xl h-full"
//     whileHover={{ scale: 1.03 }}
//     transition={{ type: "spring", stiffness: 300 }}
//   >
//     <div className="mb-4 bg-purple-700 p-3 rounded-full">
//       <Icon className="text-purple-200 text-3xl" />
//     </div>
//     <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
//     <p className="text-purple-100 text-base leading-relaxed">{description}</p>
//   </motion.div>
// );

// const WeHelp = () => {
//   const services = [
//     {
//       Icon: VisibilityOutlined,
//       title: "Laser-focused KOL Selection",
//       description: "Find perfect influencers for your brand"
//     },
//     {
//       Icon: GroupsOutlined,
//       title: "A to Z Campaign Management",
//       description: "Full oversight from concept to completion"
//     },
//     {
//       Icon: DescriptionOutlined,
//       title: "Expert Content Support",
//       description: "Craft compelling stories for your audience"
//     },
//     {
//       Icon: AnalyticsOutlined,
//       title: "Content Tracking & Analysis",
//       description: "Maximize impact with data-driven insights"
//     },
//     {
//       Icon: VisibilityOutlined,
//       title: "Strategic Partnerships",
//       description: "Build lasting influencer relationships"
//     },
//     {
//       Icon: SpaOutlined,
//       title: "Exclusive Perks & Benefits",
//       description: "Unique advantages for your campaigns"
//     }
//   ];

//   return (
//     <div className="bg-[#221372] min-h-screen flex items-center py-10 px-4">
//       <div className="max-w-6xl mx-auto w-full">
//         {/* <motion.h3 
//           className="text-2xl md:text-5xl text-center font-medium text-purple-400"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           We like keeping things simple
//         </motion.h3> */}
//         <motion.h3 
//           className="text-3xl md:text-3xl text-center font-semibold text-purple-300 mb-8"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//          We like keeping things   <span
//          className="text-2xl md:text-3xl text-center font-semibold rounded-md p-2 pt-0 pb-0 bg-purple-600 text-purple-300 mb-8"
//          >SIMPLE</span> we help you with
//          <span></span>
//         </motion.h3>
//         <motion.div 
//           className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-6 md:p-8 shadow-2xl"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 * index }}
//               >
//                 <ServiceItem {...service} />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default WeHelp;

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, FileText, BarChart2, Target, Gift } from 'lucide-react';

const AnimatedBackground = () => (
  <div className="animated-background">
    {[...Array(50)].map((_, i) => (
      <div key={i} className="star" style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`
      }}></div>
    ))}
  </div>
);

const ServiceItem = ({ Icon, title, description, color, number }) => (
  <motion.div 
    className="mb-8 relative w-full max-w-3xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={`flex items-stretch overflow-hidden shadow-lg rounded-l-full ${color} h-24`}>
      <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-white rounded-full -ml-3 shadow-md z-10">
        <span className={`text-3xl font-bold ${color.replace('bg-', 'text-')}`}>{number}</span>
      </div>
      <div className="flex-grow p-4 pl-6 pr-12 clip-arrow flex items-center">
        <div className="mr-4 bg-white bg-opacity-20 p-2 rounded-full">
          <Icon className="text-white" size={24} />
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const WeHelp = () => {
  const services = [
    {
      Icon: Eye,
      title: "Laser-focused KOL Selection",
      description: "Find perfect influencers for your brand",
      color: "bg-orange-800"
    },
    {
      Icon: Users,
      title: "A to Z Campaign Management",
      description: "Full oversight from concept to completion",
      color: "bg-blue-800"
    },
    {
      Icon: FileText,
      title: "Expert Content Support",
      description: "Craft compelling stories for your audience",
      color: "bg-purple-800"
    },
    {
      Icon: BarChart2,
      title: "Content Tracking & Analysis",
      description: "Maximize impact with data-driven insights",
      color: "bg-pink-800"
    },
    {
      Icon: Target,
      title: "Strategic Partnerships",
      description: "Build lasting influencer relationships",
      color: "bg-green-800"
    },
    {
      Icon: Gift,
      title: "Exclusive Perks & Benefits",
      description: "Unique advantages for your campaigns",
      color: "bg-yellow-800"
    }
  ];

  return (
    <div className="relative bg-[#0f0529] min-h-screen flex items-center py-20 px-4 overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto w-full z-10">
        <motion.h2 
          className="text-3xl md:text-4xl text-center font-bold text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We like keeping things <span className="bg-purple-600 text-white px-2 py-1 rounded">SIMPLE</span> we help you with
        </motion.h2>
        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} number={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeHelp;

<style jsx global>{`
  .animated-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
  }
  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    animation: twinkle linear infinite;
  }
  @keyframes twinkle {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
  .clip-arrow {
    clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%);
  }
`}</style>