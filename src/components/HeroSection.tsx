import HeaderSection from "./HeaderSection";
import { Link } from "react-router-dom";

const HeroSection1 = () => {
  return (
    <div className="relative w-full">
      {/* Top header */}
      <div className="relative z-10">
        <HeaderSection />
      </div>

      {/* Hero */}
      <div className="w-full py-15 md:py-10 flex gap-12 justify-center items-center pt-20 flex-col-reverse lg:flex-row">
        {/* Hero content */}
        <div className="max-w-xl px-4">
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Hi, I am Huda, <br /> Web Developer
          </h1>

          <p className=" text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae,
            alias-expedita voluptatem commodi ut fugiat molestiae eligendi
            dolorem, laborum dolore, deleniti nesciunt odio tenetur.
          </p>

          <Link to="/signup">
            <button className="text-white font-semibold px-7 py-2 bg-blue-500 hover:bg-blue-700">
              Download Resume
            </button>
          </Link>
        </div>

        {/* Profile pic */}
        <div className="">
          <img
            src="src\assets\profile.webp"
            alt="profile pic"
            className="h-40 w-40 rounded-full object-cover"
          />
        </div>
      </div>

      {/* RecentPost */}
      <div className="w-full py-15 md:py-10 bg-cyan-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-between mb-5">
            <h6 className="text-xl font-medium">Recent posts</h6>
            <h6 className="text-sm text-cyan-600 hover:text-cyan-800">
              View all
            </h6>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 shadow">
              <h1 className="text-2xl font-bold mb-6">
                Making a design system from scratch
              </h1>
              <h3 className="text-slate-700 text-md font-md mb-6">
                12 Feb 2020 | Design, Pattern
              </h3>
              <p className="text-slate-700 font-normal">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 shadow">
              <h1 className="text-2xl font-bold mb-6">
                Creating pixel perfect icons in Figma
              </h1>
              <h3 className="text-slate-700 text-md font-medium mb-6">
                12 Feb 2020 | Design, Pattern
              </h3>
              <p className="text-slate-700 font-normal">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FeaturedWork */}
      <div className="w-full py-15 md:py-10 ">
        <div className="max-w-3xl mx-auto px-4">
          <h6 className="text-xl font-medium mb-5">Featured works</h6>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8">

            {/* Card 1 */}
            <div className="flex gap-4 p-6 shadow-2xl flex-col md:flex-row">
              <div>
                <img
                  src="src\assets\dashboard.png"
                  alt="dashboard"
                  className="w-150 h-45 object-cover rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-6">
                  Designing Dashboards
                </h1>
                <h3 className="text-slate-400 text-md font-medium mb-6">
                  <span className="bg-slate-800 rounded-full px-4 py-1 text-white mr-5">
                    2026
                  </span>
                  Dashboards
                </h3>
                <p className="text-slate-700 font-normal">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-4 p-6 shadow-2xl flex-col md:flex-row">
              <div className="">
                <img
                  src="src\assets\portrait.jpg"
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
                <p className="text-slate-700 font-normal">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-4 p-6 shadow-2xl flex-col md:flex-row">
              <div>
                <img
                  src="src\assets\36days.jpg"
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
                <p className="text-slate-700 font-normal">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
