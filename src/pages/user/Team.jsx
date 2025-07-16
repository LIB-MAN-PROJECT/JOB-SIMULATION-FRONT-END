import K from "../../constants";

const Team = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Founding Team
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            A diverse group of thinkers, builders, and dreamers shaping the future.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {K.TEAM.map(({ name, role, imageUrl, bio }) => (
            <div
              key={name}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md hover:shadow-2xl"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover rounded-full border-2 border-purple-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{name}</h3>
              <p className="text-sm text-purple-400 text-center mb-3">{role}</p>
              <p className="text-gray-400 text-sm text-center">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
