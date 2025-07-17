import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & Tagline */}
        <div>
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-royal-400 to-purple-600 mb-2">
            CareerLaunch
          </h2>
          <p className="text-sm text-gray-400">
            Empowering students with real-world simulations and career-ready experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/simulations" className="hover:text-white">Simulations</Link></li>
            <li><Link to="/internships" className="hover:text-white">Internships</Link></li>
            <li><Link to="/mentors" className="hover:text-white">Mentorship</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:support@careerlaunch.com" className="text-purple-400 hover:underline">support@careerlaunch.com</a></li>
            <li>Phone: <a href="tel:+18005552337" className="text-purple-400 hover:underline">+1-800-555-CAREER</a></li>
            <li><Link to="/contact" className="text-purple-400 hover:underline">Contact Form</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} CareerLaunch. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
