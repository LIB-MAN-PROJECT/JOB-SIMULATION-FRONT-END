import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Profile", "Password", "Notifications"];

const UserSettings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <section className="bg-white min-h-screen py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Account Settings
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-teal-500 to-purple-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Forms */}
        {activeTab === "Profile" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Jedidah Ama"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue="ama@example.com"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <button className="bg-gradient-to-r from-teal-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-md shadow hover:scale-105 transition-transform">
              Save Changes
            </button>
          </div>
        )}

        {activeTab === "Password" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow hover:scale-105 transition-transform">
              Update Password
            </button>
          </div>
        )}

        {activeTab === "Notifications" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">
                Get internship match alerts
              </span>
              <input
                type="checkbox"
                defaultChecked
                className="accent-teal-500 scale-125"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">
                New job simulation recommendations
              </span>
              <input type="checkbox" className="accent-teal-500 scale-125" />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">
                Product announcements & emails
              </span>
              <input
                type="checkbox"
                defaultChecked
                className="accent-teal-500 scale-125"
              />
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default UserSettings;
