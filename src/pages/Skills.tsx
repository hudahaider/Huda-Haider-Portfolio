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
      className="py-20 px-6 md:px-10 bg-slate-950/50 backdrop-blur-sm shadow-2xl"
    >
      <h2 className="text-white text-5xl font-bold text-center mb-12">
        Tech Skills
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto">
        {icons.map((skill, index) => (
          <div
            key={index}
            className="relative group flex items-center justify-center
        w-14 h-14 md:w-16 md:h-16
        rounded-2xl bg-slate-800/40 overflow-hidden
        transition-all duration-500 ease-in-out
        hover:-translate-y-2 hover:scale-105
        hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            {/* Glow background */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-40 
          bg-cyan-400 blur-2xl transition-all duration-500 rounded-2xl z-0"
            ></div>

            {/* Border glow */}
            <div
              className="absolute inset-0 rounded-2xl border 
          border-cyan-400/20 group-hover:border-cyan-400/60 
          transition-all duration-500 z-0"
            ></div>

            {/* Icon */}
            <div
              className="relative z-10 text-3xl md:text-4xl text-white 
          transition-all duration-500 
          group-hover:scale-125 group-hover:text-cyan-300
          group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]"
            >
              {skill.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
