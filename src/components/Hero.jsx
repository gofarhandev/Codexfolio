import { useRef } from "react";
import LinkButton from "./LinkButton";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const imgRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  return (
    <div className="flex items-center justify-center z-10 mb-20 lg:mb-0">
      <div className="text-grow overflow-hidden rounded relative lg:h-[77vh] w-full">
        {/* box */}
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col gap-3 lg:gap-[1vw] items-center w-full text-center">
            <img
              ref={imgRef}
              src={
                "https://ik.imagekit.io/iura/Portfolio-project/ppp.png?updatedAt=1759219064100"
              }
              alt=""
              className="rounded-full shadow-2xl shadow-primary/20 bg-back h-30 w-30 lg:w-[10vw] object-cover lg:h-[10vw]"
            />
            <h1
              ref={nameRef}
              className="text-xl text-grow sm:text-3xl lg:text-[3.5vw] font-bold"
            >
              MD FARHAN SADIK
            </h1>
            <h2 className="font-bold text-primary uppercase text-sm sm:text-xl lg:text-[2vw] pb-4 lg:pb-[1.3vw]">
              <Typewriter
                words={[
                  "Fullstack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "MERN Stack Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </h2>
          </div>

          <div className="flex flex-col text-center gap-5 lg:gap-[2vw] w-full">
            <div
              ref={descRef}
              className="text-grow w-full rounded backdrop-blur-2xl"
            >
              <p className="text:lg sm:text-xl lg:text-[1.7vw]">
                I’m a Fullstack Developer turning ideas into interactive,
                scalable web applications. From designing intuitive interfaces
                to crafting robust server-side logic, I bring visions to life
                across the entire stack.
              </p>
            </div>
            <div
              ref={buttonsRef}
              className="flex justify-center items-end gap-5 lg:gap-[1.5vw]"
            >
              <LinkButton to="/projects" label="View Work" />
              <LinkButton to="/contact" label="Hire Me" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
