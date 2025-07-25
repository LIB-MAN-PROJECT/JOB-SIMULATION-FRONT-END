import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import apiClient from "../../services/config";
import LoadingSpinner from "../../components/LoadingSpinner";
import VerifiedBadge from "../../components/VerificationBadge";
import RecruiterNavbar from "./components/RecruiterNavbar";

const RecruiterSimulations = () => {
  const [simulations, setSimulations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSimulations = async () => {
    try {
      setLoading(true);
      const res = await apiClient.get("/user/simulations/search");
      setSimulations(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch simulations.");
    } finally {
      setLoading(false);
    }
  };

  //   const handleDelete = async (id) => {
  //     const confirmed = window.confirm("Are you sure you want to delete this simulation?");
  //     if (!confirmed) return;

  //     try {
  //       await apiClient.delete(`/recruiter/delete-simulation/${id}`);
  //       toast.success("Simulation deleted!");
  //       fetchSimulations(); // Refresh list
  //     } catch (error) {
  //       toast.error("Failed to delete simulation.");
  //     }
  //   };
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this simulation?"
    );
    if (!confirmed) return;

    try {
      await apiClient.delete(`/recruiter/delete-job-simulation/${id}`);
      toast.success("Simulation deleted!");
      fetchSimulations(); // Refresh list
    } catch (error) {
      toast.error("Failed to delete simulation.");
    }
  };

  const handleEdit = (simulation) => {
    toast.info(`Edit simulation: ${simulation.title}`);
    // Later: open modal or route to edit form
  };

  useEffect(() => {
    fetchSimulations();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <RecruiterNavbar />

      {/* Main Content */}
      <main className="flex-1 ml-72 p-6 bg-[#f9f4ee] min-h-screen transition-all duration-300">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Your Posted Simulations
        </h1>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <LoadingSpinner />
          </div>
        ) : simulations.length === 0 ? (
          <p className="text-center text-gray-600">No simulations available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {simulations.map((sim, index) => (
              <motion.div
                key={sim._id}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition hover:shadow-lg flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <img
                  src={sim.imageUrl}
                  alt={sim.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4 flex flex-col justify-between h-full">
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-gray-800">
                      {sim.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {sim.description}
                    </p>

                    <div className="flex justify-between items-center mt-3 text-sm">
                      <span className="text-gray-700 flex items-center gap-1">
                        {sim.companyName}
                        {sim.companyStatus === "verified" && <VerifiedBadge />}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          sim.isHiring ? "bg-teal-600" : "bg-gray-400"
                        } text-white`}
                      >
                        {sim.isHiring ? "Hiring" : "Not Hiring"}
                      </span>
                    </div>

                    <div className="mt-2 flex justify-between text-xs text-gray-500">
                      <span>{sim.field}</span>
                      <span>{sim.level}</span>
                      <span>{sim.duration} hrs</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 flex justify-end space-x-3">
                    <button
                      onClick={() => handleEdit(sim)}
                      className="text-blue-600 hover:text-blue-800 transition"
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(sim._id)}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default RecruiterSimulations;