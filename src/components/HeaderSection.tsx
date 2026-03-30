import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4 bg-slate-950 md:bg-white/5 text-white transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo (hidden when menu open on small screens) */}
        {!isOpen && (
          <div className="italic text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-blue-300 to-cyan-500">
            HUDA HAIDER
          </div>
        )}

        {/* Menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 font-semibold text-white">
          <Link
            to=""
            onClick={() => scrollTo("about")}
            className="hover:text-cyan-500"
          >
            About
          </Link>
          <Link
            to=""
            onClick={() => scrollTo("work")}
            className="hover:text-cyan-500"
          >
            Work
          </Link>
          <Link
            to=""
            onClick={() => scrollTo("skills")}
            className="hover:text-cyan-500"
          >
            Skills
          </Link>
          <Link
            to=""
            onClick={() => scrollTo("projects")}
            className="hover:text-cyan-500"
          >
            Projects
          </Link>
          <Link
            to=""
            onClick={() => scrollTo("FAQs")}
            className="hover:text-cyan-500"
          >
            FAQs
          </Link>
          <Link
            to=""
            onClick={() => scrollTo("contact")}
            className="hover:text-cyan-500"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center justify-center gap-8 mt-8 text-lg font-semibold">
          <Link to="" onClick={() => scrollTo("about")}>
            About
          </Link>
          <Link to="" onClick={() => scrollTo("work")}>
            Work
          </Link>
          <Link to="" onClick={() => scrollTo("skills")}>
            Skills
          </Link>
          <Link to="" onClick={() => scrollTo("projects")}>
            Projects
          </Link>
          <Link to="" onClick={() => scrollTo("FAQs")}>
            FAQs
          </Link>
          <Link to="" onClick={() => scrollTo("contact")}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;
