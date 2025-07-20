import React from "react";
import { motion } from "framer-motion";
import Navbar from "../pages/user/components/Navbar";

const stakeholders = [
  {
    role: "Students",
    desc: "Have questions about job simulations, mentorship, or certifications? We're here to help you navigate your future.",
    email: "support@careerlaunch.com",
    phone: "+1 (234) 567-8901",
    bg: "from-teal-100 to-teal-50",
  },
  {
    role: "Recruiters",
    desc: "Interested in posting simulations, reviewing submissions, or finding top talent? Let’s connect and grow together.",
    email: "recruiters@careerlaunch.com",
    phone: "+1 (234) 567-8902",
    bg: "from-orange-100 to-orange-50",
  },
  {
    role: "Administrators",
    desc: "For platform support, partnerships, or general inquiries, get in touch with our internal operations team.",
    email: "admin@careerlaunch.com",
    phone: "+1 (234) 567-8903",
    bg: "from-purple-100 to-purple-50",
  },
];

const ContactPage = () => {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6 bg-white text-gray-900">
      <Navbar />
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold mb-4">
          Get in <span className="text-teal-600">Touch</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you. Choose the contact section below that best
          fits your journey.
        </p>
      </motion.div>

      {/* Stakeholder Blocks */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {stakeholders.map((s, i) => (
          <motion.div
            key={s.role}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            className={`bg-gradient-to-br ${s.bg} p-6 rounded-2xl shadow-md hover:shadow-xl transition`}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{s.role}</h2>
            <p className="text-gray-700 mb-4">{s.desc}</p>
            <div className="text-sm space-y-1 text-gray-600">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href={`mailto:${s.email}`}
                  className="text-teal-600 underline"
                >
                  {s.email}
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span> {s.phone}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-teal-50 p-8 rounded-2xl shadow-md mb-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Send us a Message
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <select className="p-3 border border-gray-300 rounded-lg w-full">
            <option value="">Select Stakeholder Category</option>
            <option value="student">Student</option>
            <option value="recruiter">Recruiter</option>
            <option value="admin">Administrator</option>
          </select>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg w-full"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition"
          >
            Submit
          </button>
        </form>
      </motion.div>

      {/* Embedded Map */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-md"
      >
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          className="border-0 w-full"
        ></iframe>
      </motion.div>

      {/* Live Chat Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-6 right-6 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-lg cursor-pointer hover:shadow-xl transition"
      >
        <p className="text-sm text-gray-700">💬 Chat with us</p>
      </motion.div>
    </section>
  );
};

export default ContactPage;
