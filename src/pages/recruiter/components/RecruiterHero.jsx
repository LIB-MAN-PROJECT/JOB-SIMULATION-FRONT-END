import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaUserTie, FaChartLine, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecruiterDashboard = () => {
  return (
    <section className="bg-[#f9f4ee] min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Supercharge Your Hiring with <br />
            <span className=" text-teal-600">
              CareerLaunch
            </span>
          </h1>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Discover top talent, run real-time simulations, and connect with
            future leaders — all in one smart hiring platform.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <FaBriefcase className="text-4xl text-teal-500 mb-4" />,
              title: "Post Internships & Jobs",
              desc: "Easily create and manage job listings tailored to early career professionals.",
            },
            {
              icon: <FaUserTie className="text-4xl text-orange-500 mb-4" />,
              title: "Review Simulations",
              desc: "Access completed job simulations to evaluate real skills, not just resumes.",
            },
            {
              icon: <FaChartLine className="text-4xl text-teal-600 mb-4" />,
              title: "Track Candidate Progress",
              desc: "Monitor simulation completion, feedback, and engagement metrics in real time.",
            },
            {
              icon: <FaGlobe className="text-4xl text-orange-400 mb-4" />,
              title: "Connect Globally",
              desc: "Reach verified students and early professionals across multiple regions.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-100"
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-2 text-slate-800">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center bg-gradient-to-r from-teal-500 to-orange-500 py-14 px-6 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Start Hiring Smarter
          </h2>
          <p className="text-white text-md mb-6">
            Tap into a pipeline of job-ready talent today.
          </p>
          <Link
            to="/sign-up"
            className="inline-block bg-white text-teal-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
          >
            Create Recruiter Account
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruiterDashboard;
