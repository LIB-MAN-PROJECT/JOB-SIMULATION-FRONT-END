import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import intern from "../../assets/createintern.jpg"
import { div } from "framer-motion/client";


const CreateInternship = () => {
  const navigate = useNavigate();


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [field, setField] = useState("");
  const [location, setLocation] = useState("");
  const [mode, setMode] = useState("");
  const [deadline, setDeadline] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      title,
      description,
      field,
      location,
      mode,
      deadline,
    };

    try {
      const res = await axios.post(
        "https://job-simulation-backend-3e6w.onrender.com/api/recruiter/create-internship",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Internship created successfully!");
      navigate("/recruiter");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create internship");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-between w-[90%] mx-auto mt-10">
        <div className="w-[50%]">
            <img className="h-170" src={intern} alt="" />
        </div>
        
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto w-[50%] p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-orange-600">
        Create Internship
      </h2>
      

      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Location</label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Mode</label>
        <input
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g. Remote or Onsite"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Deadline</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
      >
        {isSubmitting ? "Creating..." : "Create Internship"}
      </button>
    </form>
    </div>
  );
};

export default CreateInternship;
