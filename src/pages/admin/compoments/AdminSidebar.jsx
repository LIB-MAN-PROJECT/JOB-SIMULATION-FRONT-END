import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Correct nav links
  const navLinks = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Manage Students",
      path: "/admin-students",
      icon: <Users size={18} />,
    },
    {
      name: "Manage Recruiters",
      path: "/admin-recruiters",
      icon: <Users size={18} />,
    },
    {
      name: "Manage Companies",
      path: "/admin-companies",
      icon: <Building2 size={18} />,
    },
    {
      name: "Settings",
      path: "/admin-settings",
      icon: <Settings size={18} />,
    },
  ];

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    console.log("token:", token);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 transition-transform duration-300 ease-in-out w-64 p-4`}
      >
        <h2 className="text-xl font-bold mb-6 text-blue-600">
          <Link to="/admin">Admin Panel</Link>
        </h2>

        <nav className="space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-100 text-gray-700 ${
                  isActive ? "bg-blue-500 text-white" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              <span className="text-sm font-medium">{link.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-6 border-t pt-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 w-full rounded-md"
          >
            <LogOut size={18} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;



// import React from "react";
// import { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router";
// import {
//   LayoutDashboard,
//   Users,
//   Briefcase,
//   BookOpenCheck,
//   Building2,
//   FileText,
//   Settings,
//   LogOut,
//   Menu,
// } from "lucide-react";

// const AdminSidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const navLinks = [
//     { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={18} /> },
//     { name: "Users", path: "/admin/users", icon: <Users size={18} /> },
//     { name: "Recruiters", path: "/recruiters", icon: <Users size={18} /> },
//     {
//       name: "Companies",
//       path: "/company-table",
//       icon: <Building2 size={18} />,
//     },

//     { name: "Settings", path: "/admin-settings", icon: <Settings size={18} /> },
//   ];

//    const handleLogout = () => {
//     console.log("token",token);
//     console.log("token",token);
//    localStorage.removeItem("token");

//    navigate("/login");
//   };

//   return (
//     <>
//       <button
//         className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <Menu />
//       </button>

//       <aside
//         className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } sm:translate-x-0 transition-transform duration-300 ease-in-out w-64 p-4`}
//       >
//         <h2 className="text-xl font-bold mb-6 text-blue-600">
//           <Link to="/admin">Admin Panel</Link>
//         </h2>

//         <nav className="space-y-2">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-100 text-gray-700 ${
//                   isActive ? "bg-blue-500 text-white" : ""
//                 }`
//               }
//               onClick={() => setIsOpen(false)}
//             >
//               {link.icon}
//               <span className="text-sm font-medium">{link.name}</span>
//             </NavLink>
//           ))}
//         </nav>

//         <div className="mt-6 border-t pt-4">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 w-full rounded-md"
//           >
//             <LogOut size={18} />
//             <span className="text-sm font-medium">Logout</span>
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default AdminSidebar;
