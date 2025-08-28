import { useEffect, useRef } from "react";
import gsap from "gsap";
import { IoLogoHtml5 } from "react-icons/io";
import {
  FaCss3,
  FaSquareJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaLock,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa6";
import { SiRedux, SiTailwindcss, SiSass, SiExpress } from "react-icons/si";

const skill = [
  { id: 1, icon: <IoLogoHtml5 />, name: "HTML" },
  { id: 2, icon: <FaCss3 />, name: "CSS" },
  { id: 3, icon: <FaSquareJs />, name: "JavaScript" },
  { id: 4, icon: <FaReact />, name: "React" },
  { id: 5, icon: <SiRedux />, name: "Redux" },
  { id: 6, icon: <FaNodeJs />, name: "Node" },
  { id: 7, icon: <SiTailwindcss />, name: "Tailwind" },
  { id: 8, icon: <SiSass />, name: "Sass" },
  { id: 9, icon: <FaGithub />, name: "Github" },
  { id: 10, icon: <SiExpress />, name: "Express" },
  { id: 11, icon: <FaDatabase />, name: "MongoDB" },
  { id: 12, icon: <FaLock />, name: "JWT" },
  { id: 13, icon: <FaGitAlt />, name: "Git" },
  { id: 14, icon: <FaNpm />, name: "NPM" },
];

const Skills = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    const totalWidth = el.scrollWidth / 2; // because we duplicate the content
    gsap.to(el, {
      x: -totalWidth,
      duration: 14, // adjust speed
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="pt-10 mb-20 lg:mb-[5.5vw] overflow-hidden">
      <div
        ref={marqueeRef}
        className="flex gap-10 lg:gap-[3vw] font-playfair whitespace-nowrap"
      >
        {[...Array(2)].map((_, loopIndex) => (
          <div className="flex gap-10 lg:gap-[3vw]" key={loopIndex}>
            {skill.map(({ id, icon, name }) => (
              <div
                key={`${id}-${loopIndex}`}
                className="flex items-center text-3xl sm:text-5xl mr-5 lg:mr-[2vw] gap-2"
              >
                <span className="text-primary flex gap-1 lg:gap-[.5vw] items-center text-xl lg:text-[2vw]">
                  {icon}
                  <h2>{name}</h2>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
