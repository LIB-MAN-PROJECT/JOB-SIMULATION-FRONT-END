import K from "../../../constants";
import { Link, NavLink, useNavigate } from "react-router";
import { LogOut, UserCircle2, Settings2, Settings, UserPen } from "lucide-react";

const RecruiterNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <div className="bg-white shadow-md w-65 h-screen fixed left-0 top-0 p-6 flex flex-col justify-between z-50 border-r border-orange-200 text-gray-800">
      <div className="flex items-center justify-center mb-1">
        <Link to="/">
          <span className="text-3xl font-extrabold text-black/65 tracking-wide">
            Career<span className="text-purple-400">Launch</span>
          </span>
        </Link>
      </div>
      {/* <NavLink
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
            isActive
              ? "bg-orange-500 text-white shadow-md"
              : "text-gray-600 hover:bg-orange-100 hover:text-orange-600"
          }`
        }
      >
        <UserPen size={20} />
        <span>Profile</span>
      </NavLink> */}
      <br />

      <nav className="flex flex-col gap-4">
        {K.RECRUITERLINKS.map(({ icon, text, path }) => (
          <NavLink
            key={text}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-1 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-orange-100 hover:text-orange-600"
              }`
            }
            end
          >
            <span className="text-xl">{icon}</span>
            <span>{text}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 border-t border-orange-100 pt-6 space-y-4">
        {/* <NavLink
          to="/vendor/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
              isActive
                ? "bg-orange-500 text-white shadow-md"
                : "text-gray-600 hover:bg-orange-100 hover:text-orange-600"
            }`
          }
        >
          <Settings size={18} />
          <span>Settings</span>
        </NavLink> */}

        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-500 text-base hover:bg-red-100 transition"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>

      <div className="mt-6 text-xs text-center text-gray-400">
        &copy; 2025 CareerLaunch
      </div>
    </div>
  );
};

export default RecruiterNavbar;
