import { FaCode, FaGraduationCap, FaLightbulb, FaCoffee } from 'react-icons/fa';
import { Link } from "react-router-dom";


const About = () => {

  const handleWorkClick = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectsClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="bg-slate-950 text-white mt-55 py-15 md:py-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-200">
              I'm a Web Developer passionate about clean code and user-centric design.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              My journey into web development started when I realized I could combine my love for 
              creativity with the logic of programming. I don't just write code; I build 
              digital experiences that solve real-world problems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I am exploring new UI trends, contributing to open-source projects, or perfecting my coffee-to-code ratio. 
              I believe in continuous learning and staying curious.
            </p>
            
            {/* Buttons */}
            <div className="flex gap-4 pt-4 flex-wrap">
             <Link to="" onClick={handleWorkClick}>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-bold transition-all transform hover:-translate-y-1">
                View My Work
              </button>
             </Link>

             <Link to="" onClick={handleProjectsClick}>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-bold transition-all transform hover:-translate-y-1">
                View My Projects
              </button>
             </Link>
             
             <Link to="" onClick={handleContactClick}>
              <button className="border border-slate-700 hover:bg-slate-800 px-6 py-3 rounded-full font-bold transition-all">
                Get In Touch
              </button>
             </Link>
            </div>
          </div>

          {/* Right side - Grid*/}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Card 1 */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors group text-center">
              <FaCode className="text-3xl text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold italic">2+</h4>
              <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Years Coding</p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors group text-center">
              <FaLightbulb className="text-3xl text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold italic">15+</h4>
              <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Projects Done</p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors group text-center">
              <FaGraduationCap className="text-3xl text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold italic">Self-Taught</h4>
              <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Education</p>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors group text-center">
              <FaCoffee className="text-3xl text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold italic">Infinite</h4>
              <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Coffee Cups</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
