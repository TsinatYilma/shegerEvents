import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const month = url.searchParams.get("month");

  const events = await prisma.event.findMany({
    where: month ? { yearMonth: month } : undefined,
    orderBy: { date: "asc" },
  });
  const safeEvents = events.map((e) => ({
    ...e,
    date: e.date.toISOString(),
    createdAt: e.createdAt.toISOString(),
    updatedAt: e.updatedAt.toISOString()
  }))

  return NextResponse.json(safeEvents);
}
