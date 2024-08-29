/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// import React from 'react';
// import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
// import { VisibilityOutlined, GroupsOutlined, DescriptionOutlined, AnalyticsOutlined } from '@mui/icons-material';

// const ServiceItem = ({ Icon, title, description }) => (
//     <div className="flex items-start mb-8">
//       <div className="mr-4 mt-1 flex-shrink-0">
//         <Icon className="text-white text-3xl" />
//       </div>
//       <div>
//         <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-gray-400 text-sm">{description}</p>
//       </div>
//     </div>
//   );

// const WeHelp = () => {
//   return (
//     <div className="bg-[#0f0529] py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl text-center font-bold text-white mb-2">
//           We like keeping things simple
//         </h2>
//         <h3 className="text-3xl text-center font-semibold text-purple-400 mb-12">
//           We help you with
//         </h3>
//         <div className="bg-gradient-to-r from-[#150B30] to-[#5B39B8] rounded-3xl p-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <ServiceItem
//               Icon={VisibilityOutlined}
//               title="Laser-focused KOL Selection"
//               description="Pinpointing the perfect influencers for your brand's success"
//             />
//             <ServiceItem
//               Icon={GroupsOutlined}
//               title="A to Z KOLs Campaign management"
//               description="Comprehensive oversight from concept to completion"
//             />
//             <ServiceItem
//               Icon={DescriptionOutlined}
//               title="Experienced Copywriting & Content Support"
//               description="Crafting compelling narratives that resonate with your audience"
//             />
//             <ServiceItem
//               Icon={AnalyticsOutlined}
//               title="Content Tracking & Analysis"
//               description="Data-driven insights to maximize your campaign's impact"
//             />
//             <ServiceItem
//               Icon={VisibilityOutlined}
//               title="Laser-focused KOL Selection"
//               description="Pinpointing the perfect influencers for your brand's success"
//             />
//             <ServiceItem
//               Icon={SpaOutlinedIcon}
//               title="Some extra perks that you will get nowhere"
//               description="Unique benefits that set our service apart from the rest"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default WeHelp;

import React from 'react';
import { motion } from 'framer-motion';
import { VisibilityOutlined, GroupsOutlined, DescriptionOutlined, AnalyticsOutlined, SpaOutlined } from '@mui/icons-material';

const ServiceItem = ({ Icon, title, description }) => (
  <motion.div 
    className="flex flex-col items-center text-center p-6 bg-opacity-20 bg-white backdrop-blur-sm rounded-xl h-full"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="mb-4 bg-purple-700 p-3 rounded-full">
      <Icon className="text-purple-200 text-3xl" />
    </div>
    <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
    <p className="text-purple-100 text-base leading-relaxed">{description}</p>
  </motion.div>
);

const WeHelp = () => {
  const services = [
    {
      Icon: VisibilityOutlined,
      title: "Laser-focused KOL Selection",
      description: "Find perfect influencers for your brand"
    },
    {
      Icon: GroupsOutlined,
      title: "A to Z Campaign Management",
      description: "Full oversight from concept to completion"
    },
    {
      Icon: DescriptionOutlined,
      title: "Expert Content Support",
      description: "Craft compelling stories for your audience"
    },
    {
      Icon: AnalyticsOutlined,
      title: "Content Tracking & Analysis",
      description: "Maximize impact with data-driven insights"
    },
    {
      Icon: VisibilityOutlined,
      title: "Strategic Partnerships",
      description: "Build lasting influencer relationships"
    },
    {
      Icon: SpaOutlined,
      title: "Exclusive Perks & Benefits",
      description: "Unique advantages for your campaigns"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0f0529] to-[#1a0b3d] min-h-screen flex items-center py-10 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* <motion.h3 
          className="text-2xl md:text-5xl text-center font-medium text-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We like keeping things simple
        </motion.h3> */}
        <motion.h3 
          className="text-3xl md:text-3xl text-center font-semibold text-purple-300 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
         We like keeping things   <span
         className="text-2xl md:text-3xl text-center font-semibold rounded-md p-2 pt-0 pb-0 bg-purple-600 text-purple-300 mb-8"
         >SIMPLE</span> we help you with
         <span></span>
        </motion.h3>
        <motion.div 
          className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-6 md:p-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ServiceItem {...service} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WeHelp;