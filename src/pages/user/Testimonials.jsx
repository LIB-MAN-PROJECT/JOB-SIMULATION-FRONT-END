import React from "react";
import { motion } from "framer-motion";
import user1 from "../../assets/user2.png";
import user2 from "../../assets/user1.jpg";
import user3 from "../../assets/experience.jpg";

const testimonials = [
  {
    name: "Ama Boateng",
    role: "Marketing Graduate",
    image: user1,
    quote:
      "CareerLaunch helped me understand what real-world marketing is like. The simulations were hands-on and truly insightful.",
  },
  {
    name: "Kwame Mensah",
    role: "Software Intern",
    image: user2,
    quote:
      "I was able to showcase my skills to a company through a project simulation — that’s how I landed my internship!",
  },
  {
    name: "Elsie Nyarko",
    role: "HR Coordinator",
    image: user3,
    quote:
      "These simulations gave me the confidence and experience I needed to apply for jobs. Employers noticed the difference!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f9f4ee] py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center space-y-16"
      >
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold">What our users say</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hear directly from students and early professionals who’ve used our
            platform to launch their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 object-cover rounded-full border-4 border-green-500"
                />
                <p className="text-gray-700 italic">“{t.quote}”</p>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    {t.name}
                  </h4>
                  <span className="text-sm text-green-600">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
