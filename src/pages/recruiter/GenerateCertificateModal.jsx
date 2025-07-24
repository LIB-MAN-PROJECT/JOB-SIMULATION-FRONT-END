import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function GenerateCertificateModal({ isOpen, onClose }) {
  const [enrollmentId, setEnrollmentId] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleGenerateCertificate = async () => {
    if (!enrollmentId) {
      toast.error("Please provide an enrollment ID");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/certificates/enrollments/${enrollmentId}/generate`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
        }
      );

      toast.success("Certificate generated successfully!");
      console.log(res.data);
      setEnrollmentId("");
      onClose(); // close modal
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate certificate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-green-700">Generate Certificate</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
        </div>

        <label className="block mb-2 font-medium">Enrollment ID</label>
        <input
          type="text"
          value={enrollmentId}
          onChange={(e) => setEnrollmentId(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter enrollment ID"
        />

        <button
          onClick={handleGenerateCertificate}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate Certificate"}
        </button>
      </div>
    </div>
  );
}
