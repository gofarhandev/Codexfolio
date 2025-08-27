// Services.jsx
import ServiceCards from "../components/ServiceCards";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building highly responsive and modern user interfaces using React, HTML, CSS, and JavaScript. I focus on creating pixel-perfect designs, smooth animations, and an intuitive user experience. Optimized for performance, accessibility, and cross-browser compatibility to ensure your application works flawlessly across all devices and screen sizes.",
    icon: "💻",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Developing robust backend systems and APIs using Node.js, Express, and databases like MongoDB. I implement secure authentication, authorization (JWT), and data validation to ensure reliable and scalable server-side logic. The focus is on clean, maintainable code that can handle high traffic, integrate with third-party services, and support complex business logic efficiently.",
    icon: "🛠️",
  },
  {
    id: 3,
    title: "Fullstack Development",
    description:
      "Combining frontend and backend expertise to deliver complete web applications from scratch. I design the architecture, implement database schemas, create RESTful APIs, and develop a dynamic frontend. The goal is to provide end-to-end solutions that are secure, scalable, and user-friendly, ensuring smooth interaction between the client-side and server-side components.",
    icon: "🌐",
  },
  {
    id: 4,
    title: "Landing Page Design",
    description:
      "Creating high-converting landing pages with a focus on engaging UI and UX. I craft visually appealing layouts, persuasive content, and clear call-to-actions to increase user engagement and drive conversions. Each landing page is optimized for speed, mobile responsiveness, and SEO to ensure maximum reach and effectiveness for marketing campaigns.",
    icon: "📄",
  },
];

const Services = () => {
  return (
    <section className="relative pt-10 pb-15 lg:pt-[3vw] lg:pb-[4vw]">
      {/* Section Title */}
      <div className="relative text-center mb-12 lg:mb-[3.2vw]">
        <h2 className="text-grow text-xl sm:text-3xl lg:text-[2.5vw] flex justify-center">
          How I Can Help
        </h2>
        <p className="mt-4 lg:mt-[1.3vw] text-lg sm:text-xl lg:text-[1.5vw] text-grow">
          Delivering modern web solutions tailored to your needs
        </p>
      </div>

      {/* Service Cards */}
      <div className="">
        <ServiceCards services={services} />
      </div>
    </section>
  );
};

export default Services;
