import Navbar from "./Navbar";
import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import LogoBlack from "../assets/RUH_LOGO_BLACK.svg";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.heading};
  transition: background 700ms ease;
`;

const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Header = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".animate", {
        opacity: 0,
        y: -30,
        duration: 1,
        delay: 0.5,
      });
    },
    { scope: container }
  );

  return (
    <StyledHeader ref={container}>
      <Logo src={LogoBlack} className="animate" />
      <StyledDiv className="animate">
        <Navbar />
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
