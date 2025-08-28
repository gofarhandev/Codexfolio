// Services.jsx
import ServiceCards from "../components/ServiceCards";
import {
  FaLaptopCode,
  FaFileAlt,
  FaComments,
  FaCreditCard,
  FaCogs,
  FaRocket,
} from "react-icons/fa";

export const workProcess = [
  {
    id: 1,
    title: "What I Build",
    icon: <FaLaptopCode className="text-3xl text-blue-500" />,
    description:
      "I build modern full stack websites including Portfolio, Business, E-commerce, Blogs, Dashboards, and SaaS apps with responsive UI and secure backend.",
  },
  {
    id: 2,
    title: "Requirements",
    icon: <FaFileAlt className="text-3xl text-green-500" />,
    description:
      "You provide Figma/PSD/XD design and project details. If no design is available, I can use premium templates or suggest a designer.",
  },
  {
    id: 3,
    title: "Discussion & Planning",
    icon: <FaComments className="text-3xl text-yellow-500" />,
    description:
      "We discuss your requirements, features, budget, and deadline. Then I create a clear roadmap for the project.",
  },
  {
    id: 4,
    title: "Payment",
    icon: <FaCreditCard className="text-3xl text-purple-500" />,
    description:
      "I accept payments through Payoneer and Bkash. 50% advance before starting, and the remaining 50% after delivery.",
  },
  {
    id: 5,
    title: "Development & Updates",
    icon: <FaCogs className="text-3xl text-red-500" />,
    description:
      "I start development (frontend + backend) and share regular updates with live previews. Feedback is applied during the process.",
  },
  {
    id: 6,
    title: "Delivery & Support",
    icon: <FaRocket className="text-3xl text-indigo-500" />,
    description:
      "On-time delivery with clean, optimized code. Free bug-fix support for 1 month, and extra features available on request.",
  },
];

const Services = () => {
  return (
    <section className="relative pt-10 pb-30 lg:pt-[3vw] lg:pb-[8vw]">
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
        <ServiceCards services={workProcess} />
      </div>
    </section>
  );
};

export default Services;
