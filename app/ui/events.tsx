
import { Suspense } from "react";
import { Event } from "@/utils/types";
import { useState } from "react";
import EventSkeleton from "@/utils/eventsFallback";
type EventsProps = {
    events: Event[];
    loading: boolean
    setDetailPagevisible: React.Dispatch<React.SetStateAction<boolean>>;
    DetailPageVisible: boolean
};


export default function Events({ events, loading, setDetailPagevisible, DetailPageVisible }: EventsProps,) {


    return (
        <div className="flex flex-wrap gap-10 justify-center items-center  w-full min-h-200">
            {loading ? (
                <>
                    {[...Array(6)].map((_, i) => (
                        <EventSkeleton key={i} />
                    ))}
                </>
            ) : events.length === 0 ? (
                <>
                    {[...Array(6)].map((_, i) => (
                        <EventSkeleton key={i} />
                    ))}
                </>) : (
                events.map((event: Event) => (
                    <div className="flex flex-col  min-h-160 max-h-fit border-[0.15] border-[#FEFE00] max-w-200 max-w-100 p-5 pb-0">
                        <div className="flex flex-col justify-around  text-[#FEFE00] font-space-grotesk flex-1">
                            <div className="image min-w-full flex justify-center ">
                                {event.image && (
                                    <img
                                        className="w-100 rounded-xl h-100"
                                        src={event.image}
                                        alt=""
                                    />
                                )}
                            </div>
                            <div className="flex flex-col flex-1 p-5 justify-between  ">
                                <div className="time flex flex-col ">
                                    <p className="text-[12px]">{event.datePosted}</p>
                                    <h1 className="text-xl max-w-[350px]">{event.title}</h1>
                                </div>
                                <div className="place flex flex-col gap-3">
                                    <div className="flex flex-col gap-">
                                        <p className="">Price: {event.price}</p>
                                        <p className="">Location: {event.location}</p>
                                    </div>
                                    <div className="flex gap-5">
                                        <button className="border border-[#FEFE00] px-5 " onClick={() => setDetailPagevisible(!DetailPageVisible)}>
                                            View Detail
                                        </button>
                                        <button className="border border-[#FEFE00] px-5">
                                            Buy Tickets
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))

            )}
        </div>
    )
}