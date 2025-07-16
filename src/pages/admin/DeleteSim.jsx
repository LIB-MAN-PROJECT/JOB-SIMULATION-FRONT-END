import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify';
import LoadingSpinner from '../../components/LoadingSpinner';

const DeleteSim = () => {
    const { id } = useParams();
    const [simulations, setSimulations] = useState(null);
    const navigate = useNavigate();

    const handleDelete = async (id) => {

        try {
            const res = await apiDeleteSim(id);
            toast.success("Simulation deleted successfully!");
            fetchSimulation();


            
        } catch (error) {
            toast.error("Failed to delete Simulation");
            
        }
    };

    const fetchSimulation = async () => {
        try {
          const res = await apiFetchSimulations();
          setRecipes(res.data.advert) 
        } catch (error) {
            console.error("Failed to fetch Simulation:", error.message);
            
        }
    };
    useEffect(() => {
        fetchSimulation();
    }, [id]);

    if (!simulations) return <LoadingSpinner/>;
  return (
   <section>
    {simulations.length > 0 ? (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {simulations.map((simulation) => (
               <div
               key={simulation._id}
               className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition'
               >
                <img 
                src={simulation.imageUrl}
                alt={simulation.simulationName}
                className='w-full h-64 object-cover'
                />
                <div className='p-5'>
                    <h3 className='text-xl font-semibold text-gray-800 mb-1'>{simulation.simulationTitle}</h3>
                    <p  className="text-orange-600 font-bold mb-1">{simulation.description}simulation.</p>
                    <p  className="text-orange-600 font-bold mb-1">{simulation.field}</p>
                    <p  className="text-orange-600 font-bold mb-1">{simulation.companyId}</p>
                    <p  className="text-orange-600 font-bold mb-1">{simulation.companyName}</p>
                    <p  className="text-orange-600 font-bold mb-1">{simulation.tasks}</p>
                    <p  className="text-orange-600 font-bold mb-1">{simulation.participants}</p>
                    <p  className="text-orange-600 font-bold mb-1">{simulation.level}</p>
                    <p  className="text-orange-600 font-bold mb-1">{simulation.duration}</p>
                    <p  className="text-orange-600 font-bold mb-1">{simulation.reviews}</p>
                    <p  className="text-orange-600 font-bold mb-1">{simulation.isHiring}</p>
                    <p  className="text-orange-600 font-bold mb-1">{simulation.isPublished}</p>
                     <button
                  className="mt-4 w-full py-2 bg-black text-white rounded-md hover:bg-red-600"
                  onClick={() => {
                    handleDelete(simulation._id);
                  }}
                >
                  Delete
                </button>

                </div>

               </div> 
            ))}

        </div>
    ) : (
        <p className="text-center text-gray-500">No recipes found.</p>
    )}

   </section>
  );
};

export default DeleteSim;