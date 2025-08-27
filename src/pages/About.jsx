import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaLock,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import { FaRegFilePdf, FaLinkedinIn } from "react-icons/fa6";
import { SiRedux, SiTailwindcss, SiJavascript, SiSass } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import AnchorButton from "../components/AnchorButton";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "SCSS", icon: <SiSass className="text-pink-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <FaNodeJs className="text-gray-700" /> }, // reused Node icon
  { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
  { name: "JWT", icon: <FaLock className="text-yellow-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "NPM", icon: <FaNpm className="text-red-600" /> },
];

const About = () => {
  // gsap
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils
      .toArray([".about-heading", ".about-p", ".about-a", ".about-s"])
      .forEach((className, index) => {
        gsap.from(className, {
          scrollTrigger: {
            trigger: className,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 0.6,
          delay: index * 0.2,
          ease: "power2.out",
        });
      });
  }, []);

  return (
    <section className="relative pt-[4vw] pb-20 lg:pb-[5.5vw]">
      <h2 className="project-heading text-grow text-xl sm:text-3xl lg:text-[2.5vw] flex justify-center">
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

          <div className="about-s flex flex-wrap gap-3 sm:gap-5 lg:gap-[1.5vw] pt-2 lg:pt-[.5vw] justify-center">
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
    </section>
  );
};

export default About;
