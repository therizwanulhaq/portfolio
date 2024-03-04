import styled from "@emotion/styled";
import Hero from "./Hero";
import Details from "./Details";

const StyledMain = styled.main`
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Main = () => {
  return (
    <StyledMain>
      <Hero />
      <Details />
    </StyledMain>
  );
};

export default Main;
