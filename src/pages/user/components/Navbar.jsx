import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useAuth } from "../../../services/useAuth";
import K from "../../../constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const navigate = useNavigate();
  const { user, logout } = useAuth();


  console.log(user);
  
  const isVerified = () => {
    if (user?.role === "student") {
      return "/user";
    } else if (user?.role === "recruiter") {
      if (user.isVerified) {
        return "/recruiter-dashboard";
      }
      // return "/pending-verification";
       return "/recruiter-dashboard";
    }

    return "/";
  };

  const dashboardLink = isVerified();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow" : "bg-white/80"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-gray-900 tracking-tight whitespace-nowrap"
        >
          Career
          <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
            Launch
          </span>
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-800"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          {K.USERLINKS.map(({ text, path, children, dropdown }) => (
            <div
              key={text}
              className="relative group"
              onMouseEnter={() => dropdown && setDropdownOpen(text)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 px-2 pb-1 border-b-2 transition ${
                    isActive
                      ? "border-teal-600 text-gray-900"
                      : "border-transparent hover:border-teal-500 hover:text-black"
                  }`
                }
              >
                {text}
                {dropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      dropdownOpen === text ? "rotate-180" : ""
                    }`}
                  />
                )}
              </NavLink>

              {/* Dropdown */}
              {dropdown && children && dropdownOpen === text && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-100 z-50 min-w-[200px]">
                  {children.map((child, idx) => (
                    <Link
                      key={idx}
                      to={child.path}
                      className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {child.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link to={dashboardLink}>
                <button className="border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-4 py-2 rounded-md transition">
                  Dashboard
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-teal-600 hover:bg-teal-800 text-white px-4 py-2 rounded-md font-semibold transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-up">
                <button className="border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-4 py-2 rounded-md transition">
                  Get Started
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:brightness-110 text-white px-4 py-2 rounded-md font-semibold transition">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-4 text-sm text-gray-700">
          {K.USERLINKS.map(({ text, path }) => (
            <NavLink
              key={text}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 border-b border-gray-200"
            >
              {text}
            </NavLink>
          ))}
          {user ? (
            <>
              <Link to={dashboardLink}>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full mt-2 border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-4 py-2 rounded-md transition"
                >
                  Dashboard
                </button>
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-2 bg-teal-600 hover:bg-teal-800 text-white px-4 py-2 rounded-md transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-up">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full mt-2 border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-4 py-2 rounded-md transition"
                >
                  Get Started
                </button>
              </Link>
              <Link to="/login">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full mt-2 bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition"
                >
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
