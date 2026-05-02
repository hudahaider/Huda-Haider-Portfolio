import HeroSection from "../components/HeroSection";
import FooterSection from "../components/FooterSection";
import Contact from "./Contact";
import Projects from "./Projects";
import Work from "./Work";
import HeaderSection from "../components/HeaderSection";
import Skills from "./Skills";
import About from "./About";
import QuestionairSection from "@/components/QuestionairSection";
import ParticleBackground from "@/components/ParticleBackground";
const LandingPage = () => {
  return (
    <div className="relative z-0">
      <ParticleBackground />

      <div className="relative z-10">
        <HeaderSection />
        <HeroSection />
        <About />
        <Work />
        <Skills />
        <Projects />
        <QuestionairSection />
        <Contact />
        <FooterSection />
      </div>
    </div>
  );
};

export default LandingPage;
