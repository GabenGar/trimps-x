import "../styles/global.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Layout } from "#components/layout";
import { ErrorBoundary } from "#components/errors";

function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
        <Script defer src="Playfab/PlayFabSDK/PlayFabClientApi.js" />
        <Script defer src="lz-string.js" />
        <Script defer src="decimal.min.js" />
        <Script defer src="config.js" />
        <Script defer src="updates.js" />
        <Script defer src="playerSpire.js" />
        <Script defer src="objects.js" />
        <Script defer src="main.js" />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
