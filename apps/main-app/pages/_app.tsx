import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const token = true;
  return token ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}

export default MyApp;
