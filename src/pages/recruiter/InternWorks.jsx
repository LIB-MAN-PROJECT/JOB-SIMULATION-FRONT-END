import { L } from "../../constants";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaChalkboardTeacher,
  FaCertificate,
} from "react-icons/fa";

const iconMap = {
  "Curated Listings": <FaBullseye className="text-3xl text-teal-600" />,
  "Mentor Access": <FaChalkboardTeacher className="text-3xl text-orange-500" />,
  "Verified Certificates": (
    <FaCertificate className="text-3xl text-purple-600" />
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const InternWorks = () => {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-extrabold leading-snug">
            Why Use Our{" "}
            <span className="bg-gradient-to-r from-teal-500 to-orange-500 text-transparent bg-clip-text">
              Internship Portal
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            More than just listings — our internship board is built for your
            career growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {L.INTERNSHIP.map(({ title, description }, i) => (
            <motion.div
              key={title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateX: 2,
                rotateY: -2,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:border-teal-400 transition-all"
            >
              <div className="mb-4">
                {iconMap[title] || (
                  <FaBullseye className="text-3xl text-teal-600" />
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternWorks;
