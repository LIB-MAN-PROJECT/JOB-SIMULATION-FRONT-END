import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./compoments/AdminSidebar";

export default function ManageCompanies() {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");

      try {
        const res = await axios.get(
          "https://job-simulation-backend-3e6w.onrender.com/api/admin/profile/companies",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCompanies(res.data.data || []);
      } catch (error) {
        toast.error("Failed to load companies");
      }
    };

    fetchCompanies();
  }, [navigate]);
  console.log(companies);
  

  return (
    <>
    <AdminSidebar/>
    <div className="p-6 ml-60">
      <h2 className="text-2xl font-bold mb-4">Manage Companies</h2>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="border-b">
            <th className="p-2">Company Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Website</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((c) => (
            <tr key={c._id} className="border-b text-center">
              <td className="p-2">{c.companyName}</td>
              <td className="p-2">{c.companyEmail}</td>
              <td className="p-2">{c.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}



// import React from "react";
// import AdminSidebar from "./AdminSidebar";

// const mockCompanies = [
//   {
//     id: 1,
//     name: "TechNova Inc.",
//     email: "contact@technova.com",
//     industry: "Technology",
//     internships: 3,
//   },
//   {
//     id: 2,
//     name: "GreenWorld Corp.",
//     email: "hr@greenworld.org",
//     industry: "Environmental",
//     internships: 1,
//   },
//   {
//     id: 3,
//     name: "FinEdge Ltd.",
//     email: "careers@finedge.com",
//     industry: "Finance",
//     internships: 5,
//   },
//   {
//     id: 4,
//     name: "EduBridge",
//     email: "admin@edubridge.edu",
//     industry: "Education",
//     internships: 2,
//   },
// ];

// export default function CompanyTable() {
//   return (
//     <>
//     <AdminSidebar/>
//       <div className="p-6 ml-64 mt-10 bg-white shadow rounded">
//         <h2 className="text-2xl font-semibold mb-4">Registered Companies</h2>

//         <table className="min-w-full table-auto border">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-4 py-2 text-left">Company Name</th>
//               <th className="px-4 py-2 text-left">Email</th>
//               <th className="px-4 py-2 text-left">Industry</th>
//               <th className="px-4 py-2 text-left">Internships</th>
//               <th className="px-4 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mockCompanies.map((company) => (
//               <tr key={company.id} className="border-t">
//                 <td className="px-4 py-2">{company.name}</td>
//                 <td className="px-4 py-2">{company.email}</td>
//                 <td className="px-4 py-2">{company.industry}</td>
//                 <td className="px-4 py-2">{company.internships}</td>
//                 <td className="px-4 py-2">
//                   <button className="text-blue-600 hover:underline mr-2">
//                     View
//                   </button>
//                   <button className="text-red-600 hover:underline">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }


