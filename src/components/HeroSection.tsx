import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full flex justify-center items-center pt-65 md:pt-3">
      <div className="w-full flex gap-12 justify-center items-center flex-col-reverse lg:flex-row">
        {/* About content */}
        <div className="max-w-5xl px-4 *:text-white">
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Hi, I am Huda, <br /> Web Developer
          </h1>

          <p className=" text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae,
            alias-expedita voluptatem commodi ut fugiat molestiae eligendi
            dolorem, laborum dolore, deleniti nesciunt odio tenetur.
          </p>

          <Link to="/Noor ul Huda Haider-resume.pdf" target="_blank" download="Huda_Haider_Resume.pdf">  
            <button className="text-white font-semibold px-7 py-2 bg-red-500 hover:bg-red-700">
              Download Resume
            </button>
          </Link>
        </div>

        {/* Profile pic */}
        <div className="mt-5 flex justify-center lg:justify-start">
          <img
            src="/assets/profile.png"
            alt="profile pic"
            className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
