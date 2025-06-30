import Profile from "../assets/ppp.png";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiJavascript, SiSass } from "react-icons/si";

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
        <div className="relative">
          <img
            src={Profile}
            alt=""
            className="rounded-4xl min-w-60 max-w-90 aspect-square"
          />
          <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent trans to-back"></div>
        </div>

        <div className="flex flex-col gap-2.5 max-w-[1000px]">
          <div className="text-grow w-full rounded">
            <h2 className="drop-shadow-[1px_5px_1px] text-accent text-2xl sm:text-4xl font-bold flex justify-center md:justify-start pb-2">
              <span className="text-grow">Who I Am</span>
            </h2>
          </div>
          <p className="text-sm md:text-start text-center pb-2 tracking-wide leading-6">
            I'm MD Farhan Sadik, a Frontend Web Developer from Bangladesh with
            1+ year of experience building responsive and high-performing web
            applications. I specialize in React.js, JavaScript and Tailwind CSS and focus on writing clean, scalable code. I enjoy
            turning ideas into functional, visually appealing products that work
            smoothly across all devices.
          </p>

          <div className="flex gap-5 w-full justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/md-farhan-sadik-467340316/"
              target="_blank"
              className="flex items-center justify-center h-10 w-40 gap-1 text-sm font-medium rounded-full hover:bg-primary border border-primary hover:text-back text-primary trans hover:shadow-accent shadow-primary hover:text-lg"
            >
              LinkedIn
              <CiLocationArrow1 className="text-xl mt-1 animate-bounce" />
            </a>
            <a
              href="https://github.com/master-farhan"
              target="_blank"
              className="flex items-center justify-center h-10 w-40 gap-1 text-sm font-medium rounded-full hover:bg-primary border border-primary hover:text-back text-primary trans hover:shadow-accent shadow-primary hover:text-lg"
            >
              Github
              <CiLocationArrow1 className="text-xl mt-1 animate-bounce" />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-3 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="flex items-center justify-center gap-2 px-3 sm:px-5 py-1 text-sm border border-primary text-primary rounded-full trans animate-pulse shadow-primary/10 shadow-xl"
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
