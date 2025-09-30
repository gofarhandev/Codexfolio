import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaNodeJs,
  FaLock,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import { FaRegFilePdf, FaLinkedinIn } from "react-icons/fa6";
import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiSass,
  SiExpress,
} from "react-icons/si";
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
  { name: "Express", icon: <SiExpress className="text-yellow-500" /> }, 
  { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
  { name: "JWT", icon: <FaLock className="text-yellow-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "NPM", icon: <FaNpm className="text-red-600" /> },
];

const About = () => {
  return (
    <section className="relative py-25 lg:pt-[6vw] lg:pb-[7vw]">
      <h2 className="project-heading text-grow text-xl sm:text-3xl lg:text-[2.5vw] flex justify-center font-bold">
        Who I Am
      </h2>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-[2vw] items-center justify-center w-full relative">
        <div className="flex flex-col gap-5 lg:gap-[2vw]">
          <div className="about-heading text-grow w-full rounded"></div>
          <p className="about-p text-xl sm:text-2xl lg:text-[1.5vw] text-center tracking-wide leading-10 lg:leading-[3vw]">
            I’m MD Farhan Sadik, a Frontend Web Developer from Bangladesh with
            over one year of experience creating responsive, accessible, and
            high-performance web applications. At 21, I specialize in
            JavaScript, React.js, Tailwind CSS, HTML, CSS, Express, MongoDB and
            Node.js to deliver clean, scalable code and seamless user
            experiences. I am passionate about turning ideas into efficient,
            visually appealing digital products.
          </p>

          <div className="about-a flex w-full items-center gap-5 lg:gap-[1.5vw] justify-center">
            <AnchorButton
              href="https://github.com/gofarhandev/"
              label="Github"
              icon={
                <FiGithub className="transition-transform duration-300 group-hover:text-sm lg:text-[1vw] lg:group-hover:text-[1.2vw] group-hover:-rotate-12" />
              }
            />

            <AnchorButton
              href="https://www.canva.com/design/DAGuoR1mqnw/DvmWx30ZBGVfNVv1b28Jsw/view?utm_content=DAGuoR1mqnw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb4dfbd4ce2"
              download={true}
              label="Resume"
              icon={
                <FaRegFilePdf className="transition-transform duration-300 group-hover:text-sm lg:text-[1vw] lg:group-hover:text-[1.2vw] group-hover:-rotate-12" />
              }
            />

            <AnchorButton
              href="https://www.linkedin.com/in/gofarhandev/"
              label="LinkedIn"
              icon={
                <FaLinkedinIn className="transition-transform duration-300 group-hover:text-sm lg:text-[1vw] lg:group-hover:text-[1.2vw] group-hover:-rotate-12" />
              }
            />
          </div>

          <div className="about-s flex flex-wrap gap-3 sm:gap-5 lg:gap-[1.5vw] pt-2 lg:pt-[.5vw] justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="flex items-center justify-center gap-2 lg:gap-[.5vw]  text-lg px-4 border border-accent lg:px-[1vw] lg:text-[1.6vw] font-playfair text-grow rounded-full trans"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
