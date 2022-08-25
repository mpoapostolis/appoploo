import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Layout } from "../components/layout";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [_, path, __] = router.pathname.split("/");

  return path === "tracking" ? (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  ) : (
    <Component {...pageProps} />
  );
}

export default MyApp;
