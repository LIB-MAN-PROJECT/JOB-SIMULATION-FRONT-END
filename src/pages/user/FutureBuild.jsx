import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const FutureBuild = () => {
  return (
    <section className="bg-[#f9f4ee] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#050c2a] rounded-3xl border border-white/10 shadow-xl px-10 py-16 text-center text-white relative overflow-hidden"
        >
          {/* Glowing Background Gradient Element */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-green-400 to-orange-500 opacity-30 rounded-full blur-3xl z-0"></div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4">
              Ready to Build Your{" "}
              <span className="bg-gradient-to-r from-green-400 to-orange-400 text-transparent bg-clip-text">
                Future
              </span>
              ?
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Join a growing platform where skills meet opportunity. Simulate. Showcase. Get hired.
            </p>
            <Link to="/sign-up">
              <button className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12l-3.75 5.25M3 12h18" />
                </svg>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureBuild;
