"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "/communityGallery/rect1.1292bcda.jpg",
    rowSpan: "row-span-2 col-span-2",
  },
  {
    src: "/communityGallery/rect2.3190e086.jpg",
    rowSpan: "row-span-2 col-span-2",
  },
  {
    src: "/communityGallery/rect3.41929bcc.jpg",
    rowSpan: "row-span-2 col-span-2",
  },
  {
    src: "/communityGallery/stripe1.c4b5c197.jpg",
    rowSpan: "row-span-1 col-span-2",
  },
  {
    src: "/communityGallery/rect4.370874d8.jpg",
    rowSpan: "row-span-2 col-span-2",
  },
  {
    src: "/communityGallery/vertical1.90318373.jpg",
    rowSpan: "row-span-3 col-span-1",
  },
  {
    src: "/communityGallery/vertical2.b80b8395.jpg",
    rowSpan: "row-span-3 col-span-1",
  },
  {
    src: "/communityGallery/rect5.42e5f5a5.jpg",
    rowSpan: "row-span-2 col-span-2",
  },
  {
    src: "/communityGallery/square1.9cfd9be6.jpg",
    rowSpan: "row-span-2 col-span-1",
  },
  {
    src: "/communityGallery/square2.28842873.jpg",
    rowSpan: "row-span-2 col-span-1",
  },
  {
    src: "/communityGallery/square3.d81942a3.jpg",
    rowSpan: "row-span-2 col-span-1",
  },
  {
    src: "/communityGallery/square4.7eb4f2e0.jpg",
    rowSpan: "row-span-2 col-span-1",
  },
  {
    src: "/communityGallery/rect6.78913a56.jpg",
    rowSpan: "row-span-2 col-span-2",
  },
  {
    src: "/communityGallery/rect7.6e368b4a.jpg",
    rowSpan: "row-span-2 col-span-2",
  },
];
const CommunityGallery = () => {
  useGSAP(() => {
    const scrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 90%",
        end: "bottom 100%",
        once: false,
      },
    });
    scrollAnimation.from(".top-grid > *", {
      opacity: 0,
      duration: 1,
      y: 50,
      ease: "power1.inOut",
      stagger: 0.4,
    });
  }, []);

  return (
    <div className=" w-full p-10  mt-20 ">
      <div className="header  w-full">
        <h1 className="text-7xl text-[#FEFE00] text-start">
          COMMUNITY GALLERY
        </h1>
      </div>
      <ul className="top-grid grid grid-cols-4 auto-rows-[200px] gap-6 lg:w-full mt-20">
        {images.map((img, i) => (
          <li
            key={i}
            id="about"
            className={`relative overflow-hidden rounded-xl ${img.rowSpan}`}
          >
            <img
              src={img.src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityGallery;
