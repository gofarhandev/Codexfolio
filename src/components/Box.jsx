import React from "react";

const Box = () => {
  return (
    <div className="p-10 h-full w-full drop-shadow-[1px_5px_1px] bg-back text-accent/30 overflow-hidden rounded relative">
        <div className="absolute -bottom-15 -right-20 h-30 w-20 rounded-full bg-primary shadow-[0px_10px_20vw] shadow-primary"></div>
      </div>
  );
};

export default Box;
