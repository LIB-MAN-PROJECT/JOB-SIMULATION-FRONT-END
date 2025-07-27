import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import sim from "../../assets/createsim.jpg"
import { div } from "framer-motion/client";
// import Navbar from "./components/RNavbar";

export default function AddSimulationForm() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [field, setField] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [isHiring, setIsHiring] = useState("");
  const [isPublished, setIsPublished] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    //  payload = {
    //   title,
    //   imageUrl,
    //   description,
    //   field,
    //   level,
    //   duration,
    //   isHiring,
    //   isPublished,
    // };

    const formData = new FormData();
  formData.append("title", title);
  formData.append("imageUrl", imageUrl); 
  formData.append("description", description);
  formData.append("field", field);
  formData.append("level", level);
  formData.append("duration", duration);
  formData.append("isHiring", isHiring);
  formData.append("isPublished", isPublished);

    try {
      const res = await axios.post(
        "https://job-simulation-backend-3e6w.onrender.com/api/recruiter/create-job-simulation",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },   
        }
      );
      console.log(localStorage.getItem("token"));
      toast.success("Add Tasks Now!");
      navigate(`/add-tasks/${createdSimulation._id}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create simulation");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-between w-[90%] mx-auto mt-10">
      <div className="w-[50%]">
        <img className="h-210 w-270" src={sim} alt="" />
      </div>

    
    <form
      onSubmit={handleSubmit}
      className="max-w-lg w-[50%] mx-auto p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-green-600">
        Create a Simulation
      </h2>

      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Image</label>
        <input
          type="file"
          
          onChange={(e) => setImageUrl(e.target.files[0])}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Field</label>
        <input
          type="text"
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Level</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select One</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Duration (weeks)</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g. 4"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Hiring</label>
        <select
          value={isHiring}
          onChange={(e) => setIsHiring(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select One</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Published</label>
        <select
          value={isPublished}
          onChange={(e) => setIsPublished(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select One</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        {isSubmitting ? "Submitting..." : "Add Simulation"}
      </button>
    </form>
    </div>
  );
}
