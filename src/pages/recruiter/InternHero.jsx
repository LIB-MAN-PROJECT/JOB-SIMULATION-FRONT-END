import { Link } from "react-router";
import internImage from "../../assets/internship.jpeg"; // Replace with your image path

const InternHero = () => {
  return (
    // Full dark background with tight layout
    <section className="bg-black text-white pt-24 pb-16 px-6 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* // Left: Headline and text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Discover{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Internships & Entry-Level Jobs
            </span>{" "}
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-xl">
            Explore real opportunities from trusted companies. Apply with
            confidence and track your progress.
          </p>

          <div>
            <Link to="/simulations">
              <button className="mt-4 px-6 py-3 text-sm md:text-base font-semibold bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-md shadow-lg hover:shadow-purple-800/50 transition-all duration-300">
                Browse Openings
              </button>
            </Link>
          </div>
        </div>

        {/* // Right: Hero image with zoom on hover */}
        <div className="flex-1 overflow-hidden rounded-xl shadow-lg group max-w-xl">
          <img
            src={internImage}
            alt="Students working on laptops"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default InternHero;
