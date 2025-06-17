import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = ({ children }) => {
  let [isTrue, setIsTrue] = useState(false);
  let [isDark, setIsDark] = useState(true);
  if(!isDark){
    document.body.classList.add("light")
  }else{
    document.body.classList.remove("light")
  }


  return (
    <div className="flex">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Sidebar isTrue={isTrue} setIsTrue={setIsTrue} />
      <main className="pl-20 w-full min-h-screen  bg-back light:bg-amber-50 text-grow p-6 transition-all duration-300">
        {children}
      </main>
    </div>
  );
};

export default Layout;
