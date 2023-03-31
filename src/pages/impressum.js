import styled from "styled-components";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function Impressum() {
  return (
    <>
      <Link className="styled-back-link" href="/">
        back
      </Link>
      <div
        className="center-container"
        style={{ textAlign: "center", marginTop: "5rem" }}
      >
        <p>Frank Siyli</p>
        <p>Vogt Groth Weg 45a</p>
        <p>22609 Hamburg</p>
        <p>Tel.: 016099159478</p>
        <p>E-Mail: frank.siyli@gmail.com</p>
        <p>
          USt. wird nicht ausgewiesen, da der Verkäufer/ die Verkäuferin
          Kleinunternehmer:in im Sinne des UStG ist.
        </p>
        <p>
          Plattform der EU-Kommission zur Online-Streitbeilegung:
          https://ec.europa.eu/odr
        </p>
        <p>
          Ich bin zur Teilnahme an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
        </p>
      </div>
      <Footer />
    </>
  );
}
