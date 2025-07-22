import Hero from "./components/Hero";
import Experience from "./Experience";
import Features from "./Features";
import FutureBuild from "./FutureBuild";

import HowItWorks from "./HowItWorks";
import ImpactSection from "./ImpactSection";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <div className="">
      <Hero />
      <ImpactSection />
      {/* <Experience /> */}
      <Features />
      <HowItWorks />
      <Testimonials />
      <FutureBuild />
    </div>
  );
};

export default LandingPage;
