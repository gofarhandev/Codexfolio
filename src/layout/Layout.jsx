import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  let [isTrue, setIsTrue] = useState(true);

  return (
    <div className="flex items-center justify-center bg-back font-montserrat">
      <div className="relative w-full flex overflow-x-hidden">
        <Navbar />
        <main className="relative px-5 overflow-hidden pt-25 lg:pt-[6vw] sm:px-20 lg:px-[5vw] w-full min-h-screen  bg-back  text-grow p-5 trans">
          {/* {children} */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
