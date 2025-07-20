import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa'; // Optional icon for a vibrant touch

const InternFuture = () => {
  return (
    <section className="bg-[#f9f4ee] py-20 px-6 text-slate-900">
      <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-white to-slate-50 border border-gray-200 rounded-2xl p-10 shadow-md hover:shadow-xl transition duration-300">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-4 text-teal-500 text-4xl">
            <FaRocket />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Ready for Your Next{" "}
            <span className="bg-gradient-to-r from-teal-500 to-orange-500 text-transparent bg-clip-text">
              Opportunity?
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Start building your future with practical experience. Explore openings designed to launch your career.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-gradient-to-r from-teal-500 to-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300"
          >
            View Internships
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default InternFuture;
