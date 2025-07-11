const skills = [
  { name: "HTML", icon: "./src/icons/html-5-svgrepo-com.svg" },
  { name: "CSS", icon: "./src/icons/css-3-svgrepo-com.svg" },
  { name: "JS", icon: "./src/icons/js-svgrepo-com.svg" },
  { name: "React", icon: "./src/icons/react-svgrepo-com.svg" },
  { name: "Tailwind", icon: "./src/icons/tailwindcss-icon-svgrepo-com.svg" },
  { name: "Node.js", icon: "./src/icons/node-js-svgrepo-com.svg" },
  { name: "Express", icon: "./src/icons/express-svgrepo-com.svg" },
  { name: "GitHub", icon: "./src/icons/github-svgrepo-com.svg" },
  { name: "MongoDB", icon: "./src/icons/mongodb-svgrepo-com.svg" },
  { name: "Python", icon: "./src/icons/python-svgrepo-com.svg" },
  { name: "TypeScript", icon: "./src/icons/typescript-svgrepo-com.svg" },
  { name: "Zustand", icon: "./src/icons/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg"},
  { name: "Redux", icon: "./src/icons/redux-logo-svgrepo-com.svg" },
  { name: "Shadcn", icon: "./src/icons/shadcn.svg" },
  { name: "NPM", icon: "./src/icons/download.png" },
  { name: "Mongoose", icon: "./src/icons/Mongoose.js.svg" }
];

const Skill = () => {
  return (
    <div className="bg-[#0F172A] py-16 px-6 text-white font-sans relative border-b-2 border-white/35">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent select-none">
        Tech Stack
      </h2>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-[#1E293B] rounded-md shadow-sm hover:scale-105 transition-transform"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-5 h-5 object-contain select-none"
            />
            <span className="text-sm text-white lg:text-md xl:text-xl select-none">{skill.name}</span>
          </div>
        ))}
       <div className="text-white text-6xl absolute bottom-0 left-0 opacity-7 font-[monospace] font-extrabold select-none ">Skills</div>
      </div>
    </div>
  );
};

export default Skill;
