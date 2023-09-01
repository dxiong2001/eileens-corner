import clientPromise from "../lib/mongodb";
import NewReview from "../components/NewReview";

export default function Movies({ movies }: any) {
  return (
    <div>
      <NewReview />
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {movies.map((movie: any) => (
          <li>
            <h2>{movie.title}</h2>
            <h3>{movie.date}</h3>
            <p>{movie.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("eileens-corner-db");

    const movies = await db.collection("reviews").find({}).toArray();

    return {
      props: { movies: JSON.parse(JSON.stringify(movies)) },
    };
  } catch (e) {
    console.error(e);
  }
}
