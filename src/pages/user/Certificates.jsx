import { motion } from "framer-motion";
import { FaDownload, FaShareAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Frontend Developer Simulation",
    organization: "Google",
    issuedDate: "June 2025",
    certificateId: "GOOG-FE-987654",
    color: "from-teal-400 to-purple-500",
  },
  {
    title: "Marketing Strategist Simulation",
    organization: "Unilever",
    issuedDate: "May 2025",
    certificateId: "UNIL-MK-112233",
    color: "from-orange-400 to-pink-500",
  },
  {
    title: "Financial Analyst Simulation",
    organization: "Deloitte",
    issuedDate: "April 2025",
    certificateId: "DLO-FN-556677",
    color: "from-blue-500 to-indigo-600",
  },
];

const UserCertificates = () => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.certificateId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md border-t-4 p-6 border-transparent hover:shadow-xl transition duration-300"
            >
              <div
                className={`bg-gradient-to-r ${cert.color} text-white p-4 rounded-lg mb-4 shadow-md`}
              >
                <h3 className="text-lg font-semibold">
                  {cert.title}
                </h3>
                <p className="text-sm mt-1 opacity-90">{cert.organization}</p>
              </div>

              <p className="text-gray-700 text-sm">
                <strong>Issued:</strong> {cert.issuedDate}
              </p>
              <p className="text-gray-600 text-xs mt-1">
                ID: {cert.certificateId}
              </p>

              <div className="mt-5 flex justify-end gap-4">
                <button className="text-teal-600 hover:text-teal-800 transition text-sm flex items-center gap-1">
                  <FaDownload size={14} />
                  Download
                </button>
                <button className="text-purple-600 hover:text-purple-800 transition text-sm flex items-center gap-1">
                  <FaShareAlt size={14} />
                  Share
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default UserCertificates;
