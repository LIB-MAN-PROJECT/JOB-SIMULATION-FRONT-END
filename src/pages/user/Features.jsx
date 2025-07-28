import { motion } from "framer-motion";
import K from "../../constants";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  return (
    <section className="bg-[#f9f4ee] py-24 px-6 text-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
            Our{" "}
            <span className="bg-gradient-to-r from-teal-500 to-teal-800 text-transparent bg-clip-text">
              Core Features
            </span>{" "}
            For Future-Ready Careers
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base">
            Designed with real companies — learn by doing with simulations that mirror actual business scenarios.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {K.FEATURES.map(({ title, description,imageUrl }, index) => (
            <motion.div
              key={title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-all duration-500"
            >
              {/* Replace with imported images later */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
