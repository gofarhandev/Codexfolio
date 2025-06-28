import { ImUser } from "react-icons/im";
import { IoMdCloudDownload } from "react-icons/io";
import CV from "../../public/CV.pdf"

const About = () => {
  return (
    <div className="mt-5 mb-20">
      <div className="h-full w-full lg:text-medium  text-accent overflow-hidden rounded relative">
        {/* effect */}
        <div className="absolute -top-15 -left-20 h-30 w-20 rounded-full bg-primary shadow-[0px_10px_10vw] shadow-primary"></div>

        {/* content */}
        <div className="grid gap-10 grid-cols-2 sm:grid-cols-4  ">
          <div className="text-grow p-5 px-10 order-1 w-full col-span-2  rounded flex items-center justify-center">
            <p className="w-full leading-8 text-3xl  sm:text-4xl font-bold">
              <span className="text-grow pt-2 flex items-center gap-2 whitespace-nowrap">
                <ImUser /> About Me
              </span>
            </p>
          </div>
          <div className="bg-accent/10 backdrop-blur-2xl order-2 sm:order-1 col-span-2 text-grow p-5 w-full  rounded border-grow">
            <p className="leading-8 text:sm  sm:text-medium font-medium">
              <span className="text-grow">
                <b>Introduction</b> I’m MD Farhan Sadik, a dedicated Frontend
                Developer from Bangladesh, focused on crafting modern,
                accessible, and high-performance web interfaces.
              </span>
            </p>
          </div>
          {/* <div className="text-grow order-1 p-5 w-full sm:col-span-1   rounded border-grow flex items-center backdrop-blur-2xl bg-accent/10 justify-center">
            <p className="w-full leading-8 text-xl  sm:text-2xl font-bold">
              <span className="text-grow flex justify-center items-center gap-2 whitespace-nowrap">
              </span>
            </p>
          </div> */}
          <div className="bg-accent/10 col-span-2 order-3 sm:order-2 text-grow p-5 w-full  rounded border-grow backdrop-blur-2xl">
            <p className="leading-8 text:sm  sm:text-medium font-medium">
              <span className="text-grow">
                Skilled in HTML, CSS, JavaScript, React, and Tailwind CSS, I
                build responsive, user-focused interfaces with clean,
                maintainable code. Trained at Sheriyans Coding School and
                committed to staying current with modern frontend trends.
                <a
                  href={CV}
                  download
                  className="leading-8 text-xl pt-2 px-5 sm:text-2xl font-bold text-grow flex justify-end items-center gap-2 whitespace-nowrap hover:text-primary cursor-pointer transition-all duration-300"
                >
                  <IoMdCloudDownload /> Resume
                </a>
              </span>
            </p>
          </div>
          <div className="bg-accent/10 order-4 sm:order-2 col-span-2 text-grow p-5 w-full  rounded border-grow backdrop-blur-2xl">
            <p className="leading-8 text:sm  sm:text-medium font-medium">
              <span className="text-grow">
                <b>🚀 Vision & Values</b> I see development as a way to solve
                real problems and create meaningful user experiences. I value
                learning, collaboration, and innovation—delivering thoughtful,
                functional, and impactful frontend solutions.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
