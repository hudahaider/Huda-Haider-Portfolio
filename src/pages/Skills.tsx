import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  {
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    icon: <SiPython className="text-blue-400" />,
  },
  {
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    icon: <SiNodedotjs className="text-green-500" />,
  },
    {
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    icon: <SiPython className="text-blue-400" />,
  },
  {
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    icon: <SiNodedotjs className="text-green-500" />,
  },
    {
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    icon: <SiPython className="text-blue-400" />,
  },
  {
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    icon: <SiNodedotjs className="text-green-500" />,
  },
];

const Skills = () => {
  return (
    <section className="bg-slate-950 py-20 px-10">
      <h2 className="text-white text-4xl font-bold text-center mb-12">
        Tech Stack
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index}
          className="bg-black p-2 rounded-2xl group relative ">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-cyan-500 blur-2xl transition-opacity rounded-2xl" />

            <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
