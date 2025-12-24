import React from "react";
import { Search } from "lucide-react";

const Mainsection = () => {
  return (
    <div className="h-screen w-full border border-amber-300 flex p-10">
      <div className="flex justify-between w-full h-fit border ">
        <div className="">
          <h1 className="text-xl sm:text-2xl md:text-7xl text-[#FEFE00]">
            View Available Events
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            placeholder="Search Events"
            className="pl-5 rounded sm:w-120 h-10 bg-white/5 border-[0.25] focus:border-[#FEFE00] outline-none"
          />
          <Search className="w-10 h-10 " />
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
