import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import K from "../../constants";

const AllJobSimulations = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-28 px-6 bg-[#f9f4ee] min-h-screen text-black">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center sm:text-left mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Step Into Your Future with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700 ml-2">
            Free Job Simulations
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Discover real-world tasks from top companies. Gain hands-on experience,
          boost your confidence, and get closer to landing your dream role.
        </p>
        <div className="mt-6 bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-2 text-sm sm:text-base">
          <h2 className="font-semibold text-gray-800">
            What is a Job Simulation?
          </h2>
          <p className="text-gray-600">
            It’s a virtual, self-paced experience that lets you try out tasks
            you'd do on the job — no commitment, no cost. Perfect for building
            skills, showcasing potential, and standing out to employers.
          </p>
        </div>
      </motion.div>

      {/* Grid of Job Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {K.JOBSIMULATIONS.map((job, index) => (
          <motion.div
            key={job._id}
            onClick={() => navigate(`/simulations/${job._id}`)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col border border-gray-100"
          >
            <img
              src={job.imageUrl}
              alt={job.title}
              className="w-full h-44 object-cover rounded-t-2xl"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                {job.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {job.description.slice(0, 90)}...
              </p>

              <div className="flex justify-between items-center text-sm mt-auto">
                <span className="text-gray-700 font-semibold">
                  {job.companyName}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium shadow-sm ${
                    job.isHiring ? "bg-teal-500" : "bg-gray-400"
                  } text-white`}
                >
                  {job.isHiring ? "Hiring" : "Not Hiring"}
                </span>
              </div>

              <div className="text-xs text-gray-500 flex justify-between mt-2">
                <span>{job.field}</span>
                <span>{job.level}</span>
                <span>{job.duration} hrs</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AllJobSimulations;
