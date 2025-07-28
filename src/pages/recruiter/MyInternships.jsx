// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import RecruiterNavbar from "./components/RecruiterNavbar";

// export default function Internships() {
//   const [internships, setInternships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // Fetch all internships
//   useEffect(() => {
//     const fetchInternships = async () => {
//       try {
//         // Update endpoint for fetching internships
//         const res = await axios.get(
//           "https://job-simulation-backend-3e6w.onrender.com/api/recruiter/profile/overview/simulations/internships",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         setInternships(res.data.data || []);
//       } catch (error) {
//         console.error(error);
//         toast.error("Failed to load internships");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInternships();
//   }, []);

//   // Delete internship
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this internship?")) return;

//     try {
//       await axios.delete(
//         `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/delete-internship/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       toast.success("Internship deleted");
//       setInternships((prev) => prev.filter((intern) => intern._id !== id));
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to delete internship");
//     }
//   };

//   return (
//     <>
//       <RecruiterNavbar />
//       <div className="max-w-5xl mx-auto p-6">
//         <h2 className="text-2xl font-bold mb-6 text-green-600">My Internships</h2>

//         {loading ? (
//           <p>Loading internships...</p>
//         ) : internships.length === 0 ? (
//           <p>No internships found.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {internships.map((intern) => (
//               <div
//                 key={intern._id}
//                 className="border rounded shadow p-4 bg-white space-y-3"
//               >
//                 <h3 className="text-lg font-semibold">{intern.title}</h3>
//                 <p className="text-gray-600">{intern.description}</p>
//                 <p><strong>Field:</strong> {intern.field}</p>
//                 <p><strong>Location:</strong> {intern.location}</p>
//                 <p><strong>Mode:</strong> {intern.mode}</p>
//                 <p>
//                   <strong>Status:</strong>{" "}
//                   {intern.isPublished ? "Published" : "Unpublished"}
//                 </p>
//                 <div className="flex gap-2 mt-2">
//                   <button
//                     onClick={() => navigate(`/edit-internship/${intern._id}`)}
//                     className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(intern._id)}
//                     className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//                   >
//                     Delete
//                   </button>
//                   <button
//                     onClick={() => navigate(`/view-applications/${intern._id}`)}
//                     className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
//                   >
//                     Applications
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RecruiterNavbar from "./components/RecruiterNavbar";

export default function Internships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all internships
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        // ✅ Corrected endpoint: internships list
        const res = await axios.get(
          "https://job-simulation-backend-3e6w.onrender.com/api/recruiter/profile/overview/internships",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setInternships(res.data.data || []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load internships");
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  // Delete internship
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this internship?")) return;

    try {
      await axios.delete(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/delete-internship/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Internship deleted");
      setInternships((prev) => prev.filter((intern) => intern._id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete internship");
    }
  };

  return (
    <>
      <RecruiterNavbar />
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-green-600">My Internships</h2>

        {loading ? (
          <p>Loading internships...</p>
        ) : internships.length === 0 ? (
          <p>No internships found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internships.map((intern) => (
              <div
                key={intern._id}
                className="border rounded shadow p-4 bg-white space-y-3"
              >
                <h3 className="text-lg font-semibold">{intern.title}</h3>
                <p className="text-gray-600">{intern.description}</p>
                <p><strong>Field:</strong> {intern.field}</p>
                <p><strong>Location:</strong> {intern.location}</p>
                <p><strong>Mode:</strong> {intern.mode}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  {intern.isPublished ? "Published" : "Unpublished"}
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => navigate(`/edit-internship/${intern._id}`)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(intern._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => navigate(`/view-applications/${intern._id}`)}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Applications
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
