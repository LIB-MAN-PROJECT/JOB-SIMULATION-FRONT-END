import React from "react";
import { user } from "../../constants";

const UserDashboard = () => {
  return (
    <div>
      <h1 className="font-extrabold text-4xl">
        Hello User, Welcome to{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent">
          Your Dashboard
        </span>
      </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 place-items-center pt-6">
        {user.USERDASHBOARD.map(({ icon, title, description, path }, idx) => (
          <div
            key={idx}
            className="w-full h-full bg-black border border-white/20 rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center items-center mb-4 ">
              <div className="bg-white/10 rounded-full p-3">{icon}</div>
            </div>
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <div className="w-10 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 mb-4" />
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
