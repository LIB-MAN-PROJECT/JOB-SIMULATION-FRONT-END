import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#050c2a] text-gray-400 px-6 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div className="space-y-5">
          <h2 className="text-white text-2xl font-bold tracking-tight">CareerLaunch</h2>
          <p className="text-sm max-w-xs">
            Real-world simulations. Career-ready skills. Future-driven impact.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Navigation Sections */}
        {[
          {
            title: "Explore",
            tagline: "Find your path",
            links: [
              { to: "/simulations", label: "Simulations" },
              { to: "/internships", label: "Internships" },
              { to: "/mentors", label: "Mentorship" },
              { to: "/faq", label: "FAQs" },
            ],
          },
          {
            title: "Company",
            tagline: "Meet the team",
            links: [
              { to: "/about", label: "About Us" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact" },
            ],
          },
          {
            title: "Legal",
            tagline: "Stay informed",
            links: [
              { to: "/terms", label: "Terms of Use" },
              { to: "/privacy", label: "Privacy Policy" },
            ],
          },
        ].map(({ title, tagline, links }) => (
          <div key={title}>
            <h4 className="text-white text-sm font-semibold mb-1">{title}</h4>
            <p className="text-xs text-gray-500 mb-3">{tagline}</p>
            <ul className="space-y-2 text-sm">
              {links.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="hover:text-white transition duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CareerLaunch. Let’s shape the future together.
      </div>
    </footer>
  );
};

export default Footer;
