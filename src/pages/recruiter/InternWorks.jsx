import { L } from "../../constants";

const InternWorks = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
            Why Use Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Internship-Portal{" "}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
           More than just listings - our internship board is built for student growth.
          </p>
        </div>

        {/* Mapped Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {L.INTERNSHIP.map(({ title, description }) => (
            <div
              key={title}
              className="bg-black border border-white/20 rounded-xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternWorks;
