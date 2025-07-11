import { FaGithub } from "react-icons/fa";

// Project list
const projects = [
  {
    name: "Portfolio Website",
    image: "./src/components/game_images/image copy 5.png",
    github: "https://github.com/yourname/portfolio",
    description: "A personal portfolio website to showcase my skills and projects.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    name: "E-Commerce App",
    image: "./src/components/game_images/image copy 6.png",
    github: "https://github.com/yourname/ecommerce",
    description: "An online store app with product listings, cart, and checkout.",
    tech: ["MongoDB", "Express", "Node.js", "React"],
  },
];

// Skill icon data
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
  { name: "Zustand", icon: "./src/icons/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" },
  { name: "Redux", icon: "./src/icons/redux-logo-svgrepo-com.svg" },
  { name: "Shadcn", icon: "./src/icons/shadcn.svg" },
  { name: "NPM", icon: "./src/icons/download.png" },
  { name: "Mongoose", icon: "./src/icons/Mongoose.js.svg" },
  { name: "Framer Motion", icon: "./src/icons/framer.png"}
];

const Project = () => {
  return (
    <section className="bg-[#0F172A] text-white py-20 px-6 relative border-b-2 border-white/35">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent pt-6 select-none">
        Projects
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md shadow-white/10"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 select-none"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-4xl hover:text-gray-300 select-none"
              >
                <FaGithub />
              </a>
            </div>

            {/* Details */}
            <div className="bg-[#1E293B] p-5">
              <h3 className="text-xl font-semibold mb-2 select-none">{project.name}</h3>
              <p className="text-sm text-gray-300 mb-4 select-none">{project.description}</p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => {
                  const matchedSkill = skills.find((s) => s.name.toLowerCase() === tech.toLowerCase());
                  return (
                    <span
                      key={idx}
                      className="flex items-center gap-1 px-3 py-1 bg-white text-black text-xs rounded-md font-semibold"
                    >
                      {matchedSkill?.icon && (
                        <img
                          src={matchedSkill.icon}
                          alt={tech}
                          className="w-4 h-4 select-none"
                        />
                      )}
                      <p className="select-none">

                      {tech}
                      </p>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
         <div className="text-white text-6xl absolute bottom-0 left-0 opacity-7 font-[monospace] font-extrabold select-none ">Projects</div>
      </div>
    </section>
  );
};

export default Project;
