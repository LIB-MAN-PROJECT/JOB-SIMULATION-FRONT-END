import { Link } from "react-router-dom"; // use "react-router" if your project requires it
import about from "../../assets/experience.jpeg";

const About = () => {
  return (
    <section
      className="bg-white py-24 px-6 font-sans overflow-x-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-14">
        {/* Image Section */}
        <img
          src={about}
          alt="Young professionals collaborating and learning"
          className="w-full max-w-md md:max-w-none md:w-5/12 rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
        />

        {/* Text Section */}
        <div className="w-full md:w-7/12 text-center md:text-left">
          <h4 className="text-xs font-bold tracking-widest uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Our Story
          </h4>

          <h2
            id="about-heading"
            className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight"
          >
            Launching Real Careers, One Experience at a Time
          </h2>

          <p className="text-gray-600 text-base mb-4 leading-relaxed">
            <strong>CareerLaunch</strong> empowers students, recent grads, and
            career shifters across Africa (and beyond) to gain practical,
            portfolio-ready experience through guided job simulations and skills
            programs.
          </p>

          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            We partner with forward-thinking employers, educators, and mentors
            to make skill-building accessible, inclusive, and confidence-boosting.
            Explore simulations, build work samples, and connect your learning to
            real opportunities.
          </p>

          <Link to="/about-us/meet-the-team">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition duration-300">
              Meet the Team
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
