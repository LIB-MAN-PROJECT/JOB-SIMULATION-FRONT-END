import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

export default function EditSimulationForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [field, setField] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [isHiring, setIsHiring] = useState("");
  const [isPublished, setIsPublished] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams(); // simulation id from route

  useEffect(() => {
    const fetchSimulation = async () => {
      try {
        const res = await axios.get(
          `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/simulation/${id}`
        );
        const sim = res.data;
        setTitle(sim.title);
        setDescription(sim.description);
        setField(sim.field);
        setLevel(sim.level);
        setDuration(sim.duration);
        setIsHiring(sim.isHiring);
        setIsPublished(sim.isPublished);
      } catch (error) {
        console.error("Failed to fetch simulation", error);
        toast.error("Failed to load simulation data");
      }
    };

    fetchSimulation();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      field,
      level,
      duration,
      isHiring,
      isPublished,
    };

    setIsSubmitting(true);
    try {
      const res = await axios.put(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/edit-job-simulation/${id}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Simulation updated successfully!");
      navigate("/add-tasks");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update simulation");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-lg mx-auto p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Edit Simulation</h2>

      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Field</label>
        <input
          type="text"
          name="field"
          value={field}
          onChange={(e) => setField(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Level</label>
        <select
          name="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select One</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Duration</label>
        <input
          type="text"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Hiring</label>
        <select
          name="isHiring"
          value={isHiring}
          onChange={(e) => setIsHiring(e.target.value)}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select One</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Published</label>
        <select
          name="isPublished"
          value={isPublished}
          onChange={(e) => setIsPublished(e.target.value)}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select One</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {isSubmitting ? "Updating..." : "Update Simulation"}
      </button>
    </form>
  );
}
