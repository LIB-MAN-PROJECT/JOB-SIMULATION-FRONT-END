import experienceImg from "../../assets/experience.jpeg";

const Experience = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* // Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-snug">
          Gain{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Hands-on Experience
          </span>{" "}
          from <span className="text-white">Anywhere</span>
        </h2>

        {/* // Main row: image + text */}
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* // Left: Image section */}
          <div className="flex-1 rounded-xl border border-white bg-white overflow-hidden">
            <img
              src={experienceImg}
              alt="Team collaborating"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* // Right: Narrow content block centered inside its half */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md bg-black border border-white/30 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed text-base">
                Simulations are designed by real companies and tailored to fields like{" "}
                <span className="text-purple-400 italic font-medium">Marketing</span>,{" "}
                <span className="text-purple-400 italic font-medium">Finance</span>, and{" "}
                <span className="text-purple-400 italic font-medium">IT</span>. Collaborate in teams,
                upload your solutions, and receive personalized feedback — all from anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
