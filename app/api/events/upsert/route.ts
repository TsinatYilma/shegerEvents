import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


type EventInput = {
  messageId: number;
  title: string;
  description: string;
  price?: string | null;
  image?: string | null;
  date: string;
  location: string;
  city: string;
  contact?: string | null;
};

export async function POST(req: NextRequest) {
  try {
    const events: EventInput[] = await req.json();

    if (!Array.isArray(events) || events.length === 0) {
      return NextResponse.json({ message: "No events provided" }, { status: 400 });
    }


    const upsertPromises = events.map((event) => {
      const date = new Date(event.date);
      const yearMonth = date.toISOString().slice(0, 7);

      return prisma.event.upsert({
        where: { messageId: event.messageId },
        update: {
          title: event.title,
          description: event.description,
          price: event.price,
          image: event.image,
          date: event.date,
          yearMonth,
          location: event.location,
          city: event.city,
          contact: event.contact ?? null,
        },
        create: {
          messageId: event.messageId,
          title: event.title,
          description: event.description,
          price: event.price,
          image: event.image,
          date: event.date,
          yearMonth,
          location: event.location,
          city: event.city,
          contact: event.contact ?? null,
          schemaVersion: 1,
        },
      });
    });

    // Wait for all upserts
    const results = await Promise.all(upsertPromises);

    // Return success with count
    return NextResponse.json({
      success: true,
      insertedOrUpdated: results.length,
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { message: "Bulk upsert failed", error: err.message },
      { status: 500 }
    );
  }
}
