import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const EditSimulation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [simulation, setSimulation] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchSim = async () => {
      try {
        const res = await axios.get(
          `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/simulation/${id}`
        );
        const sim = res.data;
        setSimulation(sim);

        setValue("title", sim.title);
        setValue("description", sim.description);
        setValue("field", sim.field);
        setValue("tasks", sim.tasks);
        setValue("resources", sim.resources);
        setValue("level", sim.level);
        setValue("duration", sim.duration);
        setValue("isHiring", sim.isHiring);
        setValue("isPublished", sim.isPublished);
      } catch (error) {
        toast.error("Failed to load simulation data");
      } finally {
        setLoading(false);
      }
    };

    fetchSim();
  }, [id, setValue]);

  const submitForm = async (data) => {
    const payload = {
      title: data.title,
      description: data.description,
      field: data.field,
      tasks: data.tasks,
      resources: data.resources,
      level: data.level,
      duration: data.duration,
      isHiring: data.isHiring,
      isPublished: data.isPublished,
    };

    try {
      await axios.put(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/edit-job-simulation/${id}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Simulation updated successfully!");
      navigate("/recruiter-dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update simulation");
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this simulation?");
    if (!confirm) return;

    try {
      await axios.delete(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/delete-job-simulation/${id}`
      );
      toast.success("Simulation deleted successfully!");
      navigate("/recruiter-dashboard");
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete simulation");
    }
  };

  if (loading) return <p className="text-center py-8">Loading simulation details...</p>;

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="max-w-lg mx-auto p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-orange-600">Edit Your Simulation</h2>

      {[
        { name: "title", label: "Title" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "field", label: "Field" },
        { name: "tasks", label: "Tasks" },
        { name: "resources", label: "Resources" },
        { name: "level", label: "Level" },
        { name: "duration", label: "Duration" },
        { name: "isHiring", label: "Hiring" },
        { name: "isPublished", label: "Published" },
      ].map(({ name, label, type }) => (
        <div key={name}>
          <label className="block mb-1 font-medium">{label}</label>
          {type === "textarea" ? (
            <textarea
              {...register(name, { required: `${label} is required` })}
              rows={3}
              className={`w-full p-2 border rounded ${errors[name] ? "border-red-500" : ""}`}
            />
          ) : (
            <input
              {...register(name, { required: `${label} is required` })}
              className={`w-full p-2 border rounded ${errors[name] ? "border-red-500" : ""}`}
            />
          )}
          {errors[name] && (
            <p className="text-red-500 text-sm">{errors[name].message}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
      >
        {isSubmitting ? "Updating..." : "Update Simulation"}
      </button>

      <button
        type="button"
        onClick={handleDelete}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Delete Simulation
      </button>
    </form>
  );
};

export default EditSimulation;
