export type Event = {
    messageId: number;
    title: string;
    description: string;
    price?: string | null;
    image?: string | null;
    date: string;
    location: string;
    city: string;
    contact?: string | null;
    createdAt: string;
    updatedAt: string;
};
