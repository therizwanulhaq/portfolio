import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledLink = styled.li`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9rem;
  font-weight: 700;
`;

const Navbar = () => {
  const navContainer = useRef();

  useGSAP(
    () => {
      gsap.from(".navbar", {
        opacity: 0,
        y: -30,
        duration: 1,
        stagger: 0.2,
        ease: "sine",
        delay: 1,
      });
    },
    { scope: navContainer }
  );

  const navElements = ["About Me", "Services", "Projects", "Resume", "Contact"];

  return (
    <StyledNavbar ref={navContainer}>
      {navElements.map((nav, index) => (
        <StyledLink key={index} className="navbar">
          {nav}
        </StyledLink>
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
