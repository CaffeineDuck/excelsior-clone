import type { AppProps } from "next/app";

import BaseLayout from "../components/layout/BaseLayout";
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  const component: any = Component;
  const Layout = component.Layout || BaseLayout;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
