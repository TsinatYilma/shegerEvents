"use client";
import React from "react";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const images: string[] = [
  "/image-1.jpg",
  "/image-2.jpg",
  "/image-3.jpg",
  "/image-4.jpg",
  "/image-5.jpg",
  "/image-6.jpg",
  "/image-7.jpg",
  "/image-8.jpg",
  "/image-9.jpg",
  "/image-10.jpg",
];

export default function IntroPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const imageEls = gsap.utils.toArray<HTMLImageElement>(
      containerRef.current.querySelectorAll("img")
    );
    const masterTL = gsap.timeline();
    const paraSplit = new SplitText(".introText", { type: "lines" });

    masterTL.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.4,
      delay: 1,
    });

    const radiusX = 550;
    const radiusY = 300;
    const container = containerRef.current;
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;

    // Animate each image along the oval
    imageEls.forEach((image, i) => {
      const angle = (i / images.length) * Math.PI * 2; // evenly spaced

      const x = centerX + radiusX * Math.cos(angle) - image.offsetWidth / 2;
      const y = centerY + radiusY * Math.sin(angle) - image.offsetHeight / 2;

      // Add image animation to master timeline
      const tl = gsap.timeline();

      masterTL.set(image, {
        x,
        y,
        scale: 1,
        opacity: 0,
        position: "absolute",
      });

      masterTL.to(image, {
        opacity: 1,
        scale: 1.6,
        duration: 0.5,
        stagger: 1.4,
        ease: "back.out(1.7)",
        repeat: 0, // play exactly twice
        onComplete: () => {
          gsap.set(image, { opacity: 0, scale: 1 }); // hide after two plays
        },
      });
    });
  }, []);

  return (
    <div
      className="h-screen w-screen relative overflow-hidden"
      style={{
        transform: `translateY(-${scrollY * 0.5}px)`, // door slides up
        transition: "transform 0.2s ease-out",
        backgroundImage: "url(/bg-image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        ref={containerRef}
        className="relative h-full  mx-30 my-20  border border-red-500 "
      >
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            className="img rounded-xl shadow-xl w-50 opacity-0"
            alt=""
          />
        ))}
        <div className="border h-full w-full">
          <p className="absolute border w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center introText text-8xl font-semibold z-100">
            Browse Upcoming <br /> Events and Festivals <br />
            In Addis Abeba
          </p>
        </div>
      </div>
    </div>
  );
}
