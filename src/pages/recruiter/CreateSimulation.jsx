
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";





export default function AddSimulationForm({ onSubmit}) {
    const navigate = useNavigate();
    const {
    register,
    handleSubmit,
     formState: { errors, isSubmitting },
  } = useForm();

   
const submitForm = async (data) => {
    console.log(data);

    const payload = new FormData();
    payload.append("imageUrl",data.imageUrl[0]);
    // payload.append("imagePublicId",data.imagePublicId);
    payload.append("title", data.title);
    payload.append("description", data.description);
    payload.append("field", data.field);
    // payload.append("companyId", data.companyId);
    // payload.append("companyName", data.companyName);
    payload.append("tasks", data.tasks);
    payload.append("resources", data.resources);
    
    payload.append("participants", data.participants);
    payload.append("level", data.level);
    payload.append("duration", data.duration);
    // payload.append("reviews", data.reveiws);
    payload.append("isHiring", data.isHiring);
    payload.append("isPublished", data.isPublished);
    // payload.append("createdAt", data.createdAt);
    
    try {
       const res =await apiCreateSimulation(payload);
       toast.success("Simulation Created Successfully!");
       navigate("/add-tasks");

    } catch (error) {
       console.log(error); 
    };

};

return(
    <form
    onSubmit={handleSubmit(submitForm)}
    className="max-w-lg mx-auto p-6 bg-white shadow rounded space-y-4" 
    >
        <h2 className="text-2xl font-bold text-center">Create A Simulation</h2>
        <div>
            <label className="block mb-1 font-medium">Image</label>
            <input type="file"
            {...register("imageUrl", {required: "image upload is required"})}
            className={`w-full p-2 border rounded ${
                errors.imageUrl && "border-red-500"
            }`}
            placeholder="image upload is required"
             />
             {errors.image && (
                <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>
             )}
        </div>

        {/* <div>
            <label className="block mb-1 font-medium">Image Public Id</label>
            <input type="text"
            {...register("imagePublicId", {required: "image public id is required"})}
            className={`w-full p-2 border rounded ${
                errors.imagePublicId && "border-red-500 "
            }`}
            placeholder="..."
            />
            {errors.imagePublicId && (
                <p className="text-red-500 text-sm">{errors.imagePublicId.message}</p>
            )}
        </div> */}

        <div>
            <label className="block mb-1 font-medium">Title</label>
           <input 
           {...register("title", {required: "Title is required"})}
           className={`w-full p-2 border rounded ${
            errors.title && "border-red-500"
           }`}
           placeholder="Title is required"
           />
           {errors.title && (
            <p className="text-red-500 tex-sm">{errors.title.message}</p>
           )}
        </div>

        <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
            {...register("description", {required: "Description is required"})}
            rows={2}
            className="w-full p-2 border rounded"
            placeholder="Tell us about the tasks"
            />
            {errors.description && (
                <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
        </div>

        <div>
            <label className="block mb-1 font-medium">Field</label>
           <input
          {...register("field", { required: "Field is required" })}
          className={`w-full p-2 border rounded ${
            errors.recipeName && "border-red-500"
          }`}
          placeholder="Enter type course"
        />
            
            {errors.field && (
                <p>{errors.field.message}</p>
            )}
        </div>

        {/* <div>
            <label className="block mb-1 font-medium">Company Id</label>
            <input 
            {...register("companyId", {required: "Company Id"})}
            className={`w-full p-2 border rounded ${
                errors.companyId && "border-red-500"
            }`}
            placeholder="Enter company Code"
            />
            {errors.companyId && (
                <p className="text-red-500 text-sm">{errors.companyId.message}</p>
            )}
        </div>

        <div>
            <label className="block mb-1 font-medium">Company Name</label>
            <input 
            {...register("companyName", {required: "Company Name is required"})}
            className={`w-full p-2 border rounded ${
                errors.companyName && "border-red-500"

            }`}
            placeholder="Enter Company Name Here"
            />
            {errors.companyName && (
                <p className="text-red-500 text-sm">{errors.companyName.message}</p>
            )}
        </div> */}

        <div>
            <label className="block mb-1 font-medium">Tasks</label>
            <input 
            {...register("tasks", {required: "Tasks are required" })}
            className={`w-full p-2 border rounded ${
                errors.tasks && "border-red-500"
            }`}
            placeholder="Task 1, Task 2, Task 3"
            />
            {errors.tasks && (
                <p className="text-red-500 text-sm">{errors.tasks.message}</p>
            )}
        </div>
        <div>
            <label className="block mb-1 font-medium">Resources</label>
            <input 
            {...register("recourses", {required: "Resources are required" })}
            className={`w-full p-2 border rounded ${
                errors.tasks && "border-red-500"
            }`}
            placeholder="Enter Resources"
            />
            {errors.tasks && (
                <p className="text-red-500 text-sm">{errors.resources.message}</p>
            )}
        </div>

        {/* <div>
            <label className="block mb-1 font-medium">Participants</label>
            <input
            {...register("participants", {required: "Participants are Required"})}
            className={`w-full p-2 border rounded ${
                errors.participants && "border-red-500"
            }`}
            placeholder="Number of Participants"
            />
            {errors.participants && (
                <p className="text-red-500 text-sm">{errors.participants.message}</p>
            )}
        </div> */}

        <div>
            <label className="block mb-1 font-medium">Level</label>
            <select 
            {...register("level", {required: "Level is required"})}
            className={`w-full p-2 border rounded ${
                errors.level && "border-red-500"
            }`}
            >
                <option value="">Select One</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select>
            {errors.Level && (
                <p className="text-red-500 text-sm">{errors.level.message}</p>
            )}
           
        </div>

        <div>
            <label className="block mb-1 font-medium">Duration</label>
            <input 
            {...register("duration", {required: "Duration is required"})}
            className={`w-full p-2 border rounded ${
                errors.duration && "border-red-500"
            }`}
            placeholder="Number of Weeks"
            />
            {errors.duration && (
                <p className="text-red-500 text-sm">{errors.duration.message}</p>
            )}
        </div>

        {/* <div>
            <label className="block mb-1 font-medium">Reviews</label>
            <input 
            {...register("reviews", {required: "Reviews are required"})}
            className={`w-full p-2 border rounded ${
                errors.reviews && "border-red-500"
            }`}
            placeholder="Give A Review"
            />
            {errors.reviews && (
                <p className="text-red-500 text-sm">{errors.reviews.message}</p>
            )}
        </div> */}

        <div>
            <label className="block mb-1 font-medium">Hiring</label>
            <select 
            {...register("isHiring", {required: "Hiring is required"})}
            className={`w-full p-2 border rounded ${
                errors.reviews && "border-red-500"
            }`}

            >
                <option value="">Select One</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
            </select>
            {errors.reviews && (
                <p className="text-red-500 text-sm">{errors.isHiring.message}</p>
            )}
        </div>

        <div>
            <label className="block mb-1 font-medium">Published</label>
            <select 
            {...register("isPublished", {required:"Published is Required"})}
             className={`w-full p-2 border rounded ${
                errors.reviews && "border-red-500"
            }`}
            >
                <option value="">Select One</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
            </select>
            {errors.isPublished && (
                <p className="text-red-500 text-sm">{errors.isPublished.message}</p>
            )}
        </div>

        {/* <div>
            <label className="block mb-1 font-medium">Id</label>
            <input 
            {...register("id", {required: "Id is required"})}
            className={`w-full p-2 border rounded ${
                errors.id && "border-red-500"
            }`}
            placeholder="Enter your unique id"
            />
             {errors.id && (
                <p className="text-red-500 text-sm">{errors.id.message}</p>
            )}
        </div> */}
        {/* <div>
            <label className="block mb-1 font-medium">Created At</label>
            <input 
            {...register("createdAt", {required: "Created At is required"})}
            className={`w-full p-2 border rounded ${
                errors.createdAt && "border-red-500"
            }`}
            placeholder="Enter Today's Date"
            />
             {errors.createdAt && (
                <p className="text-red-500 text-sm">{errors.createdAt.message}</p>
            )}
        </div> */}

         <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        {isSubmitting ? "Submitting..." : "Add Simulation"}
      </button>

    </form>
);
}
