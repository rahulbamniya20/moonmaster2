import React from 'react';
import { Facebook, Linkedin, Github, Send, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden bg-[url('/path-to-your-cosmic-background.jpg')] bg-cover bg-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[#0b0b1f]"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-400 bg-clip-text">
            MoonMaster
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-purple-400 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            <Send className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        {/* Navigation Links and Contact Us Button */}
        <div className="flex flex-wrap justify-center items-center mb-8">
          <nav className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Careers</a>
            <a href="#" className="hover:text-purple-400 transition-colors">FAQs</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Teams</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
          </nav>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 ml-6">
            Contact Us
          </button>
        </div>

        {/* Horizontal Line */}
        <hr className="w-full border-t border-white opacity-20 mb-6" />

        {/* Copyright */}
        <p className="text-center text-sm opacity-60">
          © 2024 MoonMaster. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;