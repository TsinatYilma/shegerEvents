import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const month = url.searchParams.get("month");

  const events = await prisma.event.findMany({
    where: month ? { yearMonth: month } : undefined,
    orderBy: { datePosted: "asc" },
  });

  return NextResponse.json(events);
}
