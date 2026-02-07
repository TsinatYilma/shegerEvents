

export default function EventSkeleton() {
    return (
        <div className="flex flex-col h-160 border-[0.15] border-[#FEFE00] max-w-100 p-5 pb-0 animate-pulse">
            <div className="flex flex-col justify-around h-full text-[#FEFE00]">

                {/* Image placeholder */}
                <div className="image min-w-full flex justify-center border">
                    <div className="w-100 h-100 rounded-xl bg-[#FEFE00]/20" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 justify-between">

                    {/* Time + Title */}
                    <div className="time flex flex-col gap-2">
                        <div className="h-3 w-24 bg-[#FEFE00]/20 rounded" />
                        <div className="h-6 w-full max-w-[350px] bg-[#FEFE00]/20 rounded" />
                    </div>

                    {/* Place + buttons */}
                    <div className="place flex flex-col gap-4">
                        <div className="h-4 w-40 bg-[#FEFE00]/20 rounded" />

                        <div className="flex gap-5">
                            <div className="h-8 w-28 border border-[#FEFE00]/40 rounded" />
                            <div className="h-8 w-28 border border-[#FEFE00]/40 rounded" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
