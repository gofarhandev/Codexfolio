import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { FaCheck } from "react-icons/fa6";

const PageLoader = ({ onFinish }) => {
  const [percentage, setPercentage] = useState(0);
  const titleRef = useRef([]);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);
  const checkBoxRefs = useRef([]);
  const checkIconRefs = useRef([]);

  const features = [
    "Responsive Website",
    "Smooth Animations",
    "Real Projects",
    "Reusable Components",
    "Clean & Modern UI",
  ];

  // Animate Heading
  useEffect(() => {
    if (!titleRef.current) return;
    gsap.set(titleRef.current, { opacity: 0 });

    gsap.to(titleRef.current, {
      opacity: 1,
      stagger: 0.07,
      ease: "power2.out",
    });
  }, []);

  // Animate List + Tick Boxes
  useEffect(() => {
    gsap.set(itemRefs.current, { opacity: 0, y: 10 });

    gsap.to(itemRefs.current, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      delay: 1.5,
      duration: 0.6,
      ease: "power2.out",
    });

    features.forEach((_, i) => {
      gsap.set(checkIconRefs.current[i], { opacity: 0, scale: 0.5 });
      gsap.set(checkBoxRefs.current[i], { borderColor: "#ccc5" });

      gsap.to(checkBoxRefs.current[i], {
        delay: 2 + i * 0.2,
        // borderColor: "#22c55e",
        color: "#22c55e",
        duration: 0.3,
      });

      gsap.to(checkIconRefs.current[i], {
        delay: 2.2 + i * 0.2,
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    });
  }, []);

  // Animate Percentage + Fade Out Loader
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) return prev + 1;

        clearInterval(interval);

        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 0.3,
          onComplete: () => {
            setTimeout(() => {
              onFinish();
            }, 100);
          },
        });

        return 100;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onFinish]);

  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const fullstackRef = useRef(null);

  useEffect(() => {
    // Frontend + Backend Labels
    gsap.set([frontendRef.current, backendRef.current], { opacity: 0, y: -20 });

    gsap.to(frontendRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.to(backendRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out",
    });

    // Fade them out & show FULLSTACK
    gsap.to([frontendRef.current, backendRef.current], {
      opacity: 0,
      y: -20,
      delay: 2,
      duration: 0.5,
      ease: "power1.inOut",
    });

    gsap.set(fullstackRef.current, { opacity: 0, scale: 0.8 });

    gsap.to(fullstackRef.current, {
      opacity: 1,
      scale: 1,
      delay: 2.5,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-back text-grow flex flex-col items-center justify-center font-Michroma overflow-hidden transition-opacity duration-500 w-full"
    >
      {/* bg Animations */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full animate-bg-blend " />

        <h3
          ref={frontendRef}
          className="absolute top-5 left-5 lg:top-[2vw] lg:left-[3.5vw] text-grow text-base sm:text-lg lg:text-[2vw] z-10 font-semibold"
        >
          FRONTEND
        </h3>

        <h3
          ref={fullstackRef}
          className="absolute top-40 lg:top-[8vw] left-1/2 -translate-x-1/2 text-grow text-lg font-semibold sm:text-lg lg:text-[3vw] z-10 whitespace-nowrap"
        >
          FULLSTACK
        </h3>

        <h3
          ref={backendRef}
          className="absolute top-5 right-5 lg:top-[2vw] lg:right-[3.5vw] text-grow text-base font-semibold sm:text-lg lg:text-[2vw] z-10"
        >
          BACKEND
        </h3>
      </div>

      {/* Heading */}
      <h1 className="text-lg font-semibold sm:text-5xl lg:text-[4vw] mb-6 lg:mb-[2vw] text-grow flex gap-1 lg:gap-[.7vw]">
        {"ASSALAMU  ALAIKUM".split("").map((char, i) => (
          <p key={i} ref={(el) => (titleRef.current[i] = el)}>
            {char}
          </p>
        ))}
      </h1>

      {/* Feature List */}
      <div className="absolute bottom-5 left-5 lg:bottom-[2vw] lg:left-[3.5vw] flex flex-col gap-3 lg:gap-[1vw] text-grow/50 text-sm sm:text-base lg:text-[1vw] text-left items-center flex-wrap w-full">
        {features.map((text, i) => (
          <div
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            className="flex items-center gap-2 lg:gap-[.6vw] w-full"
          >
            <div
              ref={(el) => (checkBoxRefs.current[i] = el)}
              className="w-4 h-4 lg:h-[1vw] lg:w-[1vw] border-2 border-grow/10 text-grow/0 rounded-[4px] flex items-center justify-center transition-all duration-300 mt-[2px] lg:-mt-[.007vw]"
            >
              <span ref={(el) => (checkIconRefs.current[i] = el)}>
                <FaCheck className="text-xs lg:text-[.7vw]" />
              </span>
            </div>
            <div>{text}</div>
          </div>
        ))}
      </div>

      {/* Loading Percentage */}
      <h3 className="absolute bottom-5 right-5 lg:bottom-[2vw] lg:right-[3.5vw] text-grow text-base font-medium sm:text-lg lg:text-[2vw] z-10">
        {percentage}%
      </h3>
    </div>
  );
};

export default PageLoader;
