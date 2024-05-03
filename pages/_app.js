import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import user from "../reducers/user";
import searchHashtags from "../reducers/searchHashtags";
import like from "../reducers/like";

const reducers = combineReducers({ user, searchHashtags, like });
const persistConfig = { key: "applicationName", storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Head>
              <title>Hackatweet</title>
              <link rel="icon" href="favicon.png" />
            </Head>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;
