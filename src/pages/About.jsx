import { ImUser } from "react-icons/im";
import { IoMdCloudDownload } from "react-icons/io";

const About = () => {
  return (
    <div className="mt-5 mb-20">
      <div className="h-full w-full drop-shadow-[1px_5px_1px] bg-back text-accent overflow-hidden rounded relative">
        {/* effect */}
        <div className="absolute -top-15 -left-20 h-30 w-20 rounded-full bg-primary shadow-[0px_10px_20vw] shadow-primary"></div>

        {/* content */}
        <div className="grid gap-10 grid-cols-2 sm:grid-cols-4  ">
          <div className="text-grow p-5 order-1 w-full sm:col-span-1  rounded flex items-center justify-center">
            <p className="w-full drop-shadow-[1px_5px_1px] text-accent text-xl  sm:text-2xl font-bold">
              <span className="text-grow flex items-center gap-2 whitespace-nowrap">
                <ImUser /> About Me
              </span>
            </p>
          </div>
          <div className="bg-accent/10 order-2 sm:order-1 col-span-2 text-grow p-5 w-full rounded backdrop-blur-2xl">
            <p className="drop-shadow-[1px_5px_1px] text-accent text:sm  sm:text-medium font-medium">
              <span className="text-grow">
                <b>👋 Introduction</b> I’m MD Farhan Sadik, a passionate
                Frontend Developer from Bangladesh, focused on building modern,
                accessible, and high-performance web interfaces.
              </span>
            </p>
          </div>
          <button className="text-grow order-1 p-5 w-full sm:col-span-1  rounded flex items-center backdrop-blur-2xl bg-accent/10 justify-center">
            <p className="w-full drop-shadow-[1px_5px_1px] text-accent text-xl  sm:text-2xl font-bold">
              <span className="text-grow flex justify-center items-center gap-2 whitespace-nowrap hover:text-primary cursor-pointer transition-all duration-300">
                <IoMdCloudDownload /> Resume
              </span>
            </p>
          </button>
          <div className="bg-accent/10 col-span-2 order-3 sm:order-2 text-grow p-5 w-full rounded backdrop-blur-2xl">
            <p className="drop-shadow-[1px_5px_1px] text-accent text:sm  sm:text-medium font-medium">
              <span className="text-grow">
                <b>💻 My Journey & Expertise</b> I'm a frontend developer
                skilled in HTML, CSS, JavaScript, React, and Tailwind. Trained
                at Sheriyans Coding School, I build responsive, accessible
                interfaces with clean code, translating designs into seamless
                user experiences while following best practices and continuously
                improving.
              </span>
            </p>
          </div>
          <div className="bg-accent/10 order-4 sm:order-2 col-span-2 text-grow p-5 w-full rounded backdrop-blur-2xl">
            <p className="drop-shadow-[1px_5px_1px] text-accent text:sm  sm:text-medium font-medium">
              <span className="text-grow">
                <b>🚀 Vision & Values</b> I see development as a means to solve
                real problems and create meaningful experiences. Committed to
                continuous learning and collaboration, I strive to deliver
                innovative, user-focused solutions with ownership, adaptability,
                and quality—building functional, thoughtful, and impactful
                frontend products.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
