import Navbar from "./Navbar";
import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const StyledHeader = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  font-family: ${({ theme }) => theme.fonts.spaceGrotesk};
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: 700;
`;

const Header = () => {
  const headerContainer = useRef();

  useGSAP(
    () => {
      gsap.from(".animate", {
        opacity: 0,
        y: -30,
        duration: 1,
        delay: 1,
      });
      gsap.from(".dot", {
        repeat: -1,
        duration: 2,
        color: "white",
      });
    },
    { scope: headerContainer }
  );

  return (
    <StyledHeader ref={headerContainer}>
      <Logo className="animate">
        ruh<span className="dot">.</span>
      </Logo>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
