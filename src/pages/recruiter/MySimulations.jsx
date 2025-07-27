import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RecruiterNavbar from "./components/RecruiterNavbar";

export default function MySimulations() {
  const [simulations, setSimulations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSimulations = async () => {
      try {
        const res = await axios.get(
          "https://job-simulation-backend-3e6w.onrender.com/api/recruiter/profile/overview/simulations",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
            },
          }
        );
        setSimulations(res.data?.data || []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load simulations");
      } finally {
        setLoading(false);
      }
    };

    fetchSimulations();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this simulation?")) return;

    try {
      await axios.delete(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/simulations/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Simulation deleted");
      setSimulations((prev) => prev.filter((sim) => sim._id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete simulation");
    }
  };

  return (
    <>
    <RecruiterNavbar/>
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-600">My Simulations</h2>

      {loading ? (
        <p>Loading simulations...</p>
      ) : simulations.length === 0 ? (
        <p>No simulations found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {simulations.map((sim) => (
            <div
              key={sim._id}
              className="border rounded shadow p-4 bg-white space-y-3"
            >
              <h3 className="text-lg font-semibold">{sim.title}</h3>
              <p className="text-gray-600">{sim.description}</p>
              <p>
                <strong>Field:</strong> {sim.field}
              </p>
              <p>
                <strong>Level:</strong> {sim.level}
              </p>
              <p>
                <strong>Duration:</strong> {sim.duration} days
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {sim.isPublished ? "Published" : "Unpublished"}
              </p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => navigate(`/edit-simulation/${sim._id}`)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(sim._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/add-tasks/${sim._id}`)}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Add/View Tasks
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
