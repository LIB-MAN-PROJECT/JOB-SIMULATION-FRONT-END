import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ReviewCompletedEnrollmentsModal({ isOpen, onClose }) {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [feedbackMap, setFeedbackMap] = useState({}); // Track feedback per enrollment

  useEffect(() => {
    if (isOpen) fetchCompletedEnrollments();
  }, [isOpen]);

  const fetchCompletedEnrollments = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://job-simulation-backend-3e6w.onrender.com/api/recruiter/enrollments/get-completed",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
        }
      );
      setEnrollments(res.data?.enrollments || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch completed enrollments");
    } finally {
      setLoading(false);
    }
  };

  const handleFeedbackSubmit = async (enrollmentId) => {
    const feedback = feedbackMap[enrollmentId];
    if (!feedback) {
      toast.error("Please enter feedback");
      return;
    }

    try {
      await axios.post(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/enrollments/${enrollmentId}/review`,
        { feedback },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
        }
      );
      toast.success("Feedback submitted");
      setFeedbackMap((prev) => ({ ...prev, [enrollmentId]: "" }));
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit feedback");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center overflow-auto p-4">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-green-700">Review Completed Enrollments</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black text-xl">×</button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : enrollments.length === 0 ? (
          <p>No completed enrollments found.</p>
        ) : (
          enrollments.map((enrollment) => (
            <div
              key={enrollment._id}
              className="border p-4 rounded mb-4 shadow-sm bg-gray-50"
            >
              <p><strong>User:</strong> {enrollment.user?.userName || "Unknown"}</p>
              <p><strong>Simulation:</strong> {enrollment.simulation?.title || "Unknown"}</p>

              <textarea
                className="w-full mt-2 p-2 border rounded"
                rows={2}
                placeholder="Enter feedback"
                value={feedbackMap[enrollment._id] || ""}
                onChange={(e) =>
                  setFeedbackMap((prev) => ({
                    ...prev,
                    [enrollment._id]: e.target.value,
                  }))
                }
              ></textarea>

              <button
                onClick={() => handleFeedbackSubmit(enrollment._id)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Submit Feedback
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
