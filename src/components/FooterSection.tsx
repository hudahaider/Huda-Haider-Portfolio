import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="p-8 text-center text-sm text-white">
      <div className="flex *:text-white gap-8 justify-center mb-6">
        {/* https://github.com/hudahaider */}
        {/* https://lindedin.in */}
        {/* https://github.com/hudahaider */}
        <FaEnvelope size={28} className="hover:text-cyan-500" />
        <FaLinkedin size={28} className="hover:text-cyan-500" />
        <Link target="_blank" to={"https://github.com/hudahaider"}>
          <FaGithub size={28} className="hover:text-cyan-500" />
        </Link>
      </div>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
};
export default FooterSection;
