import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchSimulationById, enrollforSimulation } from "../../services/jobs";
import LoadingSpinner from "../../components/LoadingSpinner";
import VerifiedBadge from "../../components/VerificationBadge";
import { handleError } from "../../services/handleError";
import TaskAccordion from "./TaskAccordion";
import { HashLink } from "react-router-hash-link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const JobSimulationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // allow viewing simulation details without redirect, only restrict "Start Simulation"
      fetchSimulationById(id)
        .then((data) => setJob(data.data))
        .catch((err) => handleError(err))
        .finally(() => setLoading(false));
    } else {
      fetchSimulationById(id)
        .then((data) => setJob(data.data))
        .catch((err) => handleError(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const enroll = () => {
    enrollforSimulation(id)
      .then((data) => setHasStarted(true))
      .catch((err) => handleError(err))
      .finally(() => setLoading(false));
  };

  const handleStartSimulation = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", {
        state: { from: `/simulations/${id}` },
      });
      return;
    }
    enroll();
  };

  if (loading) {
    return (
      <div className="pt-24 flex justify-center items-center min-h-screen bg-[#f9f4ee]">
        <LoadingSpinner />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="pt-24 px-4 text-center min-h-screen bg-[#f9f4ee] text-black">
        <h2 className="text-xl font-semibold text-red-500">
          Kindly log in to view this job simulation.
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-teal-600 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f4ee] pb-32">
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
              <p className="mt-2 text-lg text-white/90 flex items-center gap-2">
                {job.companyName}
                {job.companyStatus === "verified" && <VerifiedBadge />}
              </p>
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
                <li>
                  🚀 Experience real work in {job.duration} hrs, at your pace.
                </li>
                <li>
                  🎯 Stand out to recruiters at{" "}
                  <strong>{job.companyName}</strong>.
                </li>
                <li>💼 Add this to your resume or LinkedIn.</li>
              </ul>
              <HashLink
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "end" })
                }
                to="#tasks"
              >
                <button
                  onClick={handleStartSimulation}
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-700 text-white py-2 rounded-md hover:shadow-lg hover:scale-105 transition font-semibold"
                >
                  Start Free Simulation
                </button>
              </HashLink>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-16 space-y-16 scroll-mt-[300px]">
        {hasStarted ? (
          <>
            {/* Overview */}
            <motion.section {...fadeInUp}>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Overview
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-sm text-gray-700 leading-relaxed">
                {job.description}
              </div>
            </motion.section>

            {/* Tasks */}
            <motion.section {...fadeInUp} id="tasks">
              <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Task List</h1>
                {job.tasks.map((task, index) => (
                  <TaskAccordion
                    key={index}
                    taskNumber={task.taskNumber}
                    title={task.title}
                    isCompleted={task.isCompleted}
                    content={task.content}
                    resources={task.resources}
                    taskid={task._id}
                  />
                ))}
              </div>
            </motion.section>
          </>
        ) : (
          <div className="text-center text-gray-600 mt-20">
            <p className="text-lg font-medium">
              Click the{" "}
              <span className="text-teal-600 font-semibold">
                "Start Free Simulation"
              </span>{" "}
              button above to begin and view the tasks.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobSimulationDetails;
