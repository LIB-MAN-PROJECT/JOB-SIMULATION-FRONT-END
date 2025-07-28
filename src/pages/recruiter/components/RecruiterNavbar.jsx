import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { Menu, X, LogOut, Settings2 } from "lucide-react";
import K from "../../../constants";

const RecruiterNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Topbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b z-50 flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Career<span className="text-teal-500">Launch</span>
        </Link>
        <button onClick={() => setIsOpen(true)} className="text-gray-800">
          <Menu size={26} />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg border-r transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <Link to="/" className="text-2xl font-extrabold text-gray-800">
            Career<span className="text-teal-500">Launch</span>
          </Link>
          <button onClick={() => setIsOpen(false)} className="lg:hidden">
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-2 px-4 py-4">
          {K.RECRUITERLINKS.map(({ icon, text, path }) => (
            <NavLink
              key={text}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-green-400 to-orange-400 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
              end
            >
              {icon}
              <span>{text}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto px-4 py-4 border-t">
          <NavLink
            to="/vendor/settings"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition font-medium ${
                isActive
                  ? "bg-gradient-to-r from-teal-400 to-teal-700 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <Settings2 size={20} />
            <span>Settings</span>
          </NavLink>

          <button
            onClick={handleLogout}
            className="mt-2 flex items-center gap-2 px-4 py-2 rounded-md text-red-500 hover:bg-red-100 transition w-full"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>

          <p className="text-xs text-center text-gray-400 mt-4">
            &copy; 2025 CareerLaunch
          </p>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
        />
      )}
    </>
  );
};

export default RecruiterNavbar;
