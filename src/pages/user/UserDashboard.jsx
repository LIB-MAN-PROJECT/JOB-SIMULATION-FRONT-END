import { user } from "../../constants";
import { motion } from "framer-motion";
import { CalendarDays, ClipboardList, CheckCircle, Star } from "lucide-react";

const mockStats = [
  {
    title: "Applications Sent",
    value: 12,
    icon: <ClipboardList size={28} />,
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Simulations Completed",
    value: 5,
    icon: <CheckCircle size={28} />,
    color: "from-green-400 to-teal-500",
  },
  {
    title: "Pending Feedback",
    value: 3,
    icon: <Star size={28} />,
    color: "from-yellow-400 to-orange-500",
  },
];

const UserDashboard = () => {
  return (
    <div className="pt-24 px-4 md:px-8 bg-gray-50 min-h-screen">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Welcome Back,{" "}
          <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text">
            Future Leader
          </span>
        </h1>
        <p className="text-gray-600 mt-2">Your progress at a glance</p>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {mockStats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className={`p-6 rounded-xl shadow bg-white border-l-4 border-transparent bg-gradient-to-br ${stat.color}`}
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-2 rounded-full text-white">
                {stat.icon}
              </div>
              <div>
                <p className="text-white text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dashboard Action Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {user.USERDASHBOARD.map(({ icon, title, description, path }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="bg-white border border-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-3 text-white rounded-full">
                {icon}
              </div>
            </div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <div className="w-10 h-1 mx-auto bg-gradient-to-r from-teal-400 to-cyan-500 my-2" />
            <p className="text-sm text-gray-500">{description}</p>
          </motion.div>
        ))}
      </div>

      {/* Calendar Placeholder (static) */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4 text-teal-600 font-semibold">
          <CalendarDays size={20} />
          Upcoming Tasks
        </div>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>📌 Complete Marketing Simulation - Due July 24</li>
          <li>📌 Review Resume Tips - Due July 25</li>
          <li>📌 Submit Feedback for Product Management Sim - Due July 26</li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
