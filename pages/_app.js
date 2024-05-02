import "../styles/globals.css";
import Head from "next/head";

import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Provider store={store}>
        <Head>
          <title>Hackatweet</title>
          <link rel="icon" href="favicon.png" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </NextUIProvider>
  );
}

export default App;
