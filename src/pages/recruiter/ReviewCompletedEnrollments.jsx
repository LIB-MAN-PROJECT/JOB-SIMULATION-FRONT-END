import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ReviewCompletedEnrollment() {
  const { id } = useParams();
  const [feedbackState, setFeedbackState] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [enrollment, setEnrollment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnrollment = async () => {
      try {
        const res = await axios.post(
          `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/enrollments/${id}/review`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        console.log("Enrollment data fetched:", res.data);
        setEnrollment(res.data?.data);
      } catch (err) {
        console.error("Error fetching enrollment:", err);
        toast.error("Failed to fetch enrollment details");
      }
    };

    fetchEnrollment();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!feedback.trim()) {
      toast.error("Feedback cannot be empty");
      setSubmitting(false);
      return;
    }

    try {
      console.log("Submitting review with:", { feedbackState, feedback });

      await axios.post(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/enrollments/${id}/review`,
        {
          feedbackState,
          feedback,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Review submitted!");
      navigate("/recruiter/completed");
    } catch (err) {
      console.error("Error submitting review:", err);
      toast.error("Failed to submit review");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-600">
        Review Completed Enrollment
      </h2>

      {enrollment ? (
        <div className="border rounded shadow p-6 bg-white space-y-4">
          <h3 className="text-xl font-semibold">
            {enrollment?.user?.userName || "Student"}'s Submission
          </h3>
          <p>
            <strong>Simulation:</strong> {enrollment?.simulation?.title}
          </p>
          <p>
            <strong>Status:</strong> {enrollment?.status}
          </p>
          <p>
            <strong>Completed At:</strong>{" "}
            {new Date(enrollment?.completedAt).toLocaleDateString()}
          </p>

          <div>
            <h4 className="text-md font-medium mt-4 mb-2">Submitted Tasks</h4>
            <ul className="list-disc pl-5 text-gray-700">
              {enrollment?.submittedTasks?.map((task, index) => (
                <li key={index}>
                  <strong>Task {index + 1}:</strong>{" "}
                  {task?.response || "No response"}
                </li>
              ))}
            </ul>
          </div>

          {/* Review Form */}
          <form
            onSubmit={handleReviewSubmit}
            className="space-y-4 border-t pt-4 mt-4"
          >
            <div>
              <label className="block mb-1 font-medium">Review Status</label>
              <select
                value={feedbackState}
                onChange={(e) => setFeedbackState(e.target.value)}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Select</option>
                <option value="APPROVED">APPROVED</option>
                <option value="REJECTED">REJECTED</option>
                <option value="PENDING">PENDING</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Feedback</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              {submitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      ) : (
        <p className="text-gray-500">Loading enrollment details...</p>
      )}
    </div>
  );
}
