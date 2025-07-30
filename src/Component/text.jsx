import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Use local Super Kindly font from public folder

const AnimatedTextDiv = () => {
  const [x, setX] = useState(0);
  const [showSecond, setShowSecond] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setX(20); // Move to 60vw
    }, 500);
  }, []);

  // Show second div after first motion completes (7s duration)

  return (
    <>
      {/* font-face is now in index.css, no need for <style> here */}
      <motion.div
        className="relative w-[90vw] max-w-[600px] h-[40vh] md:w-[600px] md:h-[350px] text-white drop-shadow-lg flex flex-col justify-center items-center mt-1"
        style={{ fontFamily: "Super Kindly, sans-serif", top: "5vh" }}
        initial={{ opacity: 1, x: -750 }}
        animate={{ opacity: 1, x: x + "vw" }}
        transition={{ duration: 6, ease: "easeInOut" }}
        onAnimationComplete={() => setShowSecond(true)}
      >
        <h1 className="text-6xl font-bold">
          <span className="text-black animate-[popup_0.7s_ease-in-out_forwards]">
            Hi
          </span>
          , I am Danish Khan
        </h1>
        <h2 className="text-3xl">
          I develop modern user interfaces and web applications
        </h2>
      </motion.div>
      {showSecond && (
        <motion.div
          className="w-[100vh] h-[40vh] bg-transparent text-gray-300 absolute left-75 top-80 z-20 mt-8"
          style={{ fontFamily: "Super Kindly, sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <h2 className="text-xl">
            'm a skilled website developer with experience in JavaScript, and
            expertise in frameworks React, Node.js, and Three.js. I'm a quick
            learner and collaborate closely with clients to create efficient,
            scalable, and user-friendly solutions that solve real-world
            problems. Let's work together to bring your ideas to fruition.
          </h2>
        </motion.div>
      )}
    </>
  );
};

const Text = () => {
  return (
    <>
      <AnimatedTextDiv />
    </>
  );
};

export default Text;
