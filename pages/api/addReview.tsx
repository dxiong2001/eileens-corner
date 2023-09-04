import clientPromise from "../../lib/mongodb";

export default async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db("eileens-corner-db");
    const { title, date, genre, review, imageURL } = req.body;
    console.log(req.body);
    console.log(imageURL);
    const post = await db.collection("reviews").insertOne({
      title: title,
      date: date,
      genre: genre,
      review: review,
      imageURL: imageURL,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
  }
};
