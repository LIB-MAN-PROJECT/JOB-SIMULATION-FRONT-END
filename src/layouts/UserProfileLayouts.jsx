import UserProfileSidebar from "../pages/user/components/UserProfileSidebar";
import { Outlet } from "react-router";

const UserProfileLayouts = () => {
  return (
    <div className="flex">
      <UserProfileSidebar />

      <main
        className="w-full p-4 pt-6 min-h-screen transition-all duration-300
                   lg:ml-72" // only apply margin on large screens and above
      >
        <Outlet />
      </main>
    </div>
  );
};

export default UserProfileLayouts;
