import React from "react";

const CommunityGallery = () => {
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

  return (
    <div className="w-full p-10 border border-red-500 mt-20 ">
      <div className="header border w-full">
        <h1 className="text-7xl text-[#FEFE00] text-start">
          COMMUNITY GALLERY
        </h1>
      </div>
      <ul className="grid grid-cols-4 auto-rows-[200px] gap-6 lg:w-full mt-20">
        {images.map((img, i) => (
          <li
            key={i}
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
