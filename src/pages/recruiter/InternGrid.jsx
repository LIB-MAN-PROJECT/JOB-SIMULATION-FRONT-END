import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../user/components/Navbar";

const internships = [
  {
    id: "1",
    title: "Marketing Intern",
    company: "BrightWave Inc.",
    location: "Remote",
    type: "Part-Time",
    duration: "3 Months",
    image:
      "https://res.cloudinary.com/dl6ok9s9l/image/upload/v1752501439/upskill/jobSims/ctofiopljh6jmwmu5qtp.jpg",
  },
  {
    id: "2",
    title: "Frontend Developer Intern",
    company: "CodeNest",
    location: "Accra, Ghana",
    type: "Full-Time",
    duration: "6 Months",
    image:
      "https://res.cloudinary.com/dl6ok9s9l/image/upload/v1752498995/upskill/jobSims/klpnjhgjydtliubzlov1.jpg",
  },
  {
    id: "3",
    title: "UX Design Intern",
    company: "Designify Studio",
    location: "Remote",
    type: "Part-Time",
    duration: "4 Months",
    image:
      "https://res.cloudinary.com/dl6ok9s9l/image/upload/v1752501254/upskill/jobSims/q682mraituspq5rjttt4.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const InternshipGrid = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <Navbar />
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-slate-900">
          Featured Internship Opportunities
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {internships.map((intern, index) => (
            <motion.div
              key={intern.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={intern.image}
                  alt={intern.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-800">
                  {intern.title}
                </h3>
                <p className="text-sm text-gray-500">{intern.company}</p>
                <div className="text-xs text-gray-600 space-x-2">
                  <span>📍 {intern.location}</span>
                  <span>• {intern.type}</span>
                  <span>• ⏱ {intern.duration}</span>
                </div>

                <Link to={`/internship/${intern.id}`}>
                  <button className="mt-4 w-full py-2 text-sm font-semibold bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-md hover:scale-105 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipGrid;
