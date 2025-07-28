import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import RecruiterNavbar from "./components/RecruiterNavbar";

export default function EditSimulation() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [field, setField] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [isHiring, setIsHiring] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  // Fetch the current simulation details
  useEffect(() => {
    const fetchSimulation = async () => {
      try {
        const res = await axios.get(
          `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/profile/overview/simulations/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const data = res.data.data;
        setTitle(data.title || "");
        setDescription(data.description || "");
        setField(data.field || "");
        setLevel(data.level || "");
        setDuration(data.duration || "");
        setIsHiring(data.isHiring || false);
        setIsPublished(data.isPublished || false);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load simulation details");
      }
    };
    fetchSimulation();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      if (image) formData.append("file", image); // only append if a new image is selected
      formData.append("description", description);
      formData.append("field", field);
      formData.append("level", level);
      formData.append("duration", duration);
      formData.append("isHiring", isHiring);
      formData.append("isPublished", isPublished);

      await axios.put(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/edit-job-simulation/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Simulation updated successfully!");
      navigate("/my-simulations");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update simulation");
    }
  };

  return (
    <>
      <RecruiterNavbar />
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Edit Simulation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full border rounded p-2"
            required
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border rounded p-2"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full border rounded p-2"
            required
          ></textarea>
          <input
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
            placeholder="Field"
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            placeholder="Level"
            className="w-full border rounded p-2"
          />
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration (days)"
            className="w-full border rounded p-2"
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isHiring}
              onChange={(e) => setIsHiring(e.target.checked)}
            />
            Hiring
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
            />
            Published
          </label>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Update Simulation
          </button>
        </form>
      </div>
    </>
  );
}



// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router";
// import { toast } from "react-toastify";

// export default function EditSimulationForm() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [field, setField] = useState("");
//   const [level, setLevel] = useState("");
//   const [duration, setDuration] = useState("");
//   const [isHiring, setIsHiring] = useState("");
//   const [isPublished, setIsPublished] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const navigate = useNavigate();
//   const { id } = useParams(); // simulation id from route

//   useEffect(() => {
//     const fetchSimulation = async () => {
//       try {
//         const res = await axios.get(
//           `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/simulation/${id}`
//         );
//         const sim = res.data;
//         setTitle(sim.title);
//         setDescription(sim.description);
//         setField(sim.field);
//         setLevel(sim.level);
//         setDuration(sim.duration);
//         setIsHiring(sim.isHiring);
//         setIsPublished(sim.isPublished);
//       } catch (error) {
//         console.error("Failed to fetch simulation", error);
//         toast.error("Failed to load simulation data");
//       }
//     };

//     fetchSimulation();
//   }, [id]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     const payload = {
//       title,
//       description,
//       field,
//       level,
//       duration,
//       isHiring,
//       isPublished,
//     };

//     setIsSubmitting(true);
//     try {
//       const res = await axios.put(
//         `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/edit-job-simulation/${id}`,
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       toast.success("Simulation updated successfully!");
//       navigate("/add-tasks");
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to update simulation");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleUpdate}
//       className="max-w-lg mx-auto p-6 bg-white shadow rounded space-y-4"
//     >
//       <h2 className="text-2xl font-bold text-center">Edit Simulation</h2>

//       <div>
//         <label className="block mb-1 font-medium">Title</label>
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Description</label>
//         <textarea
//           name="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           rows={3}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Field</label>
//         <input
//           type="text"
//           name="field"
//           value={field}
//           onChange={(e) => setField(e.target.value)}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Level</label>
//         <select
//           name="level"
//           value={level}
//           onChange={(e) => setLevel(e.target.value)}
//           required
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select One</option>
//           <option value="Beginner">Beginner</option>
//           <option value="Intermediate">Intermediate</option>
//           <option value="Advanced">Advanced</option>
//         </select>
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Duration</label>
//         <input
//           type="text"
//           name="duration"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Hiring</label>
//         <select
//           name="isHiring"
//           value={isHiring}
//           onChange={(e) => setIsHiring(e.target.value)}
//           required
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select One</option>
//           <option value="YES">YES</option>
//           <option value="NO">NO</option>
//         </select>
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Published</label>
//         <select
//           name="isPublished"
//           value={isPublished}
//           onChange={(e) => setIsPublished(e.target.value)}
//           required
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select One</option>
//           <option value="YES">YES</option>
//           <option value="NO">NO</option>
//         </select>
//       </div>

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//       >
//         {isSubmitting ? "Updating..." : "Update Simulation"}
//       </button>
//     </form>
//   );
// }
