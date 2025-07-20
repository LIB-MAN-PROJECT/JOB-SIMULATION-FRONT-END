import works1 from "../../assets/works1.mp4";
import works2 from "../../assets/works2.mp4";
import works3 from "../../assets/works3.mp4";
import { FaUserFriends, FaKey, FaRegSmile } from "react-icons/fa";

const steps = [
  {
    title: "1. Real Job Simulations",
    description:
      "Explore real-life tasks and scenarios across various careers.",
    video: works1,
    icon: <FaUserFriends />,
  },
  {
    title: "2. Complete Assigned Tasks",
    description:
      "Work through realistic tasks that simulate actual job responsibilities.",
    video: works2,
    icon: <FaKey />,
  },
  {
    title: "3. Earn Certificates",
    description:
      "Finish simulations and receive verified certificates to boost your profile.",
    video: works3,
    icon: <FaRegSmile />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-gray-900">
        How It Works
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group relative"
          >
            {/* Video Section */}
            <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
              <video
                className="w-full h-full object-cover group-hover:brightness-100 brightness-75 transition duration-500"
                src={step.video}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition duration-500">
                <span className="text-white text-4xl opacity-90 group-hover:opacity-0 transform group-hover:scale-125 transition-all duration-500">
                  {step.icon}
                </span>
              </div>
            </div>

            {/* Text Section */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#14b8a6] bg-clip-text text-transparent mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
