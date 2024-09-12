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

const StyledLink = styled.a`
color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #c07300;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 2px;
    right: 0;
    background: #c0730092;
    transition: width 0.3s ease;
    -webkit-transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
    left: 0;
    background: #c0730097;
  }
`;

const Navbar = () => {
  const navContainer = useRef();

  useGSAP(
    () => {
      gsap.from(".navbar", {
        opacity: 0,
        y: -30,
        duration: 1,
        stagger: 0.1,
        ease: "sine",
        delay: 1,
      });
    },
    { scope: navContainer }
  );

  const navElements = [
    { name: "About Me", path: "#aboutMe", type: "hashLink" },
    { name: "Services", path: "#services", type: "hashLink" },
    { name: "Projects", path: "#projects", type: "hashLink" },
    { name: "Contact", path: "#contact", type: "hashLink" },
    { name: "Resume", path: "#resume", type: "hashLink" },
  ];


  return (
    <StyledNavbar ref={navContainer}>
      {navElements.map((link, index) => (
        <StyledLink key={index} className="navbar" href={link.path}>
          {link.name}
        </StyledLink>
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
