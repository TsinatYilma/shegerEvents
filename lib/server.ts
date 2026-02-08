import express, { Request, Response } from "express";
import { prisma } from './prisma';
import { Prisma } from '@prisma/client';
/*
const app = express();

app.use(express.json()); // parse JSON body

type BulkEventRequest = Prisma.EventCreateInput[];

// Root endpoint
app.get("/", (req, res) => {
  res.send("Telegram Events API is running!");
});

// Bulk upsert endpoint

app.post(
  "/api/events/upsert",
  async (req: Request<{}, {}, BulkEventRequest>, res: Response) => {
    const events = req.body;

    if (!Array.isArray(events) || events.length === 0) {
      return res.status(400).json({ message: "No events provided" });
    }


    try {
      // Prepare upsert promises
      const upsertPromises = events.map((event) => {
        const date = new Date(event.date);
        const yearMonth = date.toISOString().slice(0, 7);
        prisma.event.upsert({
          where: {
            messageId: event.messageId,
          },
          update: {
            title: event.title,
            description: event.description,
            price: event.price,
            image: event.image,
            date: event.date,
            yearMonth,
          },
          create: {
            messageId: event.messageId,
            title: event.title,
            description: event.description,
            price: event.price,
            image: event.image,
            date: event.date,
            yearMonth,
            schemaVersion: 1,
          },
        })
      });

      const results = await Promise.all(upsertPromises);

      res.json({
        success: true,
        insertedOrUpdated: results.length,
      });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ message: "Bulk upsert failed", error: err.message });
    }
  })

//get the events by month
app.get("/api/events", async (req, res) => {
  const { month } = req.query; // string | undefined

  const events = await prisma.event.findMany({
    where: typeof month === "string" ? { yearMonth: month } : undefined,
    orderBy: { date: "asc" },
  });

  res.json(events);
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
*/