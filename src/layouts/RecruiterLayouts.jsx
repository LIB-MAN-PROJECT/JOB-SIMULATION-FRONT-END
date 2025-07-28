import RecruiterNavbar from "../pages/recruiter/components/RecruiterNavbar";
import { Outlet } from "react-router";

const RecruiterLayouts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <RecruiterNavbar />

      {/* Main Content */}
      <div className="lg:ml-72 pt-16 lg:pt-0 px-4 sm:px-6 lg:px-8 py-6 transition-all duration-300">
        <Outlet />
      </div>
    </div>
  );
};

export default RecruiterLayouts;
