import "@/styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

import Layout from "../components/Layout/Layout";
import Script from "next/script";
function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PPPS1ECEDX', {
page_path: window.location.pathname,
});
`,
        }}
      />
      <Layout>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </Layout>
    </>
  );
}
export default App;
