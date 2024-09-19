import styled from "@emotion/styled";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


import Bg from "../../assets/grainy.svg";
import Projects from "./Projects";

const StyledSection = styled.section`
  overflow: hidden;
  border-radius: 2rem;
  z-index: 3;
  position: relative;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 5;
  padding-top: 3rem;

`;

const SubHeadline = styled.p`
  text-align: left;
    padding-left: 60%;
    margin: 3rem 0 3rem 0;
    color: aliceblue;
`

const BackgroundGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width:calc(100% + 6rem);
  background: #131313;
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

const Heading = styled.h1`
  font-size: 7vw;
  line-height: 1;
  color: ${({ theme }) => theme.colors.background};
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk};
  padding: 0 0 0 6rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  div{
    display: inline-block;
  }
`;

const SelectedWorks = () => {
  const projectContainer = useRef();
  useGSAP(
    () => {

      gsap.from(".heading div", {
        scrollTrigger: {
          trigger: ".heading",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none none",
          // markers: true,
        },
        y: 150,
        stagger: 0.05,
        duration: 0.7,
        ease: "sine",
      });

      gsap.to(".backgroundGrid", {
        scrollTrigger: {
          trigger: ".backgroundGrid",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: ".backgroundGrid",
          toggleActions: "restart pause reverse play",
          // markers: true,
        },
      });

      gsap.to(".firstDigit", {
        scrollTrigger: {
          trigger: ".projectContainer",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: ".firstDigit",
          pinSpacing: false,
          toggleActions: "play none none none",
          markers: true,
        },
      });
    },
    { scope: projectContainer } // Applying scope to ensure proper cleanup
  );


  return (
    <StyledSection id="projects" ref={projectContainer}>
      <BackgroundGrid className="backgroundGrid" />
      <ContentWrapper>
        <Heading className="heading">
          <div>S</div>
          <div>E</div>
          <div>L</div>
          <div>E</div>
          <div>C</div>
          <div>T</div>
          <div>E</div>
          <div>D</div>
          <div> </div>
          <div>W</div>
          <div>O</div>
          <div>R</div>
          <div>K</div>
          <div>S</div>
          <div>.</div>
        </Heading>
        <SubHeadline>Featured projects that have been <br /> meticulously crafted with passion <br /> to drive results.</SubHeadline>
        <Projects />
      </ContentWrapper>
    </StyledSection>
  );
};

export default SelectedWorks;
