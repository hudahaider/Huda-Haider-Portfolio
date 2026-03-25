import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="p-8 text-center text-sm text-white">
      <div className="flex *:text-white gap-8 justify-center mb-6">
        <Link target="_blank" to="#"
          onClick={(e) => {
            window.location.href = "mailto:hudahaider303@gmail.com";
            e.preventDefault();
          }}>
          <FaEnvelope size={28} className="hover:text-cyan-500" />
        </Link>
        <Link target="_blank" to={"https://www.linkedin.com"}>
          <FaLinkedin size={28} className="hover:text-cyan-500" />
        </Link>
        <Link target="_blank" to={"https://github.com/hudahaider"}>
          <FaGithub size={28} className="hover:text-cyan-500" />
        </Link>
      </div>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
};
export default FooterSection;
