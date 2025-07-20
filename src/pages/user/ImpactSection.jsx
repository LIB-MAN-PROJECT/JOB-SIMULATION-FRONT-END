import { motion } from "framer-motion";

const stats = [
  { value: "44K+", label: "Employer projects" },
  { value: "700+", label: "Educational institutions and training providers" },
  { value: "272K+", label: "Learner experiences" },
  { value: "18.4M+", label: "Hours of applied learning" },
];

const ImpactSection = () => {
  return (
    <section className="bg-[#f9f4ee] py-24 flex justify-center">
      <div className="bg-white rounded-2xl shadow-md px-6 py-14 w-full max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-12">
          Our impact
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map(({ value, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                {value}
              </div>
              <div className="h-1 w-10 bg-teal-500 mx-auto rounded-full" />
              <p className="text-sm text-gray-600 leading-snug">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
