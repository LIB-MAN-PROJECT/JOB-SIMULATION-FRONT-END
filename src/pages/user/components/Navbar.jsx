import K from "../../../constants";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsTransparent(currentScroll < lastScrollY || currentScroll < 10);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur transition-all duration-300 ${
        isTransparent ? "bg-purple-950" : "bg-black/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-white tracking-tight"
        >
          Career<span className="text-purple-400">Launch</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {K.USERLINKS.map(({ text, path, children, dropdown }) => (
            <div key={text} className="relative group">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-sm font-medium px-1 transition border-b-2 ${
                    isActive
                      ? "text-white border-purple-500"
                      : "text-gray-300 border-transparent hover:text-white hover:border-gray-500"
                  }`
                }
                end
              >
                {text}
                {dropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </NavLink>

              {dropdown && children && (
                <div className="absolute left-0 mt-3 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out bg-[#181818] shadow-xl rounded-md border border-gray-700 min-w-[200px] z-50">
                  {children.map((child, index) => (
                    <Link
                      key={index}
                      to={child.path}
                      className="block px-5 py-2 text-sm text-gray-300 hover:bg-purple-900 hover:text-white transition"
                    >
                      {child.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/sign-up">
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-800 hover:text-white px-4 py-2 rounded-md font-medium transition">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-4 py-2 rounded-md font-semibold shadow-md transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
