import React from "react";
import { Search, MoveLeft, MoveRight } from "lucide-react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Mainsection = () => {

  return (
    <div className="flex flex-col gap-20 h-fit w-full border border-amber-300">
      <div className="flex justify-between w-full h-fit border ">
        <div className="">
          <h1 className="text-xl sm:text-2xl md:text-7xl text-[#FEFE00]">
            View Available Events
          </h1>
        </div>
        <div className="flex  items-center gap-3">
          <input
            type="text"
            placeholder="Search Events"
            className="pl-5 rounded sm:w-120 h-10 bg-white/5 border-[0.25] focus:border-[#FEFE00] outline-none"
          />
        </div>
      </div>
      <div className="w-full flex justify-center gap-10 items-center  border">
        <MoveLeft className="w-8 h-8 text-[#FEFE00] border" />
        <div className="border">
          <h1 className="text-5xl">November</h1>
        </div>
        <MoveRight className="w-8 h-8 text-[#FEFE00] border" />
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center border w-full">
        <div className="flex flex-col h-120 border border-[#FEFE00] max-w-200 min-w-120"></div>
        <div className="flex flex-col h-120 border border-[#FEFE00] max-w-200 min-w-120"></div>
        <div className="flex flex-col h-120 border border-[#FEFE00] max-w-200 min-w-120"></div>
        <div className="flex flex-col h-120 border border-[#FEFE00] max-w-200 min-w-120"></div>
        <div className="flex flex-col h-120 border border-[#FEFE00] max-w-200 min-w-120"></div>
        <div className="flex flex-col h-120 border border-[#FEFE00] max-w-200 min-w-120"></div>
      </div>
    </div>
  );
};

export default Mainsection;
