import { useEffect, useRef } from "react";
import gsap from "gsap";
import gif from "/gif.png";
import LinkButton from "./LinkButton";

const Hero = () => {
  const imgRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      imgRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        nameRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
        },
        "-=0.4"
      );
  }, []);

  return (
    <div className="flex items-center justify-center z-10 mb-20 lg:mb-0">
      <div className="text-grow overflow-hidden rounded relative lg:h-[77vh] w-full">
        {/* box */}
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col gap-3 lg:gap-[1vw] items-center w-full text-center">
            <img
              ref={imgRef}
              src={gif}
              alt=""
              className="rounded-full shadow-2xl shadow-primary/20 bg-back h-30 w-30 lg:w-[10vw] lg:h-[10vw]"
            />
            <h1
              ref={nameRef}
              className="text-xl text-grow sm:text-3xl lg:text-[3.5vw] font-bold"
            >
              MD FARHAN SADIK
            </h1>
            <h2
              ref={subtitleRef}
              className="font-bold text-grow text-lg sm:text-2xl lg:text-[2.5vw] pb-4 lg:pb-[1.5vw]"
            >
              Fullstack Developer
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
