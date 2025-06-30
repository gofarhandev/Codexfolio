import { Link } from "react-router-dom";
import CV from "../../public/CV.pdf";
import gif from "../assets/gif.png";
import { IoMdCloudDownload } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex items-center justify-center mb-30 sm:mb-35 z-10">
      <div className="text-accent overflow-hidden rounded relative w-full">
        {/* box */}
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col gap-3 items-center w-full">
            <img
              src={gif}
              alt=""
              className="drop-shadow-[1px_4px_2px] bg-back text-primary/20 rounded-full h-30 w-30"
            />
            <h1 className="drop-shadow-[1px_5px_1px]  text-accent text-3xl sm:text-5xl font-medium">
              <span className="text-grow">MD FARHAN SADIK</span>
            </h1>
            <h2 className="drop-shadow-[1px_5px_1px] text-accent font-medium pb-5">
              <span className="text-primary text-2xl sm:text-3xl">Frontend Developer</span>
            </h2>
          </div>

          <div className="flex flex-col text-center gap-3 w-full">
            <div className="text-grow w-full rounded backdrop-blur-2xl">
              <p className="text:sm  sm:text-lg leading-8">
                I design & develop stunning web experiences — focused on
                performance, usability, and clean code.
              </p>
            </div>
            <div className="flex justify-center items-end gap-5">
              <Link
                to="/contact"
                download
                className="flex items-center justify-center h-10 w-40 gap-1 text-sm font-medium rounded-full hover:bg-primary border border-primary hover:text-back text-primary trans hover:shadow-accent shadow-primary hover:text-lg"
              >
                Contact Me
                <FaArrowDown className="text-base mt-1  animate-bounce " />
              </Link>
              <a
                href={CV}
                download
                className="flex items-center justify-center h-10 w-40 gap-1 text-sm font-medium rounded-full hover:bg-primary border border-primary hover:text-back text-primary trans hover:shadow-accent shadow-primary hover:text-lg"
              >
                Resume{" "}
                <IoMdCloudDownload className="text-xl mt-1  animate-bounce " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
