import RecruiterNavbar from "../pages/recruiter/components/RecruiterNavbar";
import { Outlet } from "react-router";

const RecruiterLayouts = ({ children }) => {
  return (
    <div className="flex">
      <RecruiterNavbar />
      <main className="ml-72 w-full p-6 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default RecruiterLayouts;
