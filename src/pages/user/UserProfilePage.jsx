import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import apiClient from "../../services/config";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await apiClient.get("/user/profile/stats"); // Adjust endpoint if needed
        setUser(res.data); // Make sure this matches your backend response structure
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-600">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg">
        Failed to load user profile.
      </div>
    );
  }

  const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim();
  const avatarUrl =
    user.avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      fullName || "User"
    )}&background=14b8a6&color=fff&bold=true&size=128`;

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left: Avatar & Education */}
          <div className="bg-gradient-to-br from-teal-500 to-orange-400 text-white p-8 md:w-1/3 flex flex-col items-center justify-center text-center">
            <img
              src={avatarUrl}
              alt="User Avatar"
              className="w-28 h-28 rounded-full mb-4 border-4 border-white shadow-lg"
            />
            <h2 className="text-xl font-bold">{fullName || "Unnamed User"}</h2>
            <p className="text-sm mt-2">
              {user.education || "No education info"}
            </p>
          </div>

          {/* Right: Details */}
          <div className="flex-1 p-8 space-y-6">
            <h3 className="text-2xl font-extrabold text-gray-800">
              Profile Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-teal-500" />
                <span>{user.email || "No email provided"}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-teal-500" />
                <span>{user.phone || "No phone number"}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-teal-500" />
                <span>{user.location || "No location specified"}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserGraduate className="text-teal-500" />
                <span>{user.education || "No education info"}</span>
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold text-gray-800 mb-1">
                About Me
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed bg-gray-100 p-4 rounded-xl shadow-sm">
                {user.bio || "No bio available. Tell us a bit about yourself!"}
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
