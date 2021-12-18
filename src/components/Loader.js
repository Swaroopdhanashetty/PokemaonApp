import React from "react";

const Loader = () => {
  let circle = "h-2.5 w-2.5 bg-current rounded-full";
  return (
    <div className="h-screen flex  items-center justify-center  ">
      <div className={`${circle} mr-1 bg-blue-400 animate-bounce `}></div>
      <div className={`${circle} mr-1 bg-blue-400 animate-bounce200`}></div>
      <div className={`${circle} bg-blue-400 animate-bounce400`}></div>
    </div>
  );
};
export default Loader;
