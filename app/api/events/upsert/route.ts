import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // path to your Prisma client

export async function POST(req: NextRequest) {
  try {
    const events = await req.json();

    if (!Array.isArray(events) || events.length === 0) {
      return NextResponse.json({ message: "No events provided" }, { status: 400 });
    }

    const upsertPromises = events.map((event) => {
      const date = new Date(event.datePosted);
      const yearMonth = date.toISOString().slice(0, 7);

      return prisma.event.upsert({
        where: { messageId: event.messageId },
        update: {
          title: event.title,
          description: event.description,
          price: event.price,
          image: event.image,
          datePosted: event.datePosted,
          yearMonth,
        },
        create: {
          messageId: event.messageId,
          title: event.title,
          description: event.description,
          price: event.price,
          image: event.image,
          datePosted: event.datePosted,
          yearMonth,
          schemaVersion: 1,
        },
      });
    });

    const results = await Promise.all(upsertPromises);

    return NextResponse.json({ success: true, insertedOrUpdated: results.length });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { message: "Bulk upsert failed", error: err.message },
      { status: 500 }
    );
  }
}
