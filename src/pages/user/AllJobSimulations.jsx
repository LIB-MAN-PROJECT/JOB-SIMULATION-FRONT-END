import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import VerifiedBadge from "../../components/VerificationBadge";
import LoadingSpinner from "../../components/LoadingSpinner";
import apiClient from "../../services/config";

const AllJobSimulations = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    title: "",
    field: "",
    level: "",
    companyName: "",
    isHiring: "",
  });

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFilteredSimulations = async () => {
    try {
      setLoading(true);
      const { data } = await apiClient.get("/user/simulations/search", {
        params: filters,
      });
      setJobs(data.data);
    } catch (error) {
      toast.error("Failed to fetch job simulations.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredSimulations();
  }, [filters]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="pt-28 pb-20 px-6 bg-[#f9f4ee] min-h-screen text-black">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center sm:text-left mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Step Into Your Future with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700 ml-2">
              Free Job Simulations
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            Gain hands-on experience, boost your confidence, and stand out to
            employers — all for free.
          </p>
          <div className="mt-6 bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-2 text-sm sm:text-base max-w-4xl mx-auto">
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

        {/* Filters */}
        <div className="bg-white p-4 mb-10 rounded-xl shadow flex flex-wrap gap-4 items-center justify-between text-sm">
          <input
            type="text"
            name="title"
            value={filters.title}
            onChange={handleInputChange}
            placeholder="Search title"
            className="border rounded px-3 py-2 w-full sm:w-48"
          />
          <input
            type="text"
            name="field"
            value={filters.field}
            onChange={handleInputChange}
            placeholder="Field (e.g., IT)"
            className="border rounded px-3 py-2 w-full sm:w-48"
          />
          <input
            type="text"
            name="level"
            value={filters.level}
            onChange={handleInputChange}
            placeholder="Level"
            className="border rounded px-3 py-2 w-full sm:w-48"
          />
          <input
            type="text"
            name="companyName"
            value={filters.companyName}
            onChange={handleInputChange}
            placeholder="Company"
            className="border rounded px-3 py-2 w-full sm:w-48"
          />
          <select
            name="isHiring"
            value={filters.isHiring}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full sm:w-48"
          >
            <option value="">Hiring Status</option>
            <option value="true">Hiring</option>
            <option value="false">Not Hiring</option>
          </select>
        </div>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <LoadingSpinner />
          </div>
        ) : jobs?.length === 0 ? (
          <p className="text-center text-gray-600 mt-12">
            No job simulations found.
          </p>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job._id}
                onClick={() => navigate(`/simulations/${job._id}`)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="cursor-pointer bg-white rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-gray-100 flex flex-col"
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
                    {job.description?.slice(0, 90)}...
                  </p>

                  <div className="flex justify-between items-center text-sm mt-auto">
                    <span className="text-gray-700 font-semibold flex items-center gap-1">
                      {job.companyName}
                      {job.companyStatus === "verified" && <VerifiedBadge />}
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
        )}
      </div>
    </section>
  );
};

export default AllJobSimulations;
