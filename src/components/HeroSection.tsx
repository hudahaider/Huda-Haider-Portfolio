import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full flex justify-center items-center">
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

          <Link to="/contact">  
            <button className="text-white font-semibold px-7 py-2 bg-red-500 hover:bg-red-700">
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
    </div>
  );
};

export default HeroSection;
