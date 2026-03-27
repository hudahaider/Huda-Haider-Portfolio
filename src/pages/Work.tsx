const Work = () => {
  return (
    <div id="work" className="w-full py-20 md:py-10">
      <div className="max-w-5xl mx-auto px-6 *:text-white">
        <h6 className="text-5xl font-bold mb-8">Work Experience</h6>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-cyan-500/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl shadow-cyan-400/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-cyan-500/60">
            <h1 className="text-2xl font-bold mb-6">
              Making a design system from scratch
            </h1>
            <h3 className="text-slate-300 text-md font-md mb-6">
              12 Feb 2020 | Design, Pattern
            </h3>
            <p className="text-slate-300 font-normal">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-cyan-500/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl shadow-cyan-400/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-cyan-500/60">
            <h1 className="text-2xl font-bold mb-6">
              Creating pixel perfect icons in Figma
            </h1>
            <h3 className="text-slate-300 text-md font-medium mb-6">
              12 Feb 2020 | Design, Pattern
            </h3>
            <p className="text-slate-300 font-normal">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-cyan-500/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl shadow-cyan-400/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-cyan-500/60">
            <h1 className="text-2xl font-bold mb-6">
              Creating pixel perfect icons in Figma
            </h1>
            <h3 className="text-slate-300 text-md font-medium mb-6">
              12 Feb 2020 | Design, Pattern
            </h3>
            <p className="text-slate-300 font-normal">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-cyan-500/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl shadow-cyan-400/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-cyan-500/60">
            <h1 className="text-2xl font-bold mb-6">
              Creating pixel perfect icons in Figma
            </h1>
            <h3 className="text-slate-300 text-md font-medium mb-6">
              12 Feb 2020 | Design, Pattern
            </h3>
            <p className="text-slate-300 font-normal">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
