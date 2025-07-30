import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Linkedin, Github, Instagram, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/yourusername",
      color: "hover:text-gray-800",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/yourusername",
      color: "hover:text-pink-600",
    },
    {
      name: "Contact",
      icon: Mail,
      href: "mailto:your.email@example.com",
      color: "hover:text-green-600",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-transparent backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              YourLogo
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                About
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
              <h1
                onClick={() => navigate("/projects")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Projects
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </h1>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Services
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className={`text-gray-600 ${link.color} transition-all duration-200 transform hover:scale-110`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur border-t border-gray-200/50 overflow-x-hidden">
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>

          {/* Mobile Social Links */}
          <div className="flex justify-center space-x-6 pt-4 pb-2 border-t border-gray-200/50">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className={`text-gray-600 ${link.color} transition-all duration-200 transform hover:scale-110`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
