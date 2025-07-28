import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import apiClient from "../../services/config";
import { FaFileAlt, FaClock } from "react-icons/fa";

const UserApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    try {
      const res = await apiClient.get("/user/profile/applications");
      setApplications(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch internship applications.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          My Internship Applications
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading applications...</p>
        ) : applications.length === 0 ? (
          <p className="text-center text-gray-600">No applications found.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-5"
              >
                <h2 className="text-lg font-bold text-gray-800 mb-1">
                  {app?.firstName} {app?.lastName}
                </h2>

                <p className="text-sm text-gray-600 mb-2">
                  Status:{" "}
                  <span
                    className={`font-medium ${
                      app?.applicationStatus === "Pending"
                        ? "text-yellow-600"
                        : app.applicationStatus === "Accepted"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {app.applicationStatus}
                  </span>
                </p>

                <p className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                  <FaClock className="text-gray-400" />
                  Applied on:{" "}
                  {new Date(app.appliedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>

                <a
                  href={app.userCv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition text-sm"
                >
                  <FaFileAlt />
                  View CV
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UserApplications;
