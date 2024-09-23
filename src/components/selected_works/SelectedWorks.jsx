import styled from "@emotion/styled";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
`;

const BackgroundGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100% + 6rem);
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
  div {
    display: inline-block;
  }
`;

const SelectedWorks = () => {
  const projectContainer = useRef();
  const projectNumberRefs = useRef([]);

  useGSAP(
    () => {
      gsap.from(".heading div", {
        scrollTrigger: {
          trigger: ".heading",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none none",
        },
        y: 150,
        opacity: 0,
        stagger: 0.03,
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
        },
      });

      gsap.to(".projectNumber", {
        scrollTrigger: {
          trigger: ".projectContainer",
          start: "top top+=10%vh",
          end: "bottom-=16%vh top",
          scrub: 1,
          pin: ".projectNumber",
          pinSpacing: false,
          toggleActions: "play none none none",
          markers: true,
        },
      });

      // PROJECT NUMBER THINGY

      const projectElems = gsap.utils.toArray(".project");

      projectElems.forEach((project, index) => {
        const currentNumber = projectNumberRefs.current[index];

        // If it's the first project, do not animate the number
        if (index === 0) {
          gsap.set(currentNumber, { y: "0%" }); // Ensure the first number is in place
          return;
        }

        gsap.timeline({
          scrollTrigger: {
            trigger: project,
            start: "top center", // Start animating when the project is in view
            end: "bottom center", // End when the project is out of view
            scrub: true, // Smooth scrolling
            onEnter: () => {
              // Slide up the previous number and bring in the current number
              const previousNumber = projectNumberRefs.current[index - 1];
              gsap.to(previousNumber, {
                y: "-100%", // Slide the previous number up
                duration: 0.5,
                ease: "power2.out",
              });

              if (currentNumber) {
                gsap.to(currentNumber, {
                  y: "0%", // Bring the current number up
                  duration: 0.5,
                  ease: "power2.out",
                });
              }
            },
            onLeaveBack: () => {
              // Slide the current number down and restore the previous number
              const previousNumber = projectNumberRefs.current[index - 1];
              gsap.to(previousNumber, {
                y: "0%", // Restore the previous number back to original position
                duration: 0.5,
                ease: "power2.out",
              });

              if (currentNumber) {
                gsap.to(currentNumber, {
                  y: "100%", // Slide the current number back down
                  duration: 0.5,
                  ease: "power2.out",
                });
              }
            },
          },
        });
      });
    },
    { scope: projectContainer }
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
        <SubHeadline>
          Featured projects that have been <br /> meticulously crafted with
          passion <br /> to drive results.
        </SubHeadline>

        <Projects projectNumberRefs={projectNumberRefs} />
      </ContentWrapper>
    </StyledSection>
  );
};

export default SelectedWorks;
