// /store/useEventStore.ts
import { create } from "zustand";
import { Event } from "@/utils/types";

type EventStore = {
    event: Event | null;
    setEvents: (events: Event) => void;
};

export const useEventStore = create<EventStore>((set) => ({
    event: null,
    setEvents: (event) => set({ event }),
}));
