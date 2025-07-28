import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./compoments/AdminSidebar";

export default function AdminDashboard() {
  const [overview, setOverview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOverview = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await axios.get(
          "https://job-simulation-backend-3e6w.onrender.com/api/admin/profile/overview",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOverview(res.data.data);
      } catch (error) {
        toast.error("Failed to load admin overview");
      }
    };

    fetchOverview();
  }, [navigate]);

  if (!overview) return <p>Loading...</p>;

  

  return (
    <>
      <AdminSidebar />
      <div className="p-6 ml-60">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Total Students" value={overview.totalCompanies} />
          <StatCard title="Total Recruiters" value={overview.totalInternshipApplications} />
          <StatCard title="Total Companies" value={overview.totalInternships} />
          <StatCard title="Total Companies" value={overview.totalJobSims} />
          <StatCard title="Total Companies" value={overview.totalUsers} />
        </div>
      </div>
    </>
  );
}

const StatCard = ({ title, value }) => (
  <div className="bg-white shadow rounded p-4 text-center">
    <p className="text-gray-600">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);
