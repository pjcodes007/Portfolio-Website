import { useRef } from "react";
import { motion } from "framer-motion";

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
