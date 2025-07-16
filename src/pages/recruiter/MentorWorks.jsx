import React from "react";
import { L } from "../../constants";

const MentorWorks = () => {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16">
          Available <span className="text-purple-500">Support Options </span>
        </h2>

        {/* Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {L.RECRUITERWORKS.map(({ icon, title, description, path }, idx) => (
            <div
              key={idx}
              className="w-full h-full bg-black border border-white/20 rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="bg-white/10 rounded-full p-3">{icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <div className="w-10 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 mb-4" />
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorWorks;
