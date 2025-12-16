"use client";
import React from "react";

import { useEffect, useRef } from "react";
import gsap from "gsap";

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

  useEffect(() => {
    if (!containerRef.current) return;

    const imageEls = gsap.utils.toArray<HTMLImageElement>(
      containerRef.current.querySelectorAll("img")
    );

    const popImage = (image: HTMLImageElement) => {
      const container = containerRef.current!;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      // Pick a random position inside the container
      const x = gsap.utils.random(0, containerWidth - image.offsetWidth);
      const y = gsap.utils.random(0, containerHeight - image.offsetHeight);

      const tl = gsap.timeline();

      tl.set(image, {
        x,
        y,
        rotation: gsap.utils.random(-30, 30),
        scale: 1.5,
        opacity: 0,
        zIndex: Math.floor(gsap.utils.random(1, 10)),
        position: "absolute",
      });

      tl.to(image, {
        scale: gsap.utils.random(0.8, 1.1),
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });

      tl.to(
        image,
        {
          opacity: 0,
          scale: 0.6,
          duration: 0.4,
          ease: "power2.in",
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
        backgroundImage: "url(/bg-image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div ref={containerRef} className="h-full  mx-9 w-full border border-red-500 ">
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            className="img rounded-xl shadow-xl w-40"
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
