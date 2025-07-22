import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const mockApplications = [
  {
    company: "TechNova Inc.",
    role: "Frontend Intern",
    date: "July 10, 2025",
    status: "Interviewing",
  },
  {
    company: "EcoTrade",
    role: "Marketing Associate",
    date: "June 25, 2025",
    status: "Rejected",
  },
  {
    company: "DataStream Labs",
    role: "Data Analyst Intern",
    date: "July 5, 2025",
    status: "Applied",
  },
];

const statusColors = {
  Interviewing: "text-yellow-500",
  Rejected: "text-red-500",
  Applied: "text-blue-500",
};

const UserApplications = () => {
  return (
    <div className="p-6 md:p-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold text-slate-800 mb-8"
      >
        Your Applications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockApplications.map((app, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="text-purple-600" />
              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  {app.role}
                </h3>
                <p className="text-sm text-gray-500">{app.company}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              Applied on: {app.date}
            </div>
            <div className={`font-semibold ${statusColors[app.status]}`}>
              <CheckCircle className="inline-block w-4 h-4 mr-1" />
              {app.status}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserApplications;
