import { FaLinkedin, FaGithub } from "react-icons/fa";

const TEAM = [
  {
    name: "Ebo Rice",
    role: "Back-end Developer",
    imageUrl: "https://via.placeholder.com/150",
    bio: "Back-end developer learning and growing with every build.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Juliet Esinam",
    role: "Back-end Developer",
    imageUrl: "https://via.placeholder.com/150",
    bio: "Back-end developer learning and growing with every build.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Jedidah Roberts",
    role: "Front-end Developer",
    imageUrl: "https://via.placeholder.com/150",
    bio: "Passionate about creating stunning UIs using React and Tailwind CSS.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Jennifer Offin",
    role: "Front-end Developer",
    imageUrl: "https://via.placeholder.com/150",
    bio: "Crafts clean user interfaces with React and Tailwind CSS.",
    linkedin: "#",
    github: "#",
  },
];

const Team = () => {
  return (
    <section className="bg-[#fff6f2] text-slate-800 py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Meet Our{" "}
            <span className="text-teal-600">Founding Team</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            A diverse group of thinkers, builders, and dreamers shaping the future.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {TEAM.map(({ name, role, imageUrl, bio, linkedin, github }) => (
            <div
              key={name}
              className="bg-white border border-teal-100 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover rounded-full border-4 border-teal-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{name}</h3>
              <p className="text-sm text-teal-600 font-medium mb-3">{role}</p>
              <p className="text-sm text-gray-600 mb-4">{bio}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 transition"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 transition"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
