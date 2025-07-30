import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const cards = [
  {
    title: "Ai-assisted",
    desc: "We craft digital experiences that resonate...",
    src: "/ai.png",
  },
  {
    title: "Gym web app",
    desc: "Scalable solutions for web and mobile...",
    src: "/gym.png",
  },
  {
    title: "Brand Design",
    desc: "Consistent and striking brand visuals...",
    src: "/i_service_card_3-removebg-preview.png",
  },
  {
    title: "Design Consulting",
    desc: "Expert advice for design decisions...",
    src: "/i_service_card_4.png",
  },
  {
    title: "Content Strategy",
    desc: "Structured, impactful content plans...",
    src: "/i_service_card_5.png",
  },
];

const backgrounds = [
  "from-[#0b0f2e] to-black",
  "from-blue-900 to-blue-700",
  "from-green-100 to-green-50",
  "from-sky-100 to-sky-50",
  "from-rose-100 to-rose-50",
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const buttonRef = useRef(null);
  const isInView = useInView(buttonRef, { once: true, margin: "-100px" });

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          const totalHeight = document.body.offsetHeight;

          setShowButton(scrollY + viewportHeight < totalHeight - 100);

          const index = Math.min(Math.floor(scrollY / 500), cards.length - 1);
          setActiveIndex(index);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`relative h-[400vh] w-full transition-colors duration-1000 ease-in-out bg-gradient-to-br ${backgrounds[activeIndex]}`}
    >
      {/* Blinking Stars Background */}
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            borderRadius: "50%",
            background: "white",
            opacity: Math.random() * 0.7 + 0.3,
            animation: `blinkStar 1.5s infinite ${Math.random()}s alternate`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      ))}
      {/* Screws at corners */}
      {[
        "top-0 left-0",
        "top-0 right-0",
        "bottom-0 left-0",
        "bottom-0 right-0",
      ].map((pos, i) => (
        <div key={i} className={`absolute ${pos} p-4`}>
          <div className="w-8 h-8 bg-gray-600 rounded-full rotate-45 fixed shadow-xl" />
        </div>
      ))}

      {/* Sticky Content */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row w-full justify-around items-center px-6 lg:px-12 space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Card Stack */}
          <div className="relative w-[300px] h-[420px]">
            {cards.map((card, i) => {
              const isActive = i === activeIndex;
              const offset = i - activeIndex;

              return (
                <div
                  key={i}
                  className={`absolute w-full h-full object-contain transition-all duration-700 ease-in-out cursor-pointer hover:scale-105 ${
                    isActive ? "shadow-xl" : "shadow-md"
                  }`}
                  style={{
                    zIndex: cards.length - i,
                    transform: `translateY(${offset * 20}px) rotate(${
                      isActive ? 0 : offset * 5
                    }deg) scale(${isActive ? 1 : 0.95})`,
                    opacity: isActive ? 1 : 0,
                    background: i === 0 ? "black" : "transparent",
                  }}
                >
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              );
            })}
          </div>

          {/* Right side animated text */}
          <div className="w-full lg:w-1/2 h-[200px] flex items-center justify-center text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.h2
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className={`text-4xl font-bold ${
                  activeIndex === 0 ? "text-white" : "text-black"
                }`}
              >
                {activeIndex === 0 ? (
                  <span className="shine-title relative inline-block">
                    {cards[activeIndex].title}
                    <span className="shine-effect absolute left-0 top-0 w-full h-full bg-gray-700" />
                  </span>
                ) : (
                  cards[activeIndex].title
                )}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Animated Button - stays inside this section */}
      <div
        ref={buttonRef}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full flex justify-center"
      >
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView && showButton
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent text-black px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 hover:text-white transition-all duration-300 border border-purple-700"
        >
          Our Services
        </motion.button>
      </div>
    </div>
  );
}
