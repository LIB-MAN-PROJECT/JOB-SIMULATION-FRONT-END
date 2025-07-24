import RecruiterNavbar from "./components/RecruiterNavbar";
import RNavbar from "./components/RNavbar";

const RecruiterDashboard = () => {
  return (
    <div className="p-6 flex bg-gray-100 min-h-screen">
        <div>
              <RecruiterNavbar/>
        </div>
        <div className="flex-1 flex flex-col ml-70">
<RNavbar/>
        
      <h1 className="text-2xl font-bold mb-6">Welcome, Recruiter 👋</h1>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard title="Total Simulations" value="12" />
        <DashboardCard title="Applicants" value="37" />
        <DashboardCard title="Hired Interns" value="5" />
        <DashboardCard title="Current Simulations" value="10" />
      </div>

    

      
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Recent Simulations</h2>
        <ul className="space-y-3">
          <li className="bg-white p-4 rounded shadow">
            <p className="font-medium">Marketing Strategy Simulation</p>
            <p className="text-sm text-gray-500">12 participants • 3 hired</p>
          </li>
          <li className="bg-white p-4 rounded shadow">
            <p className="font-medium">Frontend Development Challenge</p>
            <p className="text-sm text-gray-500">20 participants • 5 shortlisted</p>
          </li>
          <li className="bg-white p-4 rounded shadow">
            <p className="font-medium">Product Management Simulation</p>
            <p className="text-sm text-gray-500">8 participants • Ongoing</p>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded shadow text-center">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default RecruiterDashboard;
