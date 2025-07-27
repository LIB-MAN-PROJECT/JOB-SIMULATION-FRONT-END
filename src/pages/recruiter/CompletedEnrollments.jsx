import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import RecruiterNavbar from "./components/RecruiterNavbar";
import { useNavigate } from "react-router";

export default function CompletedEnrollments() {
  const [completedList, setCompletedList] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompleted = async () => {
      try {
        const res = await axios.get(
          "https://job-simulation-backend-3e6w.onrender.com/api/recruiter/enrollments/get-completed",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        let response = res.data?.data;
        const filtered = response.filter(
          (item) => item.feedbackState === "Accepted"
        );
        setCompletedList(filtered);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load completed enrollments");
      } finally {
        setLoading(false);
      }
    };

    fetchCompleted();
  }, []);

  const handleFeedbackUpdate = (id) => {
    console.log(id);
    navigate(`/review-enrollments/${id}`);
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (completedList.length === 0)
    return <p className="text-center mt-10">No completed simulations yet.</p>;

  return (
    <>
      <RecruiterNavbar />
      <div className="p-4 mt-10 ml-67">
        <h2 className="text-2xl font-bold mb-6 text-green-600">Employment</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="text-left px-6 py-3">User</th>
              <th className="text-left px-6 py-3">Email</th>
              <th className="text-left px-6 py-3">Simulation</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Submitted At</th>
              <th className="text-left px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {completedList.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="px-6 py-4">
                  {item?.userId?.firstName + " " + item?.userId?.lastName}
                </td>
                <td className="px-6 py-4">{item?.userId?.email}</td>
                <td className="px-6 py-4">{item?.simulationId?.title}</td>

                {/* STATUS CELL */}
                <td className="px-6 py-4 ">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                      item?.feedbackState === "Accepted"
                        ? "bg-green-600"
                        : item?.feedbackState === "Rejected"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {item?.feedbackState === "Accepted"
                      ? "ACCEPTED"
                      : item?.feedbackState === "Rejected"
                      ? "REJECTED"
                      : "PENDING"}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {new Date(item?.completedAt).toLocaleDateString()}
                </td>

                {item?.feedbackState !== "Acceptedd" && (
                  <td className="px-6 py-4 space-x-2 flex">
                    <button
                      onClick={() => handleFeedbackUpdate(item._id, "APPROVED")}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleFeedbackUpdate(item._id, "REJECTED")}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                    >
                      Reject
                    </button>
                  </td>
                )}

                {/* ACTION BUTTONS CELL */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
