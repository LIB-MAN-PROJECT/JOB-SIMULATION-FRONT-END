import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTasksForm = ({ onSubmitTasks }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
    console.log(data);
    toast.success("Tasks and resources added!");
    if (onSubmitTasks) onSubmitTasks(data); 
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto bg-white shadow p-6 rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-orange-600 text-center">Add Tasks & Resources</h2>

      {[1, 2, 3].map((num) => (
        <div key={num}>
          <label className="block mb-1 font-medium">Task {num}</label>
          <input
            {...register(`task${num}`, { required: `Task ${num} is required` })}
            placeholder={`Enter task ${num}`}
            className={`w-full p-2 border rounded ${
              errors[`task${num}`] && "border-red-500"
            }`}
          />
          {errors[`task${num}`] && (
            <p className="text-red-500 text-sm">{errors[`task${num}`].message}</p>
          )}
        </div>
      ))}

      <div>
        <label className="block mb-1 font-medium">Resources</label>
        <textarea
          {...register("resources", { required: "Resources are required" })}
          placeholder="List or describe the resources for the simulation..."
          rows={3}
          className={`w-full p-2 border rounded ${
            errors.resources && "border-red-500"
          }`}
        />
        {errors.resources && (
          <p className="text-red-500 text-sm">{errors.resources.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
      >
        Submit
      </button>
    </form>
  );
};

export default AddTasksForm;
