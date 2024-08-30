// import React from 'react';
// import { Facebook, Linkedin, Github, Send, Instagram, Twitter } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="relative text-white overflow-hidden bg-[url('/path-to-your-cosmic-background.jpg')] bg-cover bg-center">
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-[#0b0b1f]"></div>
      
//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center">
//         {/* Logo */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-purple-400 bg-clip-text">
//             MoonMaster
//           </h2>
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center space-x-6 mb-8">
//           <a href="#" className="hover:text-purple-400 transition-colors">
//             <Facebook className="w-6 h-6" />
//           </a>
//           <a href="#" className="hover:text-purple-400 transition-colors">
//             <Linkedin className="w-6 h-6" />
//           </a>
//           <a href="#" className="hover:text-purple-400 transition-colors">
//             <Github className="w-6 h-6" />
//           </a>
//           <a href="#" className="hover:text-purple-400 transition-colors">
//             <Send className="w-6 h-6" />
//           </a>
//           <a href="#" className="hover:text-purple-400 transition-colors">
//             <Instagram className="w-6 h-6" />
//           </a>
//           <a href="#" className="hover:text-purple-400 transition-colors">
//             <Twitter className="w-6 h-6" />
//           </a>
//         </div>

//         {/* Navigation Links and Contact Us Button */}
//         <div className="flex flex-wrap justify-center items-center mb-8">
//           <nav className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
//             <a href="#" className="hover:text-purple-400 transition-colors">About</a>
//             <a href="#" className="hover:text-purple-400 transition-colors">Careers</a>
//             <a href="#" className="hover:text-purple-400 transition-colors">FAQs</a>
//             <a href="#" className="hover:text-purple-400 transition-colors">Teams</a>
//             <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
//           </nav>
//           <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 ml-6">
//             Contact Us
//           </button>
//         </div>

//         {/* Horizontal Line */}
//         <hr className="w-full border-t border-white opacity-20 mb-6" />

//         {/* Copyright */}
//         <p className="text-center text-sm opacity-60">
//           © 2024 MoonMaster. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Facebook, Linkedin, Github, Send, Instagram, Twitter } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Footer = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <footer className="relative text-white overflow-hidden">
      <style jsx>{`
        @keyframes move-twink-back {
          from {background-position:0 0;}
          to {background-position:-10000px 5000px;}
        }

        .stars, .twinkling {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        .stars {
          background: #000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
          z-index: 0;
        }

        .twinkling {
          background: transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
          z-index: 1;
          animation: move-twink-back 200s linear infinite;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent, #000033, #1a1a3a);
          opacity: 0.7;
          z-index: 2;
        }

        .content {
          position: relative;
          z-index: 3;
        }

        .hover-glow:hover {
          text-shadow: 0 0 8px rgba(168, 85, 247, 0.6);
        }
      `}</style>

      {/* Particle background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "#000033",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      
      {/* Animated stars */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      
      {/* Gradient overlay */}
      <div className="gradient-overlay"></div>
      
      {/* Content */}
      <div className="content container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">MoonMaster</h3>
            <p className="mb-4 text-sm">Building the strongest communities for the most powerful crypto pumps!</p>
            <div className="flex space-x-4">
              <a href="#" className="hover-glow"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover-glow"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover-glow"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover-glow"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover-glow">Community Building</a></li>
              <li><a href="#" className="hover-glow">Meme Coin Marketing</a></li>
              <li><a href="#" className="hover-glow">Influencer Partnerships</a></li>
              <li><a href="#" className="hover-glow">Token Launch Support</a></li>
              <li><a href="#" className="hover-glow">Crypto Education</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover-glow">About Us</a></li>
              <li><a href="#" className="hover-glow">Team</a></li>
              <li><a href="#" className="hover-glow">Careers</a></li>
              <li><a href="#" className="hover-glow">Press</a></li>
              <li><a href="#" className="hover-glow">Partners</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover-glow">Blog</a></li>
              <li><a href="#" className="hover-glow">Whitepaper</a></li>
              <li><a href="#" className="hover-glow">FAQs</a></li>
              <li><a href="#" className="hover-glow">Support</a></li>
              <li><a href="#" className="hover-glow">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12">
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white bg-opacity-10 px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-400 flex-grow"
            />
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-r-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-white opacity-20 mb-8" />

        {/* Copyright and Additional Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-60 mb-4 md:mb-0">
            © 2024 MoonMaster. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover-glow">Terms of Service</a>
            <a href="#" className="hover-glow">Privacy Policy</a>
            <a href="#" className="hover-glow">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;