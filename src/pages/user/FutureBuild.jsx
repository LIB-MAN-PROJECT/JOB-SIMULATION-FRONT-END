import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const FutureBuild = () => {
  return (
    <section className="bg-[#f9f4ee] py-24 px-6 relative overflow-hidden">
      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping" />
        <div className="absolute bottom-10 right-20 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-white/40 rounded-full animate-ping" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#050c2a] rounded-3xl border border-white/10 shadow-xl px-10 py-16 text-center text-white relative overflow-hidden"
        >
          {/* Pulsing Gradient Ball */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-green-400 to-orange-500 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4 tracking-tight">
              Ready to Build Your{" "}
              <span className="bg-gradient-to-r from-green-400 to-orange-400 text-transparent bg-clip-text">
                Future
              </span>
              ?
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join a growing platform where skills meet opportunity. Simulate. Showcase. Get hired.
            </p>

            <Link to="/sign-up">
              <button className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12l-3.75 5.25M3 12h18" />
                </svg>
              </button>
            </Link>

            {/* Trust line */}
            <p className="mt-6 text-xs text-gray-400">
              Trusted by students, recruiters, and career platforms across Africa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureBuild;
