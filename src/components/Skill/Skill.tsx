import HTMLimg from '../icons/html-5-svgrepo-com.svg';
import CSSimg from '../icons/css-3-svgrepo-com.svg';
import JSimg from '../icons/js-svgrepo-com.svg';
import Reactimg from '../icons/js-svgrepo-com.svg';
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
  { name: "Vercel", icon: Vercelimng}
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
