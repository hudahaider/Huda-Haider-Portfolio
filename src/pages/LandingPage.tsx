import HeroSection from "../components/HeroSection";
import FooterSection from "../components/FooterSection";
import Contact from "./Contact";
import Projects from "./Projects";
import Work from "./Work";
import HeaderSection from "../components/HeaderSection";
import Skills from "./Skills";

const LandingPage = () => {
  const bgStyle = {
    // backgroundImage: "url(src/assets/bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    width: "100%",
  };
  return (
    <div className="bg-slate-950" style={bgStyle}>
      <HeaderSection/>
      <HeroSection />
      <Work />
      <Skills />
      <Projects />
      <Contact />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
