import type { NextPage } from "next";
import Head from "next/head";
import NewReview from "../components/NewReview";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function NewReviews() {
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
        <NewReview />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default NewReviews;
