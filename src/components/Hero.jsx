import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";

const StyledSection = styled.section`
  z-index: 1;
  position: relative;
  padding: 0 3rem;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10vh;
`;

const Background = styled.div`
  z-index: 1;
  position: absolute;
  background-image: linear-gradient(
    to bottom,
    #ddddd5,
    #e3ddd8,
    #e3dddd,
    #e2dfe1,
    #e1e1e1
  );
  width: 40rem;
  height: 30rem;
  border-radius: 50%;
  left: 50;
  top: 50;
  transform: translate(-50, -50);
`;

const Heading = styled.h1`
  z-index: 4;
  margin-left: 12rem;
  margin-right: auto;
  font-size: 7rem;
  font-weight: bold;
  letter-spacing: -0.4rem;
  line-height: 1;
`;

const Heading2 = styled(Heading)`
  margin-left: auto;
  margin-right: 10rem;
  letter-spacing: -0.6rem;
  span::after {
    content: " ";
    display: inline-block;
    width: 0.5rem;
  }
`;

const Subheading = styled.p`
  z-index: 4;
  margin-top: 3rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  text-align: center;
`;

const Hero = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
      });
      gsap.from(".subheading", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1,
      });
    },
    { scope: container }
  );

  return (
    <StyledSection ref={container}>
      <Background />
      <Heading className="heading">HI THERE, I{"'"}M</Heading>
      <Heading2 className="heading">
        RI<span>Z</span>WAN UL HAQ
      </Heading2>
      <Subheading className="subheading">
        A freelance front-end developer and web designer elevating digital
        <br />
        experiences with code and design prowess.
      </Subheading>
    </StyledSection>
  );
};

export default Hero;
