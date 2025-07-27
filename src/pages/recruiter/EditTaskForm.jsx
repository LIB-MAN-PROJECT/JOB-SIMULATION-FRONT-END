import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditTaskForm = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [resources, setResources] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(
          `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/task/${taskId}`,
          {
            headers: {
                 "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = res.data;
        setTitle(data.title);
        setContent(data.content);
        setResources(data.resources);
      } catch (err) {
        toast.error("Failed to load task.");
      }
    };

    fetchTask();
  }, [taskId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/edit-task/${taskId}`,
        {
          title,
          content,
          resources,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Task updated successfully!");
      navigate(-1); // go back to task list
    } catch (err) {
      toast.error("Failed to update task.");
    }
  };

  return (
    <form onSubmit={handleUpdate} className="space-y-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-orange-600 text-center">
        Edit Task
      </h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="w-full border p-2 rounded"
        rows={3}
        required
      />
      <input
        value={resources}
        onChange={(e) => setResources(e.target.value)}
        placeholder="Resources"
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
      >
        Update Task
      </button>
    </form>
  );
};

export default EditTaskForm;
