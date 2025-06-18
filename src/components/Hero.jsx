import gif from "../assets/gif.png";

const Hero = () => {
  return (
    <div className="flex items-center justify-center mb-30 sm:mb-35 z-10">
      <div className="py-5  drop-shadow-[1px_5px_1px] bg-back text-accent/30 overflow-hidden rounded relative w-full">
        {/* effect */}
        <div className="absolute -bottom-15 -right-20 h-30 w-20 rounded-full bg-primary shadow-[0px_10px_10vw] shadow-primary"></div>

        {/* box */}
        <div className="flex flex-col items-center md:flex-row justify-between gap-10">
          {/* left */}
          <div className="flex flex-col gap-5 items-center w-full">
            <img
              src={gif}
              alt=""
              className="drop-shadow-[1px_4px_2px] bg-back text-primary/20 rounded-full h-30 w-30 mb-5"
            />
            <h1 className="drop-shadow-[1px_5px_1px] text-accent/30 text-2xl sm:text-4xl font-bold">
              <span className="text-grow">MD FARHAN SADIK</span>
            </h1>
            <h2 className="drop-shadow-[1px_5px_1px] text-accent/30 text-xl sm:text-2xl font-bold">
              <span className="text-grow">Frontend Developer</span>
            </h2>
          </div>

          {/* right */}
          <div className="flex flex-col gap-10 w-full">
            <div className="bg-accent/10 text-grow p-5 w-full rounded backdrop-blur-2xl">
              <p className="drop-shadow-[1px_5px_1px] text-accent/30 text:sm  sm:text-medium font-bold">
                <span className="text-grow">
                  I design and develop beautiful web experiences with a focus on
                  performance, usability, and clean code. Let's turn your ideas
                  into reality.
                </span>
              </p>
            </div>
            <div className="bg-accent/10 text-grow p-5 w-full rounded backdrop-blur-2xl">
              <p className="drop-shadow-[1px_5px_1px] text-accent/30 text:sm  sm:text-medium font-bold">
                <span className="text-grow">
                  Passionate about crafting responsive and interactive user
                  interfaces with React and Tailwind. Always learning. Always
                  building.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
