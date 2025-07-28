import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogOut, UserCircle2, Settings2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { user } from "../../../constants";

const UserProfileSidebar = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const sidebarLinks = (
    <>
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
          onClick={() => setIsMobileOpen(false)}
        >
          <UserCircle2 size={20} />
          <span>Profile</span>
        </NavLink>

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
              onClick={() => setIsMobileOpen(false)}
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
          onClick={() => setIsMobileOpen(false)}
        >
          <Settings2 size={20} />
          <span>Settings</span>
        </NavLink>

        <button
          onClick={() => {
            setIsMobileOpen(false);
            handleLogout();
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 font-medium transition"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>

      <p className="text-xs text-center text-slate-400 mt-6">
        &copy; 2025 CareerLaunch
      </p>
    </>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white border rounded-md shadow-md"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col justify-between w-72 h-screen bg-white border-r border-teal-100 p-6 shadow-md fixed left-0 top-0 z-40">
        {sidebarLinks}
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar Drawer */}
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-72 h-screen bg-white p-6 z-50 shadow-xl border-r border-teal-100 flex flex-col justify-between"
            >
              <div className="flex justify-end mb-4">
                <button onClick={() => setIsMobileOpen(false)} className="text-gray-600">
                  <X size={24} />
                </button>
              </div>
              {sidebarLinks}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default UserProfileSidebar;
