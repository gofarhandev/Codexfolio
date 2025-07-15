import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-screen">
      <hr className="border-grow/50" />
      {/* Tagline & Copyright */}
      <div className="flex p-5 lg:py-[1.5vw] sm:px-20 lg:px-[5vw] w-full justify-center  gap-5 sm:gap-10">
        <p className="text-xs lg:text-[1vw] text-grow/50">
          Crafted with ❤️ using React & TailwindCSS
        </p>
        <p className="text-xs lg:text-[1vw] text-grow/50">
          © {new Date().getFullYear()} MD Farhan Sadik. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
