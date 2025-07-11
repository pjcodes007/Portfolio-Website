import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-5 px-1 border-t  border-white relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2 select-none">Get in Touch</h3>
          <p className="flex gap-2 items-center select-none">
            Email:{" "}
            <a
              href="mailto:your.email@example.com"
              className="underline hover:text-purple-300 transition select-none"
            >
              <FaEnvelope/>
            </a>
          </p>
          <p className="select-none">Location: India</p>
        </div>

        <div className="text-center md:text-left">
            <p className="text-sm opacity-30 select-none">©2025 Praanjal Joshi</p>
        </div>


        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
         <div className="text-white text-5xl absolute bottom-1 left-0 opacity-7 font-[monospace] font-extrabold select-none ">Footer</div>
    </footer>
  );
};

export default Footer;
