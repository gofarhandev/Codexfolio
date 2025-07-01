// import Profile from "../assets/ppp.png";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiJavascript, SiSass } from "react-icons/si";
import { IoMdCloudDownload } from "react-icons/io";
import CV from "../../public/CV.pdf";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "SCSS", icon: <SiSass className="text-pink-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
];

const About = () => {
  return (
    <div className="pt-10 pb-40">
      {/* content */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-15 xl:gap-20 items-center justify-center w-full relative">
        <div className="flex flex-col gap-5">
          <div className="text-grow w-full rounded">
            <h2 className="drop-shadow-[1px_5px_1px] text-accent text-3xl sm:text-4xl flex justify-center">
              <span className="text-grow">Who I Am</span>
            </h2>
          </div>
          <p className="text-xl sm:text-2xl text-center tracking-wide leading-8 font-playfair">
            I’m MD Farhan Sadik, a dedicated Frontend Web Developer based in
            Bangladesh, with 1+ year of experience in building responsive,
            accessible, and performance-driven web applications. At 21 years
            old, I bring both creativity and technical precision to every
            project I work on. My skill set includes JavaScript, React.js,
            Tailwind CSS, HTML, CSS, and Node.js — tools I use to craft clean,
            scalable code and deliver seamless user experiences. I take pride in
            transforming ideas into engaging, functional digital products that
            not only look great but also perform efficiently across devices.
          </p>

          <div className="flex gap-5 w-full justify-center">
            <a
              href={CV}
              download
              className="flex items-center justify-center h-10 w-40 gap-1 text-lg font-medium rounded-full hover:bg-primary border border-primary hover:text-back text-primary trans hover:shadow-accent shadow-primary hover:text-xl"
            >
              Resume
              <IoMdCloudDownload className="mt-1  animate-bounce" />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-5 pt-2 justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="flex items-center justify-center gap-2 px-3 sm:px-5 py-1 text-xl sm:text-2xl font-playfair text-primary rounded-full trans"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
