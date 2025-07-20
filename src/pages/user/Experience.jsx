import { motion } from "framer-motion";
import { CheckCircle, Briefcase, Sparkles, Globe } from "lucide-react"; // Icons from lucide-react

const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-teal-600" />,
    title: "Real Projects",
    desc: "Gain experience by working on actual business simulations from real companies.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-teal-600" />,
    title: "Skill-Based Learning",
    desc: "Develop practical, job-ready skills that employers look for — not just theory.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
    title: "Verified Certificates",
    desc: "Get recognized with credible, downloadable proof of every simulation you complete.",
  },
  {
    icon: <Globe className="w-8 h-8 text-teal-600" />,
    title: "Anywhere, Anytime",
    desc: "Learn on your schedule from anywhere — no classroom required.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-14"
        >
          Why students choose us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f9f4ee] rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
