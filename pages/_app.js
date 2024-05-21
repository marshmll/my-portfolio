import Head from "next/head";
import "@fontsource/montserrat";
import "@fontsource/italianno";
import "@fontsource/tangerine";
import "@fontsource/dm-serif-display";
import "./globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Renan Andrade</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
