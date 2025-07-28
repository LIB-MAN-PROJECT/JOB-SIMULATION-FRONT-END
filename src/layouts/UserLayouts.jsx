import { Outlet } from "react-router";
import Navbar from "../pages/user/components/Navbar";
import Footer from "../pages/user/components/Footer";

const UserLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-[4.5rem] bg-white text-gray-800">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default UserLayouts;
