const Work = () => {
  return (
    <div id="work" className="w-full border-t border-gray-800 md:py-20 py-10">
      <div className="max-w-5xl mx-auto px-6 text-white">
        <h6 className="text-5xl font-bold mb-12">Work Experience</h6>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Nexura Tech */}
          <div className="bg-cyan-500/10 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/70">
            <h1 className="text-2xl font-bold mb-4">
              Nexura Tech — Frontend Intern
            </h1>
            <h3 className="text-slate-300 text-md mb-4">
              March 2026 – Present
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Currently working as a PSEB intern, focusing on modern frontend
              development using React and Tailwind CSS. Building responsive UI
              components, improving user experience, and collaborating with the
              team on real-world projects.
            </p>
          </div>

          {/* U Tech */}
          <div className="bg-cyan-500/10 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/70">
            <h1 className="text-2xl font-bold mb-4">U Tech Company — Intern</h1>
            <h3 className="text-slate-300 text-md mb-4">Dec 2024 – Feb 2025</h3>
            <p className="text-slate-300 leading-relaxed">
              Assisted in UI design and bulk messaging systems while working on
              data cost analysis. Gained hands-on experience in real-world
              development environments and explored AI/ML concepts.
            </p>
          </div>

          {/* I Tech Solution */}
          <div className="bg-cyan-500/10 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/70">
            <h1 className="text-2xl font-bold mb-4">
              I Tech Solution — Frontend Intern
            </h1>
            <h3 className="text-slate-300 text-md mb-4">
              July 2025 – Sep 2025
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Worked on frontend UI development using HTML, CSS, and JavaScript.
              Built responsive and interactive templates and collaborated with
              the team during development and testing phases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
