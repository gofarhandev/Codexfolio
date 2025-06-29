import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-20 w-screen -mb-5 -ml-5 sm:-ml-20 lg:-ml-30">
      <div className="w-full h-full text-accent relative overflow-hidden p-5 sm:px-20 lg:px-30">
        {/* effect */}
        <div className="absolute -bottom-25 -right-15 h-30 w-20 rounded-full bg-primary shadow-[0px_10px_10vw] shadow-primary"></div>

        {/* Name & Role */}
        <div className="flex gap-5 justify-between items-center">
          <div className="">
            <h3 className="text-2xl text-grow font-bold mb-3">
              MD Farhan Sadik
            </h3>
            <p className="text-sm text-grow mb-4">
              Frontend Developer | React | JavaScript | TailwindCSS
            </p>
          </div>
          {/* Social Links */}
          <div className="text-xl flex flex-col sm:flex-row gap-3 text-grow pr-5 sm:gap-10">
            <a
              href="https://github.com/master-farhan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary trans"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-farhan-sadik-467340316/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary trans"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:farhansadik0760@gmail.com"
              className="hover:text-primary trans"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <hr className="border-grow/50 mt-5 sm:mt-0" />
        {/* Tagline & Copyright */}
        <div className="flex w-full mt-5 justify-center  gap-5 sm:gap-10">
          <p className="text-xs text-grow/50 mb-2">
            Crafted with ❤️ using React & TailwindCSS
          </p>
          <p className="text-xs text-grow/50">
            © {new Date().getFullYear()} MD Farhan Sadik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
