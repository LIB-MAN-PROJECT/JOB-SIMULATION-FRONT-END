import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify';

const EditSimulation = () => {
    const { id } =useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [simulation, setSimulation] = useState({});

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        values: {
           title: simulation.title,
           description: simulation.description,
           field: simulation.field,
        //    companyId: simulation.companyId,
        //    companyName: simulation.companyName,
           tasks: simulation.tasks,
           resources: simulation.resources,
        //    particitants: simulation.participants,
           level: simulation.level,
           duration: simulation.duration,
        //    reviews: simulation.reviews,
           isHiring: simulation.isHiring,
           isPublished: simulation.isPublished,

        },
    })

    useEffect(() => {
        const fetchSim = async () => {
            try {
                const res = await apiFetchSingleSim(id);
                setSimulation(res.data); 
            } catch (error) {
              toast.error("Failed to load sim data");  
            } finally {
                setLoading(false);
            }
        };

        fetchSim();
    },[id])

    const submitForm =async (data) => {
        try {
            await apiFetchSim(id, data);
            toast.success("Simulation updated Successfully!");
            navigate("/recruiter-dashboard");
        } catch (error) {
          toast.error("Failed to update sim")  
        }
    };

    if (loading) return <p className='text-center py-8'>Loading sim details...</p>
    
  return (
    <form 
    onSubmit={handleSubmit(submitForm)}
    className='max-w-lg mx-auto p-6 bg-white shadow rounded space-y-4'
    >
<h2 className='text-2xl font-bold text-center text-orange-600'>
    Edit Your Simulation
</h2>
<div>
    <label className='block mb-1 font-medium'>Title</label>
    <input 
    {...register("title", {required: "title is required"})} 
    className={`w-full p-2 border rounded ${
        errors.title && "border-red-500"
    }`}/>
    {errors.title && (
        <p className='text-red-500 text-sm'>{errors.title.message}</p>
    )}
</div>

<div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          rows={3}
          className="w-full p-2 border rounded"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      <div>
    <label className='block mb-1 font-medium'>Field</label>
    <input 
    {...register("field", {required: "field is required"})} 
    className={`w-full p-2 border rounded ${
        errors.field && "border-red-500"
    }`}/>
    {errors.field && (
        <p className='text-red-500 text-sm'>{errors.title.message}</p>
    )}
</div>

<div>
    <label className='block mb-1 font-medium'>Tasks</label>
    <input 
    {...register("tasks", {required: "tasks is required"})} 
    className={`w-full p-2 border rounded ${
        errors.tasks && "border-red-500"
    }`}/>
    {errors.tasks && (
        <p className='text-red-500 text-sm'>{errors.title.message}</p>
    )}
</div>

<div>
    <label className='block mb-1 font-medium'>Resources</label>
    <input 
    {...register("resources", {required: "resources is required"})} 
    className={`w-full p-2 border rounded ${
        errors.resources && "border-red-500"
    }`}/>
    {errors.resources && (
        <p className='text-red-500 text-sm'>{errors.resources.message}</p>
    )}
</div>

<div>
    <label className='block mb-1 font-medium'>Level</label>
    <input 
    {...register("level", {required: "level is required"})} 
    className={`w-full p-2 border rounded ${
        errors.level && "border-red-500"
    }`}/>
    {errors.level && (
        <p className='text-red-500 text-sm'>{errors.level.message}</p>
    )}
</div>

<div>
    <label className='block mb-1 font-medium'>Duration</label>
    <input 
    {...register("duration", {required: "duration is required"})} 
    className={`w-full p-2 border rounded ${
        errors.duration && "border-red-500"
    }`}/>
    {errors.duration && (
        <p className='text-red-500 text-sm'>{errors.duration.message}</p>
    )}
</div>

<div>
    <label className='block mb-1 font-medium'>Hiring</label>
    <input 
    {...register("isHiring", {required: "ishiring is required"})} 
    className={`w-full p-2 border rounded ${
        errors.isHiring && "border-red-500"
    }`}/>
    {errors.isHiring && (
        <p className='text-red-500 text-sm'>{errors.isHiring.message}</p>
    )}
</div>

<div>
    <label className='block mb-1 font-medium'>Published</label>
    <input 
    {...register("isPublished", {required: "published is required"})} 
    className={`w-full p-2 border rounded ${
        errors.isPublished && "border-red-500"
    }`}/>
    {errors.isPublished && (
        <p className='text-red-500 text-sm'>{errors.isPublished.message}</p>
    )}
</div>

<button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
      >
        {isSubmitting ? "Updating..." : "Update Simulation"}
      </button>
    
    </form>
  );
}

export default EditSimulation