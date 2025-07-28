import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage1 from "../../../assets/hero1.png"; 
import heroImage2 from "../../../assets/hero2.png"; 

const Hero = () => {
  return (
    <section className="bg-[#f9f4ee] min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 leading-snug">
            Explore job simulations from real companies,
            <br className="hidden sm:block" />
            build hands-on skills ,all in one platform.
          </h1>

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-6 pt-2">
            {/* Employers Button */}
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs uppercase text-gray-500 font-medium">Employers</p>
              <Link to="/simulations">
                <button className="group flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition w-full sm:w-auto">
                  Browse Simulations
                  <svg
                    className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Educators Button */}
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs uppercase text-gray-500 font-medium">Educators</p>
              <Link to="/how-it-works">
                <button className="group flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-md border border-teal-500 hover:bg-teal-50 transition w-full sm:w-auto">
                  How it works
                  <svg
                    className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <div className="relative flex justify-center lg:justify-end gap-4 sm:gap-6">
          <motion.img
            src={heroImage1}
            alt="Working on laptop"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-40 sm:w-48 lg:w-56 h-[300px] sm:h-[340px] lg:h-[360px] object-cover rounded-lg shadow-lg"
          />
          <motion.img
            src={heroImage2}
            alt="Working from home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="w-40 sm:w-48 lg:w-56 h-[300px] sm:h-[340px] lg:h-[360px] object-cover rounded-lg shadow-lg mt-6 sm:mt-8 lg:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
