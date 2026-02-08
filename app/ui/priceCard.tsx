import { motion } from "framer-motion";
import { Ticket, Heart, Share2, Phone } from "lucide-react";
import { useState } from "react";
import { Event } from "@/utils/types";

interface PriceCardProps {
    event: Event;
}

const PriceCard = ({ event }: PriceCardProps) => {
    const [liked, setLiked] = useState(false);

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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-2xl border border-border p-6 shadow-card space-y-6 sticky top-20 md:mx-10"
        >
            {/* Price */}
            <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Price</p>
                <span className="text-4xl font-bold font-display text-event-price">
                    {event.price}
                </span>
            </div>

            {/* Date */}
            <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Posted</p>
                <p>{formattedDate}</p>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-event-surface">
                <Phone className="w-4 h-4 text-primary stroke-[#FEFE00]" />
                <span className="text-sm font-medium text-foreground">{event.contact}</span>
            </div>

            {/* CTA button */}
            <button
                className="w-full bg-primary text-primary-foreground hover:bg-event-highlight transition-colors font-display font-semibold text-base h-12 rounded-xl shadow-warm flex justify-center items-center bg-[#ff9b04]"
            >
                <Ticket className="w-5 h-5 mr-2 " />
                Get Tickets
            </button>

            {/* Secondary actions */}
            <div className="flex gap-3   ">
                <button
                    className="flex-1 rounded-xl flex justify-center items-center"
                    onClick={() => setLiked(!liked)}
                >
                    <Heart
                        className={`w-4 h-4 mr-2 transition-colors ${liked ? "fill-primary text-primary" : ""}`}
                    />
                    {liked ? "Saved" : "Save"}
                </button>
                <button className="flex-1 rounded-xl flex justify-center items-center ">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                </button>
            </div>

            {/* Note */}
            <p className="text-xs text-muted-foreground text-center">
                Contact the organizer for more details
            </p>
        </motion.div>
    );
};

export default PriceCard;
