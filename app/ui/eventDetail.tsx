import React, { useState } from "react";

const EventDetail = ({
  isVisible,
  setDetailPagevisible,
}: {
  isVisible: boolean;
  setDetailPagevisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`
    absolute left-0 bottom-0 w-full bg-white h-[80vh]
    transition-all duration-500 ease-in-out
    ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
  `}
    ></div>
  );
};

export default EventDetail;
