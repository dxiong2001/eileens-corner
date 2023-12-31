import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import clientPromise from "../lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eileen's Corner</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Skander Blaiti" />
        <meta name="keywords" content="ReactJS, NextJS" />
        <meta
          name="description"
          content="I am a talented Front-End developer with a UI/UX design background."
        />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Blaiti - Frontend Developer" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Blaiti - Frontend Developer</title>
        <meta data-rh="true" property="og:type" content="website" />
        <meta
          data-rh="true"
          property="og:title"
          content="Blaiti - Frontend Developer"
        />
        <meta data-rh="true" property="og:image" content="/images/blaiti.png" />
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
