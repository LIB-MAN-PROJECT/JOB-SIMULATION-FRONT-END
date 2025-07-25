import React from 'react';

const MentorFuture = () => {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-10 shadow-md hover:shadow-2xl transition duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Apply for Your Next{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
           Opportunity
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-400">
          Start building your future with real experience from real experience
        </p>
        <button className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300">
         View Internships
        </button>
      </div>
    </section>
  );
};

export default MentorFuture;
