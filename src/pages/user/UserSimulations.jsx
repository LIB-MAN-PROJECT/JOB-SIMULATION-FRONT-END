import { motion } from "framer-motion";
import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";

const mockSimulations = [
  {
    title: "Frontend Developer - Google",
    status: "Completed",
    progress: 100,
    duration: "3 hours",
    company: "Google",
    field: "Tech",
  },
  {
    title: "Marketing Strategist - Unilever",
    status: "In Progress",
    progress: 60,
    duration: "2 hours",
    company: "Unilever",
    field: "Marketing",
  },
  {
    title: "Financial Analyst - Deloitte",
    status: "In Progress",
    progress: 35,
    duration: "4 hours",
    company: "Deloitte",
    field: "Finance",
  },
];

const UserSimulations = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Your Simulations
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockSimulations.map((sim, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg border-t-4 border-orange-400 hover:border-teal-500 transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {sim.title}
                  </h3>
                  {sim.status === "Completed" ? (
                    <FaCheckCircle className="text-green-500 text-xl" />
                  ) : (
                    <FaPlayCircle className="text-orange-400 text-xl" />
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4">{sim.company} • {sim.field}</p>

                <div className="text-xs text-gray-600 mb-2">
                  Duration: {sim.duration}
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      sim.progress === 100
                        ? "bg-green-500"
                        : "bg-gradient-to-r from-teal-400 to-orange-400"
                    }`}
                    style={{ width: `${sim.progress}%` }}
                  ></div>
                </div>

                <p className="text-xs text-gray-500">
                  {sim.status} – {sim.progress}% complete
                </p>
              </div>

              <div className="text-right mt-6">
                <button className="text-sm font-semibold text-orange-500 hover:underline">
                  {sim.status === "Completed" ? "View Certificate" : "Continue"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default UserSimulations;
