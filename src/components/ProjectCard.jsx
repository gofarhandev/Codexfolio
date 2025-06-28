import { useEffect, useState } from "react";
import Carousel from "./Carousel";

const CarouselWrapper = () => {
  const [baseWidth, setBaseWidth] = useState(700);
  const [baseHeight, setBaseHeight] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setBaseWidth(width * 0.95); // almost full on mobile
        setBaseHeight(350);
      } else if (width < 1024) {
        setBaseWidth(width * 0.85);
        setBaseHeight(450);
      } else {
        setBaseWidth(width * 0.7);
        setBaseHeight(500);
      }
    };

    handleResize(); // initial set
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-10">
      <div style={{ width: "100%", maxWidth: `${baseWidth}px` }}>
        <Carousel
          baseWidth={baseWidth}
          baseHeight={baseHeight}
          autoplay={true}
          autoplayDelay={5000}
          pauseOnHover={false}
          loop={true}
          round={false}
        />
      </div>
    </div>
  );
};

export default CarouselWrapper;
