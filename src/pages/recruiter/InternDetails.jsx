// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { fetchInternshipById, applyToInternship } from "../../services/jobs";
// import { toast } from "react-toastify";
// import LoadingSpinner from "../../components/LoadingSpinner";

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.5, ease: "easeOut" },
// };

// const InternshipDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [internship, setInternship] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [applying, setApplying] = useState(false);

//   useEffect(() => {
//     const getInternship = async () => {
//       setLoading(true);
//       const data = await fetchInternshipById(id);
//       setInternship(data);
//       setLoading(false);
//     };
//     getInternship();
//   }, [id]);

//   const handleApply = async () => {
//     if (applying) return;

//     setApplying(true);
//     try {
//       await applyToInternship(id);
//       toast.success("Application submitted successfully!");
//     } catch (error) {
//       toast.error("You may have already applied or something went wrong.");
//     } finally {
//       setApplying(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   if (!internship) {
//     return (
//       <div className="min-h-screen flex flex-col justify-center items-center text-red-600">
//         <p className="text-lg font-semibold">Internship not found</p>
//         <button
//           onClick={() => navigate(-1)}
//           className="mt-4 text-sm text-teal-600 underline"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-[#f9f4ee] px-6 py-20">
//       <motion.div
//         {...fadeIn}
//         className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-8 space-y-6"
//       >
//         <h1 className="text-3xl font-bold text-slate-900">
//           {internship.title}
//         </h1>

//         <div className="flex flex-wrap gap-4 text-sm text-gray-600">
//           <span>🏢 {internship.companyName}</span>
//           <span>📍 {internship.location}</span>
//           <span>🕒 {internship.mode}</span>
//           <span>
//             📅 Deadline: {new Date(internship.deadline).toDateString()}
//           </span>
//           <span>🎯 Field: {internship.field}</span>
//         </div>

//         <p className="text-gray-700 text-base leading-relaxed">
//           {internship.description || "No detailed description available."}
//         </p>

//         <button
//           onClick={handleApply}
//           disabled={applying}
//           className="w-full py-3 font-semibold bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg hover:scale-105 transition"
//         >
//           {applying ? "Applying..." : "Apply Now"}
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default InternshipDetails;
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchInternshipById, applyToInternship } from "../../services/jobs";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/LoadingSpinner";

const InternshipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const getInternship = async () => {
      setLoading(true);
      const data = await fetchInternshipById(id);
      setInternship(data);
      setLoading(false);
    };
    getInternship();
  }, [id]);

  const handleApplyClick = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login", { state: { from: location.pathname } });
    } else {
      setShowForm(true);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!cvFile) {
      toast.error("Please upload your CV before applying.");
      return;
    }

    const formData = new FormData();
    formData.append("file", cvFile);

    setSubmitting(true);
    try {
      await applyToInternship(id, formData);
      toast.success("Application submitted successfully!");
      setShowForm(false);
      setCvFile(null);
      setShowConfirmation(true);
    } catch (error) {
      toast.error("Application failed. You might have already applied.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!internship) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-red-600">
        <p className="text-lg font-semibold">Internship not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-sm text-teal-600 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f9f4ee] px-6 py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-8 space-y-6 z-10 relative"
      >
        <h1 className="text-3xl font-bold text-slate-900">
          {internship.title}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span>🏢 {internship.companyName}</span>
          <span>📍 {internship.location}</span>
          <span>🕒 {internship.mode}</span>
          <span>
            📅 Deadline: {new Date(internship.deadline).toDateString()}
          </span>
          <span>🎯 Field: {internship.field}</span>
        </div>

        <p className="text-gray-700 text-base leading-relaxed">
          {internship.description || "No detailed description available."}
        </p>

        <button
          onClick={handleApplyClick}
          className="w-full py-3 font-semibold bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg hover:scale-105 transition"
        >
          Apply Now
        </button>
      </motion.div>

      {/* Upload Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
                onClick={() => setShowForm(false)}
              >
                ✖
              </button>
              <h2 className="text-lg font-bold mb-4">Upload Your CV</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setCvFile(e.target.files[0])}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-md hover:scale-105 transition font-semibold"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 100, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 100, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center"
            >
              <h2 className="text-2xl font-bold text-teal-600 mb-4">
                🎉 Success!
              </h2>
              <p className="text-gray-700 mb-6">
                Your application has been submitted successfully. Best of luck!
              </p>
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  navigate("/internships");
                }}
                className="mt-4 py-2 px-6 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-md hover:scale-105 transition"
              >
                View More Opportunities
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InternshipDetails;
