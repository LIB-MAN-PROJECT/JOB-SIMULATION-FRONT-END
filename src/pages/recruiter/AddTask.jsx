import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import task from "../../assets/addtask.jpg"

const AddTasksForm = () => {
  const { simulationId } = useParams(); 
  const navigate = useNavigate();

  const [taskTitle, setTaskTitle] = useState("");
  const [content, setContent] = useState("");
  const [resources, setResources] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddTask = async (e) => {
    e.preventDefault();

    if (!taskTitle || !content || !resources) {
      toast.error("All fields are required");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      title: taskTitle,
      content,
      resources,
    };

    try {
      const res = await axios.post(
        `https://job-simulation-backend-3e6w.onrender.com/api/recruiter/create-task/${simulationId}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Task added successfully!");
      setTasks([...tasks, payload]);
      setTaskTitle("");
      setContent("");
      setResources("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add task");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinish = () => {
    if (tasks.length < 3) {
      toast.error("You must add at least 3 tasks");
      return;
    }
    toast.success("Simulation setup complete!");
    navigate("/recruiter-dashboard");
  };

  return (
    <div className="flex gap-10 justify-between w-[90%] mx-auto mt-10">
      <div className="w-[50%]">
        <img className="h-170 w-250" src={task} alt="" />
      </div>
    <form
      onSubmit={handleAddTask}
      className="max-w-xl mx-auto p-6 w-[50%] mt-10 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-blue-600">Add Tasks</h2>

      <div>
        <label className="block mb-1 font-medium">Task Title</label>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Content</label>
        <textarea
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Resources</label>
        <input
          type="text"
          value={resources}
          onChange={(e) => setResources(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {isSubmitting ? "Adding..." : `Add Task ${tasks.length + 1}`}
      </button>

      {tasks.length >= 3 && (
        <button
          type="button"
          onClick={handleFinish}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mt-2"
        >
          Finish & Publish Simulation
        </button>
      )}
    </form>
    </div>
  );
};

export default AddTasksForm;
