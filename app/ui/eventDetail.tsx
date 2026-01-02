import React, { useState } from "react";

const EventDetail = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`
    absolute left-0 bottom-0 opacity-0 w-full bg-white h-[80vh] transition-transform duration-500 ease-in-out
    ${isVisible ? "translate-y-full opacity-100" : "translate-y-0"}
  `}
    ></div>
  );
};

export default EventDetail;
