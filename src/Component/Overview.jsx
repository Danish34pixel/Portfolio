import React from "react";
import { useNavigate } from "react-router-dom";
import SplashCursor from "./SplashCursor";

const Overview = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black via-black via-black to-gray-900 h-screen w-full  relative overflow-hidden">
      <SplashCursor />
      <h1 className="text-4xl font-bold text-center mt-10">Overview</h1>
      <>
        <h1></h1>
        <img
          className="w-130 h-90 mt-0 absolute right-18"
          src="/dk.png"
          alt=""
        />
      </>
      <button
        onClick={() => navigate("/projects")}
        className="bg-blue-500 text-white py-2 px-4 rounded absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:bg-blue-600 transition-colors duration-300"
      >
        Projects
      </button>
    </div>
  );
};

export default Overview;
