import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import heroImage1 from "../../../assets/hero-students.jpg";
import heroImage2 from "../../../assets/internship.jpeg";
import heroImage3 from "../../../assets/mentorship.jpeg";

const images = [heroImage1, heroImage2, heroImage3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section className="bg-black text-white pt-24 pb-16 px-6 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Launch Your{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Career
            </span>{" "}
            with <br className="hidden md:block" />
            Real-World{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Simulations
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-xl">
            Explore tasks from top companies, earn{" "}
            <span className="text-purple-400 font-medium">verifiable certificates</span>, and apply
            for <span className="text-blue-400 font-medium">real internships</span> — all in one place.
          </p>

          <div>
            <Link to="/simulations">
              <button className="mt-4 px-6 py-3 text-sm md:text-base font-semibold bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-md shadow-lg hover:shadow-purple-800/50 transition-all duration-300">
                Start Exploring
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 overflow-hidden rounded-xl shadow-lg group max-w-xl">
          <img
            src={images[currentImageIndex]}
            alt="Students working"
            className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
