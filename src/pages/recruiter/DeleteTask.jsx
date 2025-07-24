import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteTask = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(
          `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/task/${taskId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setTask(res.data);
      } catch (err) {
        toast.error("Failed to load task.");
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [taskId]);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axios.delete(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/delete-task/${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
        }
      );
      toast.success("Task deleted successfully");
      navigate(-1); // or navigate to task list or recruiter-dashboard
    } catch (err) {
      toast.error("Failed to delete task.");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <p className="text-center py-8">Loading task details...</p>;

  if (!task) return <p className="text-center py-8 text-red-500">Task not found.</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold text-red-600 mb-4 text-center">Delete Task</h2>

      <p className="mb-4">Are you sure you want to delete this task?</p>

      <div className="mb-4">
        <p><strong>Title:</strong> {task.title}</p>
        <p><strong>Content:</strong> {task.content}</p>
        <p><strong>Resources:</strong> {task.resources}</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          {deleting ? "Deleting..." : "Delete"}
        </button>

        <button
          onClick={() => navigate(-1)}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteTask;
