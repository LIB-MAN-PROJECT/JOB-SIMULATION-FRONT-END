import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteInternship = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [field, setField] = useState("");
  const [location, setLocation] = useState("");
  const [mode, setMode] = useState("");
  const [deadline, setDeadline] = useState("");
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchInternship = async () => {
      try {
        const res = await axios.get(
          `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/internship/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = res.data;
        setTitle(data.title);
        setDescription(data.description);
        setField(data.field);
        setLocation(data.location);
        setMode(data.mode);
        setDeadline(data.deadline);
      } catch (error) {
        toast.error("Failed to load internship details");
      } finally {
        setLoading(false);
      }
    };

    fetchInternship();
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();

    const confirmDelete = window.confirm("Are you sure you want to delete this internship?");
    if (!confirmDelete) return;

    setIsDeleting(true);
    try {
      await axios.delete(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/delete-internship/${id}`,
        {
          headers: {
             "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Internship deleted successfully!");
      navigate("/recruiter-dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete internship");
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) return <p className="text-center py-8">Loading internship details...</p>;

  return (
    <form
      onSubmit={handleDelete}
      className="max-w-lg mx-auto p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-red-600">
        Delete Internship
      </h2>

      <div>
        <label className="block mb-1 font-medium">Title</label>
        <p className="p-2 border rounded bg-gray-50">{title}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <p className="p-2 border rounded bg-gray-50 whitespace-pre-line">{description}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Field</label>
        <p className="p-2 border rounded bg-gray-50">{field}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Location</label>
        <p className="p-2 border rounded bg-gray-50">{location}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Mode</label>
        <p className="p-2 border rounded bg-gray-50">{mode}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Deadline</label>
        <p className="p-2 border rounded bg-gray-50">
          {new Date(deadline).toLocaleDateString()}
        </p>
      </div>

      <button
        type="submit"
        disabled={isDeleting}
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
      >
        {isDeleting ? "Deleting..." : "Delete Internship"}
      </button>
    </form>
  );
};

export default DeleteInternship;
