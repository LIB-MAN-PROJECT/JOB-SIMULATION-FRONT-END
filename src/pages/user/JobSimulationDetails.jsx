import { useParams, useNavigate } from "react-router";
import K from "../../constants";

const JobSimulationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = K.JOBSIMULATIONS.find((j) => j._id === id);

  if (!job) {
    return (
      <div className="pt-24 px-4 text-center">
        <h2 className="text-xl font-semibold text-red-500">
          Job Simulation not found.
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-600 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-blue-500 underline"
      >
        ← Back to All Job Simulations
      </button>

      <div className="bg-white shadow rounded-2xl overflow-hidden">
        <img
          src={job.imageUrl}
          alt={job.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                job.isHiring ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              {job.isHiring ? "Hiring" : "Not Hiring"}
            </span>
          </div>

          <p className="text-gray-700 text-sm">{job.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <strong>Company:</strong> {job.companyName}
            </div>
            <div>
              <strong>Field:</strong> {job.field}
            </div>
            <div>
              <strong>Level:</strong> {job.level}
            </div>
            <div>
              <strong>Duration:</strong> {job.duration} hrs
            </div>
          </div>

          {/* Optional future: show list of tasks */}
          {job.tasks?.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mt-4">Tasks:</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                {job.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobSimulationDetails;
