import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import CookieConsent from "react-cookie-consent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frank&apos;s Portfolio</title>
        <meta name="description" content="Frank's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <CookieConsent>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    </>
  );
}
