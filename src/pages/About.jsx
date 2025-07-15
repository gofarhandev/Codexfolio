// import Profile from "../assets/ppp.png";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { SiRedux, SiTailwindcss, SiJavascript, SiSass } from "react-icons/si";
import CV from "../../public/CV.pdf";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import AnchorButton from "../components/AnchorButton";

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
    <div className="pt-10 pb-30 lg:pb-[8.5vw]">
      {/* content */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-15 xl:gap-20 items-center justify-center w-full relative">
        <div className="flex flex-col gap-5 lg:gap-[1.5vw]">
          <div className="text-grow w-full rounded">
            <h2 className="drop-shadow-[1px_5px_1px] text-accent text-3xl sm:text-4xl lg:text-[2.5vw] flex justify-center">
              <span className="text-grow">Who I Am</span>
            </h2>
          </div>
          <p className="text-xl sm:text-2xl lg:text-[1.5vw] text-center tracking-widest leading-10 lg:leading-[3vw]">
            I’m MD Farhan Sadik, a dedicated Frontend Web Developer based in
            Bangladesh, with 1 year+ of experience in building responsive,
            accessible, and performance-driven web applications. At 21 years
            old, I bring both creativity and technical precision to every
            project I work on. My skill set includes JavaScript, React.js,
            Tailwind CSS, HTML, CSS, and Node.js — tools I use to craft clean,
            scalable code and deliver seamless user experiences. I take pride in
            transforming ideas into engaging, functional digital products that
            not only look great but also perform efficiently across devices.
          </p>

          <div className="flex w-full items-center gap-5 justify-center">
            <AnchorButton
              href="https://github.com/master-farhan"
              label="Github"
              icon={
                <FiGithub className="transition-transform duration-300 group-hover:text-sm lg:text-[1vw] lg:group-hover:text-[1.2vw] group-hover:-rotate-12" />
              }
            />

            <AnchorButton
              href="/CV"
              download={true}
              label="Resume"
              icon={
                <FaRegFilePdf className="transition-transform duration-300 group-hover:text-sm lg:text-[1vw] lg:group-hover:text-[1.2vw] group-hover:-rotate-12" />
              }
            />

            <AnchorButton
              href="https://www.linkedin.com/in/md-farhan-sadik-467340316/"
              label="LinkedIn"
              icon={
                <FaLinkedinIn className="transition-transform duration-300 group-hover:text-sm lg:text-[1vw] lg:group-hover:text-[1.2vw] group-hover:-rotate-12" />
              }
            />
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-5 lg:gap-[1.5vw] pt-2 lg:pt-[.5vw] justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="flex items-center justify-center gap-2 lg:gap-[.5vw] px-3 sm:px-5 lg:px-[1.5vw] py-1 lg:py-[.2vw] text-sm sm:text-xl lg:text-[1.8vw] font-playfair text-primary rounded-full trans"
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
