import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 px-16">
      {/* Visible only on small screens */}
      <div className="flex justify-end">
        <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      </div>

      <div
        className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row flex-wrap gap-12 justify-end text-2xl *:text-sm *:hover:text-cyan-600 font-semibold`}
      >
        <Link to="/home">
          Works
        </Link>
        <Link to="/features">
          Blog
        </Link>
        <Link to="/pricing ">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default HeaderSection;
