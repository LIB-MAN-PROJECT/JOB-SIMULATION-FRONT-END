import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import internImage from "../../assets/internship.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true },
};

const InternHero = () => {
  return (
    <section className="bg-[#f9f4ee] text-slate-900 pt-24 pb-20 px-6 md:px-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">
        
        {/* Text Content */}
        <motion.div {...fadeUp} className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Discover{" "}
            <span className="bg-gradient-to-r from-teal-500 to-teal-700 text-transparent bg-clip-text">
              Internships & Entry-Level Jobs
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-700 max-w-xl mx-auto md:mx-0">
            Explore real opportunities from trusted companies. Apply with
            confidence and track your progress — all in one place.
          </p>

          <div>
            <Link to="/internships">
              <button className="mt-4 px-6 py-3 text-sm md:text-base font-semibold bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                Browse Openings
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="flex-1 overflow-hidden rounded-xl shadow-xl group max-w-xl"
        >
          <img
            src={internImage}
            alt="Students working on laptops"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default InternHero;
