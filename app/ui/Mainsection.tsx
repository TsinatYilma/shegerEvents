"use client";
import React, { useEffect, useRef } from "react";
import { Search, MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { Suspense } from "react";
import gsap from "gsap/all";
import EventDetail from "./eventDetail";
import Events from "./events";
import EventSkeleton from "@/utils/eventsFallback";
import { Event } from "@/utils/types";
import { postEvents, getEvents } from "../methods/events";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



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
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: postEvents,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })


  const closeDetailPage = useRef<HTMLDivElement>(null);
  const today = new Date();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );
  const [DetailPageVisible, setDetailPagevisible] = useState(false);
  const [direction, setDirection] = useState(1);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const yearMonth = `${currentYear}-${String(currentMonthIndex + 1).padStart(2, "0")}`;

  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ["events", yearMonth],
    queryFn: () => getEvents(yearMonth),
  });
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
  useEffect(() => {
    if (!DetailPageVisible) return;

    const handleClick = (event: MouseEvent) => {
      if (
        closeDetailPage.current &&
        !closeDetailPage.current.contains(event.target as Node)
      ) {
        setDetailPagevisible(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [DetailPageVisible]);
  function closeSheet() {
    if (DetailPageVisible) {
      setDetailPagevisible(!DetailPageVisible);
    }
  }

  return (
    <div
      className="relative flex flex-col gap-20 h-fit w-full p-10"
    >
      <div className="flex justify-between w-full h-fit ">
        <div className="">
          <h1 className="text-xl sm:text-2xl md:text-7xl text-[#FEFE00]">
            View Available Events
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search Events"
            className="pl-5 rounded sm:w-120 h-10 bg-white/5 border-[0.25] border-[#FEFE00] outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="max-h-fit ">
          <h1 className="text-center">{currentYear}</h1>
        </div>
        <div className="w-full flex justify-center gap-10 items-center  ">
          <MoveLeft
            className="w-8 h-8 text-[#FEFE00] border"
            onClick={() => goPrev()}
          />
          <div className="month  min-w-80 text-center">
            <h1 className="text-5xl text-[#FEFE00] ">{months[currentMonthIndex]}</h1>
          </div>
          <MoveRight
            className="w-8 h-8 text-[#FEFE00] border"
            onClick={() => goNext()}
          />
        </div>
      </div>
      <Events
        events={events}
        loading={isLoading}
        setDetailPagevisible={setDetailPagevisible}
        DetailPageVisible={DetailPageVisible}
      />

      <EventDetail
        ref={closeDetailPage}
        DetailPageVisible={DetailPageVisible}
        isVisible={DetailPageVisible}
        setDetailPagevisible={setDetailPagevisible}
      />
    </div>
  );
};

export default Mainsection;
