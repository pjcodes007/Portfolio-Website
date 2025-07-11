import { useRef } from "react";
import { motion } from "framer-motion";
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
  { name: "Vercel", icon:Vercelimng}
];


const getRandomPosition = () => ({
  top: `${Math.random() * 80}%`,
  left: `${Math.random() * 80}%`,
});

const SkillBulbules = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-10 overflow-hidden pointer-events-none select-none"
    >
      {skills.map((skill, i) => {
        const position = getRandomPosition();
        return (
          <motion.div
            key={i}
            className="absolute w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-md"
            style={position}
            animate={{
              x: [0, 25, -20, 10, -10, 0],
              y: [0, -20, 15, -10, 10, 0],
              rotate: [0, 10, -10, 5, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 opacity-60 pointer-events-none"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillBulbules;
