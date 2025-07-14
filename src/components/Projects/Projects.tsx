import { FaGithub } from "react-icons/fa";
import HTMLimg from '../icons/html-5-svgrepo-com.svg';
import CSSimg from '../icons/css-3-svgrepo-com.svg';
import JSimg from '../icons/js-svgrepo-com.svg';
import Reactimg from '../icons/react-svgrepo-com.svg'
import Tailwindimg from '../icons/tailwindcss-icon-svgrepo-com.svg';
import Nodeimg from '../icons/node-js-svgrepo-com.svg';
import Expressimg from '../icons/express-svgrepo-com.svg';
import GitHubimg from '../icons/github-svgrepo-com.svg';
import Mongoimg from '../icons/mongodb-svgrepo-com.svg';
import Pythonimg from '../icons/python-svgrepo-com.svg';
import TSimg from '../icons/typescript-svgrepo-com.svg';
import Zustandimg from '../icons/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg';
import Reduximg from '../icons/redux-logo-svgrepo-com.svg';
import Shadcnimg from '../icons/shadcn.svg';
import NPMimg from '../icons/download.png';
import Mongooseimg from '../icons/Mongoose.js.svg';
import Vercelimng from '../icons/vercel.png'

import PortfolioImg from '../game_images/image copy 5.png';
import Ecomimg from '../game_images/image copy 6.png';

const projects = [
  {
    name: "Portfolio Website",
    image: PortfolioImg,
    github: "https://github.com/pjcodes007/Portfolio-Website",
    description: "A personal portfolio website to showcase my skills and projects.",
    tech: ["React", "Tailwind", "Framer Motion","Vercel"],
  },
  {
    name: "E-Commerce App",
    image: Ecomimg,
    github: "https://github.com/pjcodes007/E-commerce-website/",
    description: "An online store app with product listings, cart, and checkout.",
    tech: ["MongoDB", "Express", "Node.js", "React","Zustand"],
  },
];



const skills = [
  { name: "HTML", icon: HTMLimg },
  { name: "CSS", icon: CSSimg },
  { name: "JS", icon: JSimg },
  { name: "React", icon: Reactimg },
  { name: "Tailwind", icon: Tailwindimg },
  { name: "Node.js", icon: Nodeimg },
  { name: "Express", icon: Expressimg },
  { name: "GitHub", icon: GitHubimg },
  { name: "MongoDB", icon: Mongoimg },
  { name: "Python", icon: Pythonimg },
  { name: "TypeScript", icon: TSimg },
  { name: "Zustand", icon: Zustandimg },
  { name: "Redux", icon: Reduximg },
  { name: "Shadcn", icon: Shadcnimg },
  { name: "NPM", icon: NPMimg },
  { name: "Mongoose", icon: Mongooseimg },
  { name: "Vercel", icon:Vercelimng}
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
        
      </div>
    </section>
  );
};

export default Project;
