import AdminSidebar from "./compoments/AdminSidebar";



const DashboardCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded shadow text-center">
    <p className="text-gray-500">{title}</p>
    <h3 className="text-2xl font-bold">{value}</h3>
  </div>
);

export default function AdminDashboard() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Welcome, Admin 👋</h1>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <DashboardCard title="Total Users" value="120" />
          <DashboardCard title="Recruiters" value="15" />
          <DashboardCard title="Simulations" value="42" />
          <DashboardCard title="Internships" value="8" />
          <DashboardCard title="Applications" value="35" />
        </div>

        
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="bg-white p-4 rounded shadow text-gray-500">
            Recent platform activity will be shown here.
          </div>
        </div>
      </div>
    </div>
  );
}
