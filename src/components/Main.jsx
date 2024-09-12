import styled from "@emotion/styled";
import Hero from "./Hero";
// import SelectedWorks from "./selected_works/SelectedWorks";
// import Details from "./details/Details";
import GetInTouch from "./contact/GetInTouch";
import SelectedWorks from "./selected_works/SelectedWorks";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyledMain = styled.main`
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.spaceGrotesk};
`;

const Main = () => {

  const main = useRef();

  useGSAP(
    () => {
      let panel = gsap.utils.toArray(".panel")

      panel.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "-42.5% top",
          pin: true,
          pinSpacing: false,
          // markers: true,
          scrub: 1,
          // snap: 1,
        })
      })
      gsap.from(panel.children, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: panel,
          start: "top center",
          end: "top top",
          toggleActions: "play none reverse reset"
        }
      })
    },
    {
      scope: main,
    }
  );


  return (
    <StyledMain ref={main}>
      <Hero />
      <SelectedWorks />
      <GetInTouch />
    </StyledMain>
  );
};

export default Main;
