const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full py-10 md:py-20 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 *:text-white">
        <h6 className="text-5xl font-bold mb-8">Projects</h6>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-600/20 rounded-xl shadow-2xl hover:bg-slate-600/30 transition-all duration-500">
            {/* Image */}
            <div className="md:w-1/3 w-full">
              <img
                src="/assets/veloura website.png"
                alt="veloura website"
                className="w-full h-56 object-cover rounded-lg transition-transform duration-500 hover:-translate-y-2"
              />
            </div>

            {/* Content */}
            <div className="md:w-2/3 w-full">
              <h1 className="text-2xl font-bold mb-4">
                Veloura Website (Cosmetics related)
              </h1>

              <h3 className="text-slate-400 text-md font-medium mb-4">
                <span className="bg-slate-800 rounded-full px-4 py-1 text-white mr-3">
                  2026
                </span>
                Website Project
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Developed a responsive Velours website using React.js and
                Tailwind CSS, focusing on modern UI design and smooth user
                experience. The website showcases elegant layouts, interactive
                components, and mobile-friendly design to ensure accessibility
                across all devices. Implemented reusable components and clean
                structure to enhance performance and maintainability.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-600/20 rounded-xl shadow-2xl hover:bg-slate-600/30 transition-all duration-500">
            {/* Image */}
            <div className="md:w-1/3 w-full">
              <img
                src="public\assets\portfolio.png"
                alt="portfolio"
                className="w-full h-56 object-cover rounded-lg transition-transform duration-500 hover:-translate-y-2"
              />
            </div>

            {/* Content */}
            <div className="md:w-2/3 w-full">
              <h1 className="text-2xl font-bold mb-4">Portfolio</h1>

              <h3 className="text-slate-400 text-md font-medium mb-4">
                <span className="bg-slate-800 rounded-full px-4 py-1 text-white mr-3">
                  2026
                </span>
                Personal Portfolio
              </h3>

              <p className="text-slate-300 leading-relaxed">
                A responsive and modern personal portfolio website built using
                React.js and Tailwind CSS. The project showcases my skills,
                projects, and experience with a clean UI and smooth user
                experience.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-600/20 rounded-xl shadow-2xl hover:bg-slate-600/30 transition-all duration-500">
            {/* Image */}
            <div className="md:w-1/3 w-full">
              <img
                src="/assets/account design.png"
                alt="account design"
                className="w-full h-56 object-cover rounded-lg transition-transform duration-500 hover:-translate-y-2"
              />
            </div>

            {/* Content */}
            <div className="md:w-2/3 w-full">
              <h1 className="text-2xl font-bold mb-4">
                Signup/Signin Page Design (Template design)
              </h1>

              <h3 className="text-slate-400 text-md font-medium mb-4">
                <span className="bg-slate-800 rounded-full px-4 py-1 text-white mr-3">
                  2025
                </span>
                Design Project
              </h3>

              <p className="text-slate-300 leading-relaxed">
                A modern and responsive authentication UI built using React.js
                with Vite and styled with Tailwind CSS. This project includes
                clean and user-friendly Signup and Signin page templates
                designed with a focus on simplicity, usability, and mobile
                responsiveness.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-600/20 rounded-xl shadow-2xl hover:bg-slate-600/30 transition-all duration-500">
            {/* Image */}
            <div className="md:w-1/3 w-full">
              <img
                src="/assets/aviet webdesign.png"
                alt="aviet webdesign"
                className="w-full h-56 object-cover rounded-lg transition-transform duration-500 hover:-translate-y-2"
              />
            </div>

            {/* Content */}
            <div className="md:w-2/3 w-full">
              <h1 className="text-2xl font-bold mb-4">
                Aviet Web Design (Template design)
              </h1>

              <h3 className="text-slate-400 text-md font-medium mb-4">
                <span className="bg-slate-800 rounded-full px-4 py-1 text-white mr-3">
                  2025
                </span>
                Design Project
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Designed a responsive Aviet website template using HTML, CSS,
                and JavaScript. Focused on creating a clean and modern layout
                with an intuitive user interface and smooth user experience.
                Implemented basic interactivity and ensured mobile-friendly
                design for better accessibility across all devices.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-600/20 rounded-xl shadow-2xl hover:bg-slate-600/30 transition-all duration-500">
            {/* Image */}
            <div className="md:w-1/3 w-full">
              <img
                src="/assets/sentiment analysis project.png"
                alt="sentiment analysis project"
                className="w-full h-56 object-cover rounded-lg transition-transform duration-500 hover:-translate-y-2"
              />
            </div>

            {/* Content */}
            <div className="md:w-2/3 w-full">
              <h1 className="text-2xl font-bold mb-4">
                Well-Being Meter (Sentiment Analysis System)
              </h1>

              <h3 className="text-slate-400 text-md font-medium mb-4">
                <span className="bg-slate-800 rounded-full px-4 py-1 text-white mr-3">
                  2025
                </span>
                Final Year Project
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Developed a sentiment analysis-based web application that
                evaluates user emotional well-being by analyzing text input. The
                system classifies sentiments into positive and negative using
                machine learning models such as Logistic Regression, SVM, and
                LSTM. Designed an intuitive UI to provide users with meaningful
                insights and promote mental health awareness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
