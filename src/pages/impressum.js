import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  position: absolute;
  background-color: #3776ab;
  border-radius: 5px;
  font-size: 2rem;
  text-decoration: underline;
  padding: 10px;
  left: 0;
`;

const StyledPContainer = styled.div`
  margin-top: 5%;
  text-align: center;
  margin-bottom: 20%;
`;

export default function Impressum() {
  return (
    <>
      <StyledLink href="/">back</StyledLink>
      <StyledPContainer>
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
      </StyledPContainer>
    </>
  );
}
