import React from "react";
import { useNavigate } from "react-router";
import K from "../../constants";

const AllJobSimulations = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-black min-h-screen">
      {K.JOBSIMULATIONS.map((job) => (
        <div
          key={job._id}
          onClick={() => navigate(`/simulations/${job._id}`)}
          className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
        >
          <img
            src={job.imageUrl}
            alt={job.title}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-4 space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
            <p className="text-sm text-gray-600">
              {job.description.slice(0, 100)}...
            </p>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{job.companyName}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  job.isHiring ? "bg-green-500" : "bg-gray-400"
                } text-white`}
              >
                {job.isHiring ? "Hiring" : "Not Hiring"}
              </span>
            </div>

            <div className="text-xs text-gray-500 flex justify-between">
              <span>{job.field}</span>
              <span>{job.level}</span>
              <span>{job.duration} hrs</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllJobSimulations;
