const Projects = () => {
  return (
    <div id="projects" className="w-full py-15 md:py-10 ">
      <div className="max-w-5xl mx-auto px-4 *:text-white">
        <h6 className="text-3xl font-medium mb-8">Projects</h6>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Card 1 */}
          <div className="flex gap-4 p-6 flex-col md:flex-row bg-slate-600/20 overflow-hidden
  transition-all duration-500 ease-in-out hover:translate-x-3 hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-600/30">
            <div>
              <img
                src="/assets/dashboard.png"
                alt="dashboard"
                className="w-150 h-45 object-cover rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-6">Designing Dashboards</h1>
              <h3 className="text-slate-400 text-md font-medium mb-6">
                <span className="bg-slate-800 rounded-full px-4 py-1 text-white mr-5">
                  2026
                </span>
                Dashboards
              </h3>
              <p className="text-slate-300 font-normal">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-4 p-6 shadow-2xl flex-col md:flex-row bg-slate-600/20 overflow-hidden transition-all duration-500 ease-in-out hover:translate-x-3 hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-600/30">
            <div className="">
              <img
                src="/assets/portrait.jpg"
                alt="portrait"
                className="w-150 h-45 object-cover rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-6">
                Vibrant Portraits of 2020
              </h1>
              <h3 className="text-slate-400 text-md font-medium mb-6">
                <span className="bg-slate-800 rounded-full px-4 py-1 text-white mr-5">
                  2026
                </span>
                Illustration
              </h3>
              <p className="text-slate-300 font-normal">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex gap-4 p-6 shadow-2xl flex-col md:flex-row bg-slate-600/20 overflow-hidden transition-all duration-500 ease-in-out hover:translate-x-3 hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-600/30">
            <div>
              <img
                src="/assets/36days.jpg"
                alt="36days"
                className="w-155 h-45 object-cover rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-6">
                36 Days of Malayalam type
              </h1>
              <h3 className="text-slate-400 text-md font-medium mb-6">
                <span className="bg-slate-800 rounded-full px-4 py-1 text-white mr-5">
                  2026
                </span>
                Typography
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
    </div>
  );
};

export default Projects;
