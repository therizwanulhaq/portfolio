import styled from "@emotion/styled";

import WhatIDo from "./WhatIDo";
import Bg from "../../assets/grainy.svg";

const StyledSection = styled.section`
  position: relative;
  z-index: 2;
  padding: 6rem 3rem;
  border-radius: 1rem;
  background: #131313;
  height: 100%;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk};
  background-image: url(${Bg});
  background-blend-mode: saturation;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #131313;
    background-image: url(${Bg});
    background-blend-mode: color-burn;
    pointer-events: none;
  }
`;

const Details = () => {
  return (
    <>
      <StyledSection className="details">
        <WhatIDo />
      </StyledSection>
    </>
  );
};

export default Details;
