import { motion } from "framer-motion";
import { FaDownload, FaShareAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchUserCertificates } from "../../services/jobs";

const UserCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCertificates = async () => {
      try {
        setLoading(true);
        const { data } = await fetchUserCertificates();
        setCertificates(data);
        console.log("Fetched certificates:", data.data);
      } catch (error) {
        toast.error("Failed to fetch certificates.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllCertificates();
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-6 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Your Certificates
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : certificates.length === 0 ? (
          <p className="text-center text-gray-500">
            No certificates available.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-white rounded-2xl shadow-md border-t-4 p-6 border-orange-300 hover:shadow-lg transition"
              >
                <div className="text-gray-700 mb-3">
                  <h3 className="text-lg font-semibold">Certificate</h3>
                  <p className="text-sm text-gray-500">
                    Issued on: {new Date(cert.issuedAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="mt-5 flex justify-between items-center">
                  <a
                    href={cert.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 transition text-sm flex items-center gap-1"
                  >
                    <FaDownload size={14} />
                    Download
                  </a>
                  <button className="text-purple-600 hover:text-purple-800 transition text-sm flex items-center gap-1">
                    <FaShareAlt size={14} />
                    Share
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default UserCertificates;
