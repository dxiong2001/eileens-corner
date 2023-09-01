import clientPromise from "../../lib/mongodb";

export default async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db("eileens-corner-db");
    const { title, date, genre, review } = req.body;

    const post = await db.collection("reviews").insertOne({
      title: title,
      date: date,
      genre: genre,
      review: review,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
  }
};
