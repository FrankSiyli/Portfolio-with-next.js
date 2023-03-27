import Footer from "@/components/Footer/Footer";
import styled from "styled-components";
import Link from "next/link";

const StyledImage = styled.img`
  height: auto;
  width: 60%;
`;

export default function Resume() {
  return (
    <>
      <Link className="styled-back-link" href="/">
        back
      </Link>
      <div className="center-container">
        <StyledImage
          src="/images/LebenslaufVonFrankSiyli1.png"
          alt="Lebenslauf"
          unoptimized={true}
        />

        <StyledImage
          src="/images/LebenslaufVonFrankSiyli2.png"
          alt="Lebenslauf"
          unoptimized={true}
        />
      </div>
      <Footer />
    </>
  );
}