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

    let angleIndex = 0; // track which position in the oval to use
    const totalPositions = images.length; // number of positions along the oval
    const radiusX = 550; // horizontal radius (longer)
    const radiusY = 300; // vertical radius (shorter)

    const popImage = (image: HTMLImageElement) => {
      const container = containerRef.current!;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;

      // Calculate angle for this image
      const angle = (angleIndex / totalPositions) * Math.PI * 2;

      // Calculate x, y along the oval
      const x = centerX + radiusX * Math.cos(angle) - image.offsetWidth / 2;
      const y = centerY + radiusY * Math.sin(angle) - image.offsetHeight / 2;

      angleIndex = (angleIndex + 1) % totalPositions;
      const tl = gsap.timeline();

      tl.set(image, {
        x,
        y,
        rotation: gsap.utils.random(-200, 30),
        scale: 1,
        opacity: 0,
        delay: 2,
        zIndex: Math.floor(gsap.utils.random(1, 10)),
        position: "absolute",
      });

      tl.to(image, {
        opacity: 1,
        duration: 1,
        ease: "ease.in.Out",
      });

      tl.to(
        image,
        {
          opacity: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "+=1.2"
      );
    };

    // Loop through images with random delay
    imageEls.forEach((image) => {
      gsap.delayedCall(gsap.utils.random(0, 2), function loop() {
        popImage(image);
        gsap.delayedCall(gsap.utils.random(1, 3), loop);
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
      <div ref={containerRef} className="relative h-full  md:mx-30 md:my-20  ">
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            className="img rounded-xl shadow-xl w-50 opacity-0"
            alt=""
          />
        ))}
        <div className=" h-full w-full">
          <p className="absolute  w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center introText text-xl sm:text-5xl md:text-8xl font-semibold z-100">
            Browse Upcoming <br /> Events and Festivals <br />
            In Addis Abeba
          </p>
        </div>
      </div>
    </div>
  );
}
