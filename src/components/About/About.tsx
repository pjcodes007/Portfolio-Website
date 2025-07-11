const AboutPage = () => {
  return (
    <>
      <div className="bg-[#0F172A] text-white min-h-screen w-full relative z-10 px-6 py-20 border-b-2 border-white/35">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-stretch">
          {/* About Me Text */}
          <div className="md:w-1/2 text-2xl w-full p-6 rounded-xl bg-[#0F172A] shadow-xs shadow-white">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent mb-6 select-none xl:text-6xl">
              About Me
            </h1>
            <p className="text-lg leading-relaxed select-none">
              Hi, I’m a self-taught web developer with a focus on building
              responsive, user-friendly websites and web apps. I work with
              technologies like React, TailwindCSS, Node.js, Express, MongoDB,
              and WordPress to create clean, functional, and modern digital
              experiences.
            </p>
            <p className="text-lg leading-relaxed mt-4 select-none">
              From frontend interfaces to backend logic, I enjoy solving
              real-world problems through code and continuously learning new
              tools along the way.
            </p>
          </div>

          {/* Code Block */}
          <div className="md:w-1/2 w-full p-6 rounded-xl bg-[#0F172A] shadow-xs shadow-white h-full overflow-x-auto">
            <pre>
              <code className="bg-gradient-to-r from-white to-[#818CF8] bg-clip-text text-transparent text-sm whitespace-pre-wrap select-none">
{`const developer = {
  name: "Praanjal Joshi",
  age: 19,
  location: "India",
  stack: ["JavaScript", "React", "Node.js", "MongoDB", "WordPress", ...],
  traits: {
    selfTaught: true,
    detailOriented: true,
    tellsBadJokes: true
  },
  currentFocus: "Building portfolio",
  hireable() {
    return this.traits.selfTaught && this.stack.length >= 4;
  }
};

console.log(developer.hireable()); 
`}
              </code>
            </pre>
          </div>
        </div>

        {/* Watermark Text */}
        <div className="absolute bottom-2 left-4 text-white text-6xl opacity-5 font-mono font-extrabold pointer-events-none">
          About
        </div>
      </div>
    </>
  );
};

export default AboutPage;
