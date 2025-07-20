import K from "../../../constants";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white/80"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 tracking-tight"
        >
          Career
          <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
            Launch
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          {K.USERLINKS.map(({ text, path, children, dropdown }) => (
            <div key={text} className="relative group">
              <NavLink
                to={path}
                end
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 px-1 border-b-2 transition ${
                    isActive
                      ? "border-teal-600 text-gray-900"
                      : "border-transparent hover:border-teal-500 hover:text-black"
                  }`
                }
              >
                {text}
                {dropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </NavLink>

              {dropdown && children && (
                <div className="absolute left-0 mt-3 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto min-w-[200px] z-50">
                  {children.map((child, i) => (
                    <Link
                      key={i}
                      to={child.path}
                      className="block px-5 py-2 text-gray-700 hover:bg-gray-100 transition"
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
            <button className="border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-4 py-2 rounded-md font-medium transition">
              Get Started 
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:brightness-110 text-white px-4 py-2 rounded-md font-semibold shadow-sm transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
