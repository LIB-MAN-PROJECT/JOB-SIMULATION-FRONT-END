import { motion } from "framer-motion";
import { FaUserGraduate, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const userMockData = {
  name: "Ama Jedida",
  email: "ama.jedida@example.com",
  phone: "+233 24 123 4567",
  location: "Accra, Ghana",
  education: "BSc Computer Science - University of Ghana",
  bio: "Driven student passionate about frontend development and building impactful user experiences.",
  avatar:
    "https://ui-avatars.com/api/?name=Ama+Jedida&background=14b8a6&color=fff&bold=true&size=128",
};

const UserProfile = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left: Avatar & Stats */}
          <div className="bg-gradient-to-br from-teal-500 to-orange-400 text-white p-8 md:w-1/3 flex flex-col items-center justify-center text-center">
            <img
              src={userMockData.avatar}
              alt="User Avatar"
              className="w-28 h-28 rounded-full mb-4 border-4 border-white shadow-lg"
            />
            <h2 className="text-xl font-bold">{userMockData.name}</h2>
            <p className="text-sm mt-2">{userMockData.education}</p>
          </div>

          {/* Right: Details */}
          <div className="flex-1 p-8 space-y-6">
            <h3 className="text-2xl font-extrabold text-gray-800">
              Profile Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-teal-500" />
                <span>{userMockData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-teal-500" />
                <span>{userMockData.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-teal-500" />
                <span>{userMockData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserGraduate className="text-teal-500" />
                <span>{userMockData.education}</span>
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold text-gray-800 mb-1">About Me</h4>
              <p className="text-gray-600 text-sm leading-relaxed bg-gray-100 p-4 rounded-xl shadow-sm">
                {userMockData.bio}
              </p>
            </div>

            <div className="text-right">
              <button className="px-5 py-2 bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-md font-medium hover:scale-105 transition duration-300">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default UserProfile;
