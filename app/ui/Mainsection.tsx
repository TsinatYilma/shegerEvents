"use client";
import React from "react";
import { Search, MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

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
  const today = new Date();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );
  const [direction, setDirection] = useState(1);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      ".month",
      {
        opacity: 0,
        xPercent: direction == 1 ? 50 : -50,
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power3.inOut",
      }
    );
  }, [currentMonthIndex]);

  function goPrev() {
    setDirection(-1);
    setCurrentMonthIndex((prevMonth) => {
      if (prevMonth === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prevMonth - 1;
    });
  }
  function goNext() {
    setDirection(1);
    setCurrentMonthIndex((prevMonth) => {
      if (prevMonth === 11) {
        console.log(currentYear);
        setCurrentYear(currentYear + 1);
        console.log(currentYear);
        return 0;
      }
      return prevMonth + 1;
    });
  }

  return (
    <div className="flex flex-col gap-20 h-fit w-full border border-amber-300 p-10">
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

      <div className="flex flex-col">
        <div className="max-h-fit ">
          <h1 className="text-center">{currentYear}</h1>
        </div>
        <div className="w-full flex justify-center gap-10 items-center  border">
          <MoveLeft
            className="w-8 h-8 text-[#FEFE00] border"
            onClick={() => goPrev()}
          />
          <div className="month  min-w-80 text-center">
            <h1 className="text-5xl">{months[currentMonthIndex]}</h1>
          </div>
          <MoveRight
            className="w-8 h-8 text-[#FEFE00] border"
            onClick={() => goNext()}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center border w-full ">
        <div className="flex flex-col  h-120 border-[0.15] border-[#FEFE00] max-w-200 min-w-120 p-5">
          <div className="flex flex-col justify-around  text-[#FEFE00] font-space-grotesk">
            <div className="image min-w-full ">
              <img
                className="max-w-110 rounded-xl"
                src="/events/ae.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-10 p-5 ">
              <div className="time flex flex-col">
                <p className="text-[12px]">oct-02 july 2025</p>
                <h1 className="text-xl">Specail Event For You</h1>
              </div>
              <div className="place flex flex-col gap-3">
                <p className="">Hong Kong - CHINA</p>
                <div className="flex gap-5">
                  <button className="border border-[#FEFE00] px-5 ">
                    View Detail
                  </button>
                  <button className="border border-[#FEFE00] px-5">
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  h-120 border-[0.15] border-[#FEFE00] max-w-200 min-w-120 p-5">
          <div className="flex flex-col justify-around  text-[#FEFE00] font-space-grotesk">
            <div className="image min-w-full ">
              <img
                className="max-w-110 rounded-xl"
                src="/events/ETH-Denver-24-3.jpeg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-10 p-5 ">
              <div className="time flex flex-col">
                <p className="text-[12px]">oct-02 july 2025</p>
                <h1 className="text-xl">Specail Event For You</h1>
              </div>
              <div className="place flex flex-col gap-3">
                <p className="">Hong Kong - CHINA</p>
                <div className="flex gap-5">
                  <button className="border border-[#FEFE00] px-5 ">
                    View Detail
                  </button>
                  <button className="border border-[#FEFE00] px-5">
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  h-120 border-[0.15] border-[#FEFE00] max-w-200 min-w-120 p-5">
          <div className="flex flex-col justify-around  text-[#FEFE00] font-space-grotesk">
            <div className="image min-w-full ">
              <img
                className="max-w-110 rounded-xl"
                src="/events/ETHCC-7.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-10 p-5 ">
              <div className="time flex flex-col">
                <p className="text-[12px]">oct-02 july 2025</p>
                <h1 className="text-xl">Specail Event For You</h1>
              </div>
              <div className="place flex flex-col gap-3">
                <p className="">Hong Kong - CHINA</p>
                <div className="flex gap-5">
                  <button className="border border-[#FEFE00] px-5 ">
                    View Detail
                  </button>
                  <button className="border border-[#FEFE00] px-5">
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  h-120 border-[0.15] border-[#FEFE00] max-w-200 min-w-120 p-5">
          <div className="flex flex-col justify-around  text-[#FEFE00] font-space-grotesk">
            <div className="image min-w-full ">
              <img
                className="max-w-110 rounded-xl"
                src="/events/interchain.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-10 p-5 ">
              <div className="time flex flex-col">
                <p className="text-[12px]">oct-02 july 2025</p>
                <h1 className="text-xl">Specail Event For You</h1>
              </div>
              <div className="place flex flex-col gap-3">
                <p className="">Hong Kong - CHINA</p>
                <div className="flex gap-5">
                  <button className="border border-[#FEFE00] px-5 ">
                    View Detail
                  </button>
                  <button className="border border-[#FEFE00] px-5">
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  h-120 border-[0.15] border-[#FEFE00] max-w-200 min-w-120 p-5">
          <div className="flex flex-col justify-around  text-[#FEFE00] font-space-grotesk">
            <div className="image min-w-full">
              <img
                className="max-w-110 rounded-xl"
                src="/events/xdapp-day.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-10 p-5 ">
              <div className="time flex flex-col">
                <p className="text-[12px]">oct-02 july 2025</p>
                <h1 className="text-xl">Specail Event For You</h1>
              </div>
              <div className="place flex flex-col gap-3">
                <p className="">Hong Kong - CHINA</p>
                <div className="flex gap-5">
                  <button className="border border-[#FEFE00] px-5 ">
                    View Detail
                  </button>
                  <button className="border border-[#FEFE00] px-5">
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  h-120 border-[0.15] border-[#FEFE00] max-w-200 min-w-120 p-5">
          <div className="flex flex-col justify-around  text-[#FEFE00] font-space-grotesk">
            <div className="image min-w-full ">
              <img
                className="max-w-110 rounded-xl"
                src="/events/nebular.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-10 p-5 ">
              <div className="time flex flex-col">
                <p className="text-[12px]">oct-02 july 2025</p>
                <h1 className="text-xl">Specail Event For You</h1>
              </div>
              <div className="place flex flex-col gap-3">
                <p className="">Hong Kong - CHINA</p>
                <div className="flex gap-5">
                  <button className="border border-[#FEFE00] px-5 ">
                    View Detail
                  </button>
                  <button className="border border-[#FEFE00] px-5">
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
