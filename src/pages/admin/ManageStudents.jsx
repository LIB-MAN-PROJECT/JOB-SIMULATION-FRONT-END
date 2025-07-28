import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./compoments/AdminSidebar";

export default function ManageStudents() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");

      try {
        const res = await axios.get(
          "https://job-simulation-backend-3e6w.onrender.com/api/admin/profile/users/students",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setStudents(res.data.data || []);
      } catch (error) {
        toast.error("Failed to load students");
      }
    };

    fetchStudents();
  }, [navigate]);
  console.log(students);

  return (
    <>
    <AdminSidebar/>
    <div className="p-6 ml-60">
      <h2 className="text-2xl font-bold mb-4">Manage Students</h2>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Registered On</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id} className="border-b text-center">
              <td className="p-2">{`${s.firstName} ${s.lastName}`}</td>
              <td className="p-2">{s.email}</td>
              <td className="p-2">
                {new Date(s.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
