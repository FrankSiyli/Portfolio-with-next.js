import styled from "styled-components";
import Link from "next/link";

const StyledImage = styled.img`
  height: auto;
  width: 60%;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5%;
`;

const StyledLink = styled.a`
  position: absolute;
  background-color: #3776ab;
  border-radius: 5px;
  font-size: 2rem;
  text-decoration: underline;
  padding: 10px;
  margin: 2%;
`;

export default function Resume() {
  return (
    <>
      <StyledLink href="/">back</StyledLink>
      <StyledContainer>
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
      </StyledContainer>
    </>
  );
}
