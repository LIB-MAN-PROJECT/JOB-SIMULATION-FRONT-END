import UserProfileSidebar from "../pages/user/components/UserProfileSidebar";
import { Outlet } from "react-router";

const UserProfileLayouts = ({ children }) => {
  return (
    <div className="flex"> 
    
      <UserProfileSidebar />
      <main className="ml-72 w-full p-6 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default UserProfileLayouts;
