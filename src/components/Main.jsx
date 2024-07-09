import styled from "@emotion/styled";
import Hero from "./Hero";
import SelectedWorks from "./selected_works/SelectedWorks";
import Details from "./details/Details";
import GetInTouch from "./contact/GetInTouch";

const StyledMain = styled.main`
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.spaceGrotesk};
`;

const Main = () => {
  return (
    <StyledMain>
      <Hero />
      <Details />
      <SelectedWorks />
      <GetInTouch />
    </StyledMain>
  );
};

export default Main;
