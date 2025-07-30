import React from "react";
import { useNavigate } from "react-router-dom";
import SplashCursor from "./SplashCursor";

const Overview = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-black via-black via-black via-black to-gray-900 h-screen w-full  relative overflow-hidden">
      <SplashCursor />
      <h1 className="text-4xl font-bold text-center mt-10">Overview</h1>
      <>
        <p
          className="text-xl text-gray-300 max-w-2xl mx-auto mt-6 px-4 flex absolute left-150 transform -translate-x-1/2"
          style={{ fontFamily: "Super Kindly, sans-serif" }}
        >
          I am currently pursuing my B.Tech in Cyber Security from Sagar
          Institute of Research and Technology (SIRT), batch 2023-2027. With a
          strong interest in technology and programming, I have built a solid
          foundation in computer science. I began my coding journey by learning
          the C language at Sheriyans Coding School, which helped me grasp the
          fundamentals of programming. Currently, I am focused on Web
          Development, where I have successfully completed the Frontend part,
          working with technologies like HTML, CSS, JavaScript, and modern
          frameworks like React.js. Now, I am in the Backend Development phase,
          where I am enhancing my skills in building scalable server-side
          applications, working with tools like Node.js, Express, MongoDB, and
          RESTful APIs. I am passionate about building secure and efficient
          applications and continuously strive to improve and learn new
          technologies in the field of cybersecurity and web development.
        </p>
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
