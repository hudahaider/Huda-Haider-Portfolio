import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAboutClick = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleWorkClick = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleSkillsClick = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectsClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      // Hide if scrolling down, Show if scrolling up
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header className={`
        fixed top-0 left-0 w-full py-4 px-16 z-100 bg-white/5 text-white 
        transition-transform duration-500 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}>
      {/* Visible only on small screens */}
      <div className="flex justify-end">
        <button
          className="md:hidden text-3xl focus:outline-none text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row flex-wrap gap-12 justify-end *:text-md *:text-white *:hover:text-cyan-600 font-semibold`}
      >
        <Link to="" onClick={handleAboutClick}>
          About
        </Link>
        <Link to="" onClick={handleWorkClick}>
          Work
        </Link>
        <Link to="" onClick={handleSkillsClick}>
          Skills
        </Link>
        <Link to="" onClick={handleProjectsClick}>
          Projects
        </Link>
        <Link to="" onClick={handleContactClick}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default HeaderSection;
