import React from "react";

const CommunityGallery = () => {
  const images = [
    "/communityGallery/rect1.1292bcda.jpg",
    "/communityGallery/rect2.3190e086.jpg",
    "/communityGallery/rect3.41929bcc.jpg",
    "/communityGallery/rect4.370874d8.jpg",
    "/communityGallery/rect5.42e5f5a5.jpg",
    "/communityGallery/rect6.78913a56.jpg",
    "/communityGallery/rect6.78913a56.jpg",
  ];

  return (
    <div className="w-full p-10 border">
      <div className="header border w-full">
        <h1 className="text-7xl text-[#FEFE00] text-start">
          COMMUNITY GALLERY
        </h1>
      </div>
      <ul className="flex flex-col w-full gap-6 md:grid md:grid-cols-2 lg:w-1/2">
        {images.map((src, index) => (
          <li
            key={index}
            className={`relative w-full overflow-hidden rounded-xl
            ${
              index === 0 || index === 2 || index === 6
                ? "md:col-span-2 sm:h-[404px] h-[200px]"
                : ""
            }
            ${
              index === 1 || index === 3
                ? "col-span-2 h-[200px] md:h-[346px]"
                : ""
            }
            ${index === 4 || index === 5 ? "h-[290px]" : ""}
          `}
          >
            <img
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityGallery;
