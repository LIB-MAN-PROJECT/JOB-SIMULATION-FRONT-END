// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import Navbar from "../user/components/Navbar";
// import { fetchAllInternships } from "../../services/jobs";

// import LoadingSpinner from "../../components/LoadingSpinner";

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const InternshipGrid = () => {
//   const [internships, setInternships] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchInternshipsData = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchAllInternships();
//         setInternships(data.data || []);
//       } catch (error) {
//         toast.error("Failed to fetch available internships.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchInternshipsData();
//   }, []);

//   return (
//     <section className="bg-white py-24 px-6 md:px-20 min-h-screen">
//       <Navbar />
//       <div className="max-w-7xl mx-auto py-8">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-slate-900">
//           Featured Internship Opportunities
//         </h2>

//         {loading ? (
//           <div className="flex justify-center items-center min-h-[200px]">
//             <LoadingSpinner />
//           </div>
//         ) : internships.length === 0 ? (
//           <p className="text-center text-gray-500">No internships available.</p>
//         ) : (
//           <div className="grid gap-10 md:grid-cols-3">
//             {internships.map((intern, index) => (
//               <motion.div
//                 key={intern._id}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={cardVariants}
//                 className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all group bg-white"
//               >
//                 {/* Image */}
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={intern.imageUrl}
//                     alt={intern.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>

//                 {/* Info */}
//                 <div className="p-6 space-y-3">
//                   <h3 className="text-xl font-bold text-slate-800">
//                     {intern.title}
//                   </h3>
//                   <p className="text-sm text-gray-500">{intern.companyName}</p>
//                   <div className="text-xs text-gray-600 space-x-2">
//                     <span>📍 {intern.location}</span>
//                     <span>• {intern.type}</span>
//                     <span>• ⏱ {intern.duration}</span>
//                   </div>

//                   <Link to={`/internship/${intern._id}`}>
//                     <button className="mt-4 w-full py-2 text-sm font-semibold bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-md hover:scale-105 transition">
//                       View Details
//                     </button>
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default InternshipGrid;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../user/components/Navbar";
import { toast } from "react-toastify";
import { fetchFilteredInternships } from "../../services/jobs";
import LoadingSpinner from "../../components/LoadingSpinner";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const InternshipGrid = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    title: "",
    field: "",
    location: "",
    mode: "",
    deadline: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchFilteredInternships(filters);
      setInternships(response.data);
    } catch (error) {
      toast.error("Failed to fetch internships.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <section className="bg-white pt-24 pb-32 px-6 md:px-20">
      <Navbar />

      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-slate-900">
          Find Your Next Internship Opportunity
        </h2>

        {/* Search/Filter Form */}
        <form
          onSubmit={handleSearch}
          className="grid md:grid-cols-5 gap-4 mb-12 text-sm"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={filters.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
          <input
            type="text"
            name="field"
            placeholder="Field"
            value={filters.field}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
          <select
            name="mode"
            value={filters.mode}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="">Mode</option>
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
            <option value="hybrid">Hybrid</option>
          </select>
          <input
            type="date"
            name="deadline"
            value={filters.deadline}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
          <button
            type="submit"
            className="md:col-span-5 bg-teal-600 text-white py-2 rounded-lg mt-2 hover:bg-teal-700 font-semibold"
          >
            Search Internships
          </button>
        </form>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center items-center min-h-[200px]">
            <LoadingSpinner />
          </div>
        )}

        {/* Internship Cards */}
        {!loading && internships.length > 0 ? (
          <div className="grid gap-10 md:grid-cols-3">
            {internships.map((intern, index) => (
              <motion.div
                key={intern._id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={
                      intern.imageUrl ||
                      "https://via.placeholder.com/300x200?text=Internship"
                    }
                    alt={intern.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-800">
                    {intern.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {intern.companyName}
                  </p>
                  <div className="text-xs text-gray-600 space-x-2">
                    <span>📍 {intern.location}</span>
                    <span>• {intern.mode}</span>
                    <span>• 📅{" "}
                      {new Date(intern.deadline).toLocaleDateString()}</span>
                  </div>

                  <Link to={`/internship/${intern._id}`}>
                    <button className="mt-4 w-full py-2 text-sm font-semibold bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-md hover:scale-105 transition">
                      View Details
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          !loading && (
            <p className="text-center text-gray-500 mt-12">
              No internships found. Try different filters.
            </p>
          )
        )}
      </div>
    </section>
  );
};

export default InternshipGrid;

