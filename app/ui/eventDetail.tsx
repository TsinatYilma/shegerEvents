// eventDetail.tsx
import React, { forwardRef } from "react";
import EventImage from "./eventImage";
import { useEventStore } from "@/store/eventHolder";
import EventInfo from "./eventInfo";
import { ArrowLeftCircle } from "lucide-react"
import PriceCard from "./priceCard";

type EventDetailProps = {
  DetailPageVisible: boolean;
  isVisible: boolean;
  setDetailPagevisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const EventDetail = forwardRef<HTMLDivElement, EventDetailProps>(({ DetailPageVisible, isVisible, setDetailPagevisible }, ref) => {
  const event = useEventStore((state) => (state.event))
  if (!event) {
    return null; // or loading / placeholder UI
  }
  return (
    <div
      ref={ref}
      className={`
          fixed left-0 bottom-0 w-full bg-black/80
         backdrop-blur-md
          border border-black/90 h-[98vh] pb-20 overflow-y-auto
          transition-all duration-500 ease-in-out z-50 
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
        `}
    >
      <div className="w-full  h-10">
        <button className="flex pl-20 justify-center items-center h-full" onClick={() => setDetailPagevisible(!DetailPageVisible)}>
          <ArrowLeftCircle size={30} className="stroke-white hover:stroke-red-500 transition-colors" />
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {/* Left: Image + Details */}
        <div className="lg:col-span-2 space-y-8">
          <EventImage src={event.image} alt={event.title} />
          <EventInfo
            event={event}
          />
        </div>

        {/* Right: Price card */}
        <div className="lg:col-span-1">
          <PriceCard
            event={event}
          />
        </div>
      </div>
    </div>
  );
}
);

EventDetail.displayName = "EventDetail";
export default EventDetail;

