import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMaterialdesign,
  SiShadcnui,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
  SiVite,
  SiNpm,
} from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const icons = [
  {
    icon: <SiHtml5 className="text-orange-600" />,
  },
  {
    icon: <SiCss className="text-blue-600" />,
  },
  {
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    icon: <SiNodedotjs className="text-green-600" />,
  },
  {
    icon: <SiShadcnui className="text-white" />,
  },
  {
    icon: <SiMaterialdesign className="text-blue-500" />,
  },
  {
    icon: <SiPython className="text-yellow-500" />,
  },
  {
    icon: <SiGit className="text-orange-500" />,
  },
  {
    icon: <SiGithub className="text-white" />,
  },
  {
    icon: <SiFigma className="text-pink-500" />,
  },
  {
    icon: <SiVite className="text-purple-500" />,
  },
  {
    icon: <SiNpm className="text-red-500" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="md:py-30 py-10 px-6 md:px-10 bg-slate-950/50 border-t border-gray-800 backdrop-blur-sm shadow-2xl"
    >
      <div className=" max-w-6xl mx-auto">
        <h2 className="text-white text-5xl font-bold mb-12">Tech Skills</h2>

       <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
          className="skills-swiper"
        >
          {icons.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center py-4">
              <div className="relative group flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-800/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-cyan-400 blur-2xl transition-all duration-500 rounded-2xl"></div>
                <div className="relative z-10 text-4xl text-white transition-all duration-500 group-hover:scale-125 group-hover:text-cyan-300">
                  {skill.icon}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
