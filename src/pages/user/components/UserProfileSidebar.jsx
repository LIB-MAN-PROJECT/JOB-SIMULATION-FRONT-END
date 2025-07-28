import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogOut, UserCircle2, Settings2 } from "lucide-react";
import { user } from "../../../constants";
import { motion } from "framer-motion";

const UserProfileSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white w-72 h-screen fixed left-0 top-0 p-6 flex flex-col justify-between border-r border-teal-100 z-50 shadow-md"
    >
      {/* Logo */}
      <div className="text-center mb-10">
        <Link to="/" className="text-3xl font-extrabold text-slate-800">
          Career<span className="text-teal-500">Launch</span>
        </Link>
      </div>

      {/* Profile Nav */}
      <div className="space-y-6">
        <NavLink
          to="/user/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
              isActive
                ? "bg-gradient-to-r from-teal-500 to-orange-400 text-white shadow-md"
                : "text-slate-700 hover:bg-teal-50"
            }`
          }
        >
          <UserCircle2 size={20} />
          <span>Profile</span>
        </NavLink>

        {/* Main Nav */}
        <nav className="flex flex-col gap-3">
          {user.USERSIDEBAR.map(({ icon, title, path }) => (
            <NavLink
              key={title}
              to={path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-teal-500 to-orange-400 text-white shadow-md"
                    : "text-slate-700 hover:bg-teal-50"
                }`
              }
            >
              <span className="text-xl">{icon}</span>
              <span>{title}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer Controls */}
      <div className="mt-8 border-t border-gray-100 pt-6 space-y-4">
        <NavLink
          to="/user/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all ${
              isActive
                ? "bg-gradient-to-r from-teal-500 to-orange-400 text-white"
                : "text-slate-700 hover:bg-teal-50"
            }`
          }
        >
          <Settings2 size={20} />
          <span>Settings</span>
        </NavLink>

        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 font-medium transition"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>

      <p className="text-xs text-center text-slate-400 mt-6">
        &copy; 2025 CareerLaunch
      </p>
    </motion.aside>
  );
};

export default UserProfileSidebar;
