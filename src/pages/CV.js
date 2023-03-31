import Footer from "@/components/Footer/Footer";
import styled from "styled-components";
import Link from "next/link";

const StyledImage = styled.img`
  height: auto;
  width: 90vw;
  max-width: 700px;
  margin-top: 1vh;
`;

export default function Resume() {
  return (
    <>
      <Link className="styled-back-link" href="/">
        back
      </Link>
      <div className="center-container-CV">
        <StyledImage
          src="/images/CV1.png"
          alt="Lebenslauf"
          unoptimized={true}
        />

        <StyledImage
          src="/images/CV2.png"
          alt="Lebenslauf"
          unoptimized={true}
        />
      </div>
      <Footer />
    </>
  );
}
