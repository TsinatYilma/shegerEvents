export async function postEvents(book: {
    title: string;
    author: string;
    quantity: number;
    publisher: string;
    publicationYear: string | number; // allow string from input
  }) {
    const payload = {
      ...book,
      publicationYear: Number(book.publicationYear),
    };
  
    const res = await fetch("http://localhost:3000/api/events/upsert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    if (!res.ok) throw new Error("Failed to add book");
    else console.log("GOD DAMN! IT WORKED :)", res);
    return res.json();
  }
  
  export async function getEvents(yearMonth: string) {
    const res = await fetch(`http://localhost:3000/api/events?month=${yearMonth}`);
    if (!res.ok) throw new Error("Failed to fetch books");
    return res.json();
  }
  