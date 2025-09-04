"use client";
import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://i.pravatar.cc/150?img=1",
      name: "Sophia Williams",
      feedback:
        "Working with this team was a fantastic experience. They delivered everything on time with great attention to detail.",
    },
    {
      image: "https://i.pravatar.cc/150?img=2",
      name: "James Carter",
      feedback:
        "I’m impressed by the professionalism and creativity. The project turned out better than I had imagined.",
    },
    {
      image: "https://i.pravatar.cc/150?img=3",
      name: "Ava Johnson",
      feedback:
        "The communication was smooth and the results were excellent. Highly recommended for anyone looking for quality work.",
    },
    {
      image: "https://i.pravatar.cc/150?img=4",
      name: "Liam Anderson",
      feedback:
        "They transformed our idea into a fully functional product. Extremely reliable and skilled.",
    },
    {
      image: "https://i.pravatar.cc/150?img=5",
      name: "Olivia Martinez",
      feedback:
        "Great experience from start to finish! Very professional, responsive, and delivered outstanding results.",
    },
  ];

  // Embla Carousel hook
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <div className="my-20 lg:my-[8vw]">
      {/* Heading */}
      <h2 className="testimonial-heading text-center text-xl sm:text-3xl lg:text-[2.5vw] font-bold">
        What My Clients Say
      </h2>
      <p className="testimonial-heading mt-4 lg:mt-[1.3vw] text-lg sm:text-xl lg:text-[1.5vw] text-center text-gray-400">
        I’ve had the privilege to work with amazing clients across different
        industries. Here’s what they say about working with me.
      </p>

      {/* Embla Carousel */}
      <div className="overflow-hidden mt-10 lg:mt-[3vw]" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item, ind) => (
            <div
              key={ind}
              className="flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] flex justify-center"
            >
              <div className="flex flex-col items-center text-center justify-center lg:p-[1.7vw] p-6 rounded-2xl lg:rounded-[1.5vw] bg-accent/30 scale-80 backdrop-blur-md shadow-lg hover:scale-90 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 lg:h-[6vw] lg:w-[6vw] object-cover rounded-full border border-grow shadow-md"
                />
                <h3 className="text-lg sm:text-xl lg:text-[1.5vw] font-semibold mt-3">
                  {item.name}
                </h3>
                <p className="lg:text-[1.2vw] text-base tracking-wide text-gray-300 mt-2 lg:mt-[.7vw]">
                  {item.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
