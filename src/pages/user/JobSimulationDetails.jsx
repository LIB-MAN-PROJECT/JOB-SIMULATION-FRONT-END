import { useParams, useNavigate } from "react-router";
import K from "../../constants";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const JobSimulationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = K.JOBSIMULATIONS.find((j) => j._id === id);

  if (!job) {
    return (
      <div className="pt-24 px-4 text-center min-h-screen bg-black text-white">
        <h2 className="text-xl font-semibold text-red-500">
          Job Simulation not found.
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-teal-400 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f4ee]">
      {/* Hero Section */}
      <div className="relative w-full h-[85vh]">
        <img
          src={job.imageUrl}
          alt={job.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-6 pt-32 pb-10 text-white">
          <motion.div
            {...fadeInUp}
            className="flex flex-col sm:flex-row justify-between items-start gap-6"
          >
            {/* Job Info */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight leading-snug">
                {job.title}
              </h1>
              <p className="mt-3 text-lg text-white/80">{job.companyName}</p>
              <p className="mt-4 text-gray-300 max-w-xl">{job.description}</p>
              <div className="mt-4 text-sm space-x-4 text-gray-300">
                <span>{job.field}</span> • <span>{job.level}</span> •{" "}
                <span>{job.duration} hrs</span>
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              {...fadeInUp}
              className="bg-white text-slate-900 p-6 rounded-2xl shadow-xl w-full sm:w-[320px] border border-teal-100"
            >
              {job.isHiring && (
                <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 text-xs font-semibold rounded-full mb-2">
                  HIRING OPPORTUNITY
                </span>
              )}
              <h3 className="text-lg font-bold mb-2">Launch Your Career</h3>
              <ul className="text-sm text-gray-700 mb-4 space-y-2">
                <li>🚀 Experience real work in {job.duration} hrs, at your pace.</li>
                <li>🎯 Stand out to recruiters at <strong>{job.companyName}</strong>.</li>
                <li>💼 Add this to your resume or LinkedIn.</li>
              </ul>
              <button className="w-full bg-gradient-to-r from-teal-500 to-teal-700 text-white py-2 rounded-md hover:shadow-lg hover:scale-105 transition font-semibold">
                Start Free Simulation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-12 space-y-16 pb-24">
        {/* Overview */}
        <motion.section {...fadeInUp}>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-sm text-gray-700 leading-relaxed">
            {job.overview}
          </div>
        </motion.section>

        {/* Tasks */}
        {job.tasks?.length > 0 && (
          <motion.section {...fadeInUp}>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Mission</h2>
            <ul className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-sm list-disc pl-6 space-y-2 text-gray-700">
              {job.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* How It Works */}
        <motion.section {...fadeInUp} className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl shadow-md border border-teal-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-800">
            {[
              {
                step: "1",
                title: "Explore & Enroll",
                desc: "Browse simulations that match your interests. It’s free.",
              },
              {
                step: "2",
                title: "Complete at Your Pace",
                desc: "Work through real-world tasks without deadlines.",
              },
              {
                step: "3",
                title: "Showcase Your Growth",
                desc: "Display your certificate and stand out to employers.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: 0.2 * index, duration: 0.6, ease: "easeOut" }}
              >
                <div className="text-3xl text-teal-600 font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default JobSimulationDetails;
