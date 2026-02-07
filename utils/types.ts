export interface Event {
    id: string;
    messageId: number;
    title: string;
    description: string;
    price: string | null;
    image: string | null;
    datePosted: string;   // ISO date string
    createdAt: string;
    updatedAt: string;
    yearMonth: string;    // "YYYY-MM" format
    schemaVersion: number;
}