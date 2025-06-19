import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <div className="mb-20">
      <div>
        <div className="text-grow p-5 w-full rounded ">
          <h2 className="drop-shadow-[1px_5px_1px] text-accent text-xl sm:text-2xl font-bold pb-5">
            <span className="text-grow">💼 How I Can Help</span>
          </h2>
        </div>
      </div>
      <div className="">
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
