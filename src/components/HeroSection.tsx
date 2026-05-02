import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiReact, SiJavascript, SiTailwindcss } from "react-icons/si";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "React Developer", "UI Designer"],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center py-16 justify-center px-6 md:px-16 pt-28 md:pt-32 overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Main */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl w-full relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left text-white flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hi, I'm
            <span className="ml-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Huda Haider
            </span>
          </h1>

          {/* Typing animation */}
          <h2 className="text-xl sm:text-2xl text-cyan-400 font-semibold mb-6">
            {text}
            <Cursor cursorColor="cyan-400" />
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            I build modern, responsive, and high-performance web applications
            using{" "}
            <span className="text-white font-semibold">
              React & Tailwind CSS
            </span>
            . My goal is to create elegant digital experiences that help brands
            grow.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/Noor-ul-huda-haider-Resume.pdf"
              target="_blank"
              download="Noor-ul-huda-haider-Resume.pdf"
            >
              <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold text-lg transition duration-300 w-full sm:w-auto">
                Download Resume
              </button>
            </Link>

            <Link to="" onClick={handleContactClick}>
              <button className="px-8 py-3 border border-cyan-400 hover:bg-cyan-400 hover:text-black rounded-lg font-semibold text-lg transition duration-300 w-full sm:w-auto">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative flex justify-center shrink-0">
          {/* Floating icons */}
          <SiReact className="absolute top-0 left-0 text-cyan-400 text-3xl animate-bounce" />
          <SiJavascript className="absolute top-10 -right-8 text-yellow-400 text-3xl animate-bounce delay-200" />
          <SiTailwindcss className="absolute -bottom-6 left-6 text-sky-400 text-3xl animate-bounce delay-500" />

          {/* Profile image */}
          <div className="relative">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="h-40 w-40 sm:h-52 sm:w-52 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full object-cover border-4 border-cyan-400 shadow-xl"
            />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
