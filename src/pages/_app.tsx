import "../styles/globals.css";
import Head from "next/dist/shared/lib/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      <Head>
        <title>C.bi Projects</title>
        <link rel="icon" href="/snowflake-solid.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
      </Head>
    </Component>
  );
}

export default MyApp;
