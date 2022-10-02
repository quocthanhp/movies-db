import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import Head from "next/head";
import Layout from "../components/Layout";
import {wrapper} from '../redux/store'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}

export default wrapper.withRedux(MyApp);
