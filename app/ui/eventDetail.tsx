// eventDetail.tsx
import React, { forwardRef } from "react";

type EventDetailProps = {
  isVisible: boolean;
  setDetailPagevisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const EventDetail = forwardRef<HTMLDivElement, EventDetailProps>(({ isVisible, setDetailPagevisible }, ref) => {
  return (
    <div
      ref={ref}
      className={`
          fixed left-0 bottom-0 w-full bg-black/80
         backdrop-blur-md
          border border-black/90 h-[90vh] 
          transition-all duration-500 ease-in-out z-50
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
        `}
    >
      <div className="flex border h-full">
        <div className="border">
          <div className="">
            <img src="" alt="" />
          </div>
        </div>
        <div className="border"></div>
      </div>
    </div>
  );
}
);

EventDetail.displayName = "EventDetail";
export default EventDetail;

