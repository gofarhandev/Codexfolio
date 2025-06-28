import { useEffect, useState, useRef } from "react";
import Cook from "../assets/Cook.png";
import Travel from "../assets/Travel.png";
import Port from "../assets/Port.png";
import Gadget from "../assets/Gadget.png";
import Bubble from "../assets/Bubble.png";
import Hotel from "../assets/Hotel.png";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiCircle, FiFileText, FiLayers } from "react-icons/fi";

const DEFAULT_ITEMS = [
  {
    title: "Code & Cook",
    description: "React.js, Tailwind CSS",
    icon: <FiFileText className="h-[16px] w-[16px] text-grow" />,
    live: "https://master-farhan.github.io/recipe/",
    github: "https://github.com/master-farhan/recipe",
    img: Cook,
  },
  {
    title: "My Gadget Bd",
    description: "React.js, Redux, Tailwind CSS",
    icon: <FiCircle className="h-[16px] w-[16px] text-grow" />,
    live: "https://my-gadget-bd.netlify.app/",
    github: "https://github.com/master-farhan/My-Gadget",
    img: Gadget,
  },
  {
    title: "Travel Website",
    description: "React.js, Tailwind CSS",
    icon: <FiLayers className="h-[16px] w-[16px] text-grow" />,
    live: "https://travel-web-go.netlify.app/",
    github: "https://github.com/master-farhan/Travel",
    img: Travel,
  },
  {
    title: "Portfolio",
    description: "HTML, CSS, JavaScript",
    icon: <FiLayers className="h-[16px] w-[16px] text-grow" />,
    live: "https://farhan-studio.netlify.app/",
    github: "https://github.com/master-farhan/studio",
    img: Port,
  },
  {
    title: "Hotel Booking",
    description: "React.js, Tailwind CSS",
    icon: <FiLayers className="h-[16px] w-[16px] text-grow" />,
    live: "https://hotel-booking-002.netlify.app/",
    github: "https://github.com/master-farhan/hotel-booking",
    img: Hotel,
  },
  {
    title: "Bubble Game",
    description: "HTML, CSS, JavaScript",
    icon: <FiLayers className="h-[16px] w-[16px] text-grow" />,
    live: "https://master-farhan.github.io/Bubble-Game/",
    github: "https://github.com/master-farhan/Bubble-Game",
    img: Bubble,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  baseHeight = 800,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const carouselItems = loop ? [...items, items[0]] : items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) return prev + 1;
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div className=" rounded w-full flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative w-full flex items-center justify-center flex-col"
      >
        <motion.div
          className="flex"
          drag="x"
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 400,
            perspectiveOrigin: `${
              currentIndex * trackItemOffset + itemWidth / 2
            }px 50%`,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationComplete={handleAnimationComplete}
        >
          {carouselItems.map(
            ({ title, img, live, github, icon, description }, index) => {
              const range = [
                -(index + 1) * trackItemOffset,
                -index * trackItemOffset,
                -(index - 1) * trackItemOffset,
              ];
              const outputRange = [90, 0, -90];
              const rotateY = useTransform(x, range, outputRange, {
                clamp: false,
              });

              return (
                <motion.div
                  key={index}
                  className={`relative shrink-0 flex flex-col justify-center items-center ${
                    round
                      ? "items-center justify-center text-center bg-transparent border-0"
                      : "flex items-center justify-center bg-transparent w-full"
                  } overflow-hidden cursor-grab active:cursor-grabbing`}
                  style={{
                    width: itemWidth,
                    height: "auto",
                    rotateY,
                    ...(round && { borderRadius: "50%" }),
                  }}
                  transition={effectiveTransition}
                >
                  {/* --------------------------- */}
                  <div className="relative w-full border border-primary/20 rounded group overflow-hidden lg:w-3/5">
                    <img
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                      src={img}
                      alt={title}
                    />
                    <div className="absolute inset-0 bg-back/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300">
                      <div className="p-5 flex flex-col justify-between h-full">
                        <div>
                          <div className="mb-1 font-black text-2xl text-grow">
                            {title}
                          </div>
                          <p className="text-lg font-medium text-grow">
                            {description}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <a
                            href={live}
                            target="_blank"
                            className="text-grow py-1 px-5 bg-accent rounded-2xl hover:bg-accent/50 transition"
                          >
                            Live
                          </a>
                          <a
                            href={github}
                            target="_blank"
                            className="text-grow py-1 px-5 bg-accent rounded-2xl hover:bg-accent/50 transition"
                          >
                            Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </motion.div>

        {/* Dot Indicators */}
        <div
          className={`flex w-full justify-center ${
            round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
          }`}
        >
          <div className="mt-4 flex w-[150px] justify-between px-8">
            {items.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                  currentIndex % items.length === index
                    ? "bg-grow"
                    : "bg-grow/20"
                }`}
                animate={{
                  scale: currentIndex % items.length === index ? 1.2 : 1,
                }}
                onClick={() => setCurrentIndex(index)}
                transition={{ duration: 0.15 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
