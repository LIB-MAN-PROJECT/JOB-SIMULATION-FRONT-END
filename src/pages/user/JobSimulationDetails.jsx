import { useParams, useNavigate } from "react-router";
import K from "../../constants";

const JobSimulationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = K.JOBSIMULATIONS.find((j) => j._id === id);

  if (!job) {
    return (
      <div className="pt-24 px-4 text-center min-h-screen bg-black text-white">
        <h2 className="text-xl font-semibold text-red-500">
          Job Simulation not found.
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-400 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[85vh]">
        <img
          src={job.imageUrl}
          alt={job.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-6 pt-32 pb-10 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                {job.title}
              </h1>
              <p className="mt-3 text-lg text-white/80">{job.companyName}</p>
              <p className="mt-4 text-gray-300 max-w-xl">{job.description}</p>
              <div className="mt-4 text-sm space-x-4 text-gray-300">
                <span>{job.field}</span> • <span>{job.level}</span> •{" "}
                <span>{job.duration} hrs</span>
              </div>
            </div>

            <div className="bg-white text-slate-900 p-6 rounded-xl shadow-xl w-full sm:w-[320px]">
              {job.isHiring && (
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold rounded-full mb-2">
                  HIRING OPPORTUNITY
                </span>
              )}
              <h3 className="text-lg font-bold mb-2">Launch Your Career</h3>
              <ul className="text-sm text-black mb-4 space-y-2">
                <li>
                  🚀 Experience real-world work in {job.duration} hours, at your
                  own pace.
                </li>
                <li>
                  🎯 Stand out to recruiters at <strong>{job.companyName}</strong>.
                </li>
                <li>💼 Add this to your resume or LinkedIn.</li>
              </ul>
              <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition font-semibold">
                Start Free Simulation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 mt-12 space-y-16 pb-20">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Overview</h2>
          <p className="text-slate-700 text-sm leading-relaxed bg-gray-50 p-6 rounded-xl shadow-sm">
            {job.overview}
          </p>
        </section>

        {/* Tasks */}
        {job.tasks?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Your Mission</h2>
            <ul className="list-disc pl-6 text-sm text-slate-800 space-y-2 bg-gray-50 p-6 rounded-xl shadow-sm">
              {job.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-100 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-slate-700">
            <div>
              <div className="text-blue-600 text-3xl font-bold mb-2">1</div>
              <h3 className="font-semibold text-lg mb-2">Explore & Enroll</h3>
              <p className="text-sm">
                Browse simulations that match your interests or goals. Enroll in
                one — it's completely free.
              </p>
            </div>
            <div>
              <div className="text-blue-600 text-3xl font-bold mb-2">2</div>
              <h3 className="font-semibold text-lg mb-2">Complete at Your Pace</h3>
              <p className="text-sm">
                Dive into tasks that reflect real job responsibilities. No
                deadlines. No pressure.
              </p>
            </div>
            <div>
              <div className="text-blue-600 text-3xl font-bold mb-2">3</div>
              <h3 className="font-semibold text-lg mb-2">Showcase Your Growth</h3>
              <p className="text-sm">
                Add your simulation to your resume, LinkedIn, or portfolio to
                impress future employers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobSimulationDetails;
