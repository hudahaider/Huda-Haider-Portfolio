const Projects = () => {
  return (
    <div id="projects" className="w-full py-20 md:py-10 ">
      <div className="max-w-5xl mx-auto px-6 *:text-white">
        <h6 className="text-5xl font-bold mb-8">Projects</h6>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Card 1 */}
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
                  2026
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

          {/* Card 2 */}

          {/* Card 3 */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
