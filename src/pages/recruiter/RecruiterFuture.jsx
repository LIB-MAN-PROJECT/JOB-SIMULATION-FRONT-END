const RecruiterFuture = () => {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-10 shadow-md hover:shadow-2xl transition duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Start Shaping the{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Future-WorkForce
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-400">
          Create impactful simulations and connect with emerging talents today!
        </p>
        <button className="mt-8 inline-block bg-black border-white text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300">
          Launch a Simulation
        </button>
      </div>
    </section>
  );
};

export default RecruiterFuture;
