import type { NextPage } from "next";
import Head from "next/head";
// import from "../components/Review";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import clientPromise from "../lib/mongodb";
import Image, { StaticImageData } from "next/image";

export default function Review({ reviews, last }: any) {
  return (
    <>
      <Head>
        <title>Eileen's Corner</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="David Xiongi" />
        <meta name="keywords" content="Anime, Review" />
        <meta name="description" content="" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:site_name"
          content="Eileen's Corner - Reviews and Lists"
        />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Blaiti - Frontend Developer</title>
        <meta data-rh="true" property="og:type" content="website" />
        <meta
          data-rh="true"
          property="og:title"
          content="Eileen's Corner - Reviews and Lists"
        />
        <meta data-rh="true" property="og:image" content="/images/blaiti.png" />
      </Head>

      {/* NavBar */}
      <NavBar />

      <main>
        {/* About */}
        <section id="Review" className="dark-bg">
          <div className="light-bg main-review-card flex">
            <div className="main-review-card-top-bar"></div>
            <div className="main-review-card-top-bar-circle"></div>
            <div className="main-review-card-top-bar-title">
              {"< Newest Review />"}
            </div>
            <img className="main-review-card-image" src={last.imageURL}></img>
            <div className="main-review-card-div">
              <p className="red main-review-card-title">{last.title}</p>
              <p className="red main-review-card-genre">{last.genre}</p>
            </div>
            <img
              src="https://bluerth.com/wp-content/uploads/2012/02/cherryBlossom.png.webp"
              className="main-review-card-decoration1"
            ></img>
          </div>
          <div className="review-grid">
            <div className="flex-review">
              {reviews.map((review: any) => (
                <ReviewCard
                  title={review.title}
                  date={review.date}
                  genre={review.genre}
                  review={review.review}
                  imageURL={review.imageURL}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("eileens-corner-db");

    const reviews = await db.collection("reviews").find({}).toArray();
    const last = reviews[reviews.length - 1];
    const rest = reviews.slice(0, -1);

    return {
      props: {
        reviews: JSON.parse(JSON.stringify(rest)),
        last: JSON.parse(JSON.stringify(last)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}

type Props = {
  title: string;
  date: string;
  genre: string;
  review: string;
  imageURL: string;
};

function ReviewCard({ title, date, genre, review, imageURL }: Props) {
  return (
    <div className="light-bg review-card">
      <div className="review-card-title red">{title}</div>
      <p className="red">{genre}</p>
      <img className="review-card-image" src={imageURL}></img>
      <div className="gray">
        <p className="gray review-text">{review}</p>
      </div>
    </div>
  );
}
