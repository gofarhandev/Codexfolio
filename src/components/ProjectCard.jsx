import { useEffect, useState } from "react";
import Carousel from "./Carousel";

const CarouselWrapper = () => {
  const [baseWidth, setBaseWidth] = useState(700);
  const [baseHeight, setBaseHeight] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setBaseWidth(320);
        setBaseHeight(250);
      } else if (width < 541) {
        setBaseWidth(400);
        setBaseHeight(250);
      } else if (width < 679) {
        setBaseWidth(450);
        setBaseHeight(250);
      } else if (width < 821) {
        setBaseWidth(550);
        setBaseHeight(250);
      } else {
        setBaseWidth(600);
        setBaseHeight(250);
      }
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-20 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center w-full h-full">
          <div style={{ height: `${baseHeight}px`, position: "relative" }}>
            <Carousel
              baseWidth={baseWidth}
              baseHeight={baseHeight}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={false}
              loop={true}
              round={false}
            />
          </div>
        </div>

        <div className="relative overflow-hidden w-full p-5 border rounded border-primary/20 drop-shadow-[1px_5px_1px]  text-accent mt-5">
          <div className="absolute -bottom-15 -right-20 h-30 w-20 rounded-full bg-primary shadow-[0px_10px_10vw] shadow-primary"></div>

          <div className="text-grow font-medium ">
            <p>
              <span className="text-xl font-bold">🚀 Projects that Brought Ideas to Life</span><br /><br /> I build
              responsive, accessible, and performance-driven websites using
              modern tools like React, Tailwind, and JavaScript. These projects
              reflect my passion for clean code, user-focused design, and
              continuous learning through real-world problem solving.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselWrapper;
