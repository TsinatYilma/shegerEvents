import { motion } from "framer-motion";

interface EventImageProps {
    src?: string | null;
    alt: string;
}

const EventImage = ({ src, alt }: EventImageProps) => {
    if (!src) return null;
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl flex justify-center "
        >
            <img
                src={src}
                alt={alt}
                className="max-w-full h-[300px] md:h-[480px] lg:h-5460px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent border max-w-fit" />
        </motion.div>
    );
};

export default EventImage;