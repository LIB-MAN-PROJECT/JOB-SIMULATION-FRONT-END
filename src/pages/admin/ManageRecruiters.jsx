import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./compoments/AdminSidebar";

export default function ManageRecruiters() {
  const [recruiters, setRecruiters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecruiters = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");

      try {
        const res = await axios.get(
          "https://job-simulation-backend-3e6w.onrender.com/api/admin/profile/users/recruiters",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setRecruiters(res.data.data || []);
      } catch (error) {
        toast.error("Failed to load recruiters");
      }
    };

    fetchRecruiters();
  }, [navigate]);

  const handleVerify = async (id, action) => {
    const token = localStorage.getItem("token");
    try {
      await axios.patch(
        `https://job-simulation-backend-3e6w.onrender.com/api/admin/profile/${action}-recruiter/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(`Recruiter ${action}ed successfully`);
      setRecruiters((prev) =>
        prev.map((r) => (r._id === id ? { ...r, verified: action === "verify" } : r))
      );
    } catch (error) {
      toast.error("Failed to update recruiter");
    }
  };
  console.log(recruiters);
  

  return (
    <>
    <AdminSidebar/>
    <div className="p-6 ml-60">
      <h2 className="text-2xl font-bold mb-4">Manage Recruiters</h2>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recruiters.map((r) => (
            <tr key={r._id} className="border-b text-center">
              <td className="p-2">{r.companyName}</td>
              <td className="p-2">{r.email}</td>
              <td className="p-2">{r.verified ? "Verified" : "Unverified"}</td>
              <td className="p-2">
                {r.verified ? (
                  <button
                    onClick={() => handleVerify(r._id, "unverify")}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Unverify
                  </button>
                ) : (
                  <button
                    onClick={() => handleVerify(r._id, "verify")}
                    className="px-3 py-1 bg-green-600 text-white rounded"
                  >
                    Verify
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
