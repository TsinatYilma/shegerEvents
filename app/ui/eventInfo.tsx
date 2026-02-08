import { motion } from "framer-motion";
import { MapPin, Calendar, Phone, Navigation } from "lucide-react";
import { Event } from "@/utils/types";

interface EventInfoProps {
    event: Event;
}

const EventInfo = ({
    event
}: EventInfoProps) => {
    const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6  px-20 flex flex-col items-center justify-center"
        >
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight">
                {event.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary stroke-[#FEFE00]" />
                    <span className="text-sm">{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary stroke-[#FEFE00]" />
                    <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-primary stroke-[#FEFE00]" />
                    <span className="text-sm">{event.city}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary stroke-[#FEFE00]" />
                    <span className="text-sm">{event.contact}</span>
                </div>
            </div>

            {/* Description */}
            <div className="space-y-3 pt-4 border-t border-border w-full">
                <h2 className="text-xl font-semibold font-display text-foreground">About This Event</h2>
                <p className="text-muted-foreground leading-relaxed max-w-140 ">{event.description}</p>
            </div>
        </motion.div>
    );
};

export default EventInfo;