// Services.jsx
import React, { useEffect, useRef } from "react";
import ServicesCard from "../components/ServicesCard";
import { FaLaptopCode, FaMobileAlt, FaGlobe, FaBolt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: "Landing Page",
    description:
      "Build modern, fast, and fully responsive websites using React.js and Tailwind CSS. Clean code and performance optimized.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Website",
    description:
      "Develop mobile-friendly layouts that work smoothly across all screen sizes. Pixel-perfect implementation from any design.",
  },
  {
    icon: <FaGlobe />,
    title: "Portfolio Website",
    description:
      "Design and develop personal portfolios, agency sites, or product landing pages that are clean, attractive, and fast-loading.",
  },
  {
    icon: <FaBolt />,
    title: "E-Commerce Website",
    description:
      "Fix layout issues, performance problems, or JavaScript bugs in your frontend codebase to improve UX and loading speed.",
  },
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate section heading
    gsap.from(".service-heading", {
      scrollTrigger: {
        trigger: ".service-heading",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: "power2.out",
    });

    // Animate each card
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: index * 0.2,
          ease: "power2.out",
        });
      }
    });
  }, []);

  return (
    <div className="pt-10 lg:pt-[2.5vw] pb-30 lg:pb-[8.5vw]">
      {/* Section Title */}
      <div className="text-grow px-5 lg:px-[1.5vw] w-full rounded flex justify-center pb-5 lg:pb-[1.5vw]">
        <h2 className="service-heading drop-shadow-[1px_5px_1px] text-accent text-xl sm:text-3xl lg:text-[2.5vw] font-bold pb-5 lg:pb-[1.5vw] text-center">
          <span className="text-grow">How I Can Help</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="w-full grid grid-cols-1 gap-5 lg:gap-[2vw] sm:grid-cols-2 xl:grid-cols-2">
        {servicesData.map((service, idx) => (
          <ServicesCard
            key={idx}
            refEl={(el) => (cardsRef.current[idx] = el)}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
