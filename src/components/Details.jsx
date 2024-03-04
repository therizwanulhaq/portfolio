import styled from "@emotion/styled";
import AboutMe from "./AboutMe";
import WhatIDo from "./WhatIDo";

const StyledSection = styled.section`
  position: relative;
  z-index: 3;
  padding: 3rem;
  border-radius: 1rem;
  background: #080807;
  height: 100%;
`;

const Details = () => {
  return (
    <>
      <StyledSection>
        <AboutMe />
        <WhatIDo />
      </StyledSection>
    </>
  );
};

export default Details;
