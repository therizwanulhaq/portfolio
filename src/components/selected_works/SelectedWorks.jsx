import styled from "@emotion/styled";
import littleLemonImg from "../../assets/images/little_lemon.png";
import Projects from "./Projects";

const StyledSection = styled.section`
  z-index: 3;
  position: relative;
  margin-top: 10rem;
  padding: 3rem 3rem 6.1rem 3rem;
  background: ${({ theme }) => theme.colors.background};
`;

const BackgroundGrid = styled.div`
  position: absolute;
  top: 0;
  left: -3rem;
  width: calc(100% + 3rem);
  height: 100%;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px);
  background-size: 6rem 6rem;
`;

const Heading = styled.h1`
  position: relative;
  z-index: 5;
  font-size: 3rem;
  line-height: 1;
  color: #080807;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk};
`;

const SelectedWorks = () => {
  const projects = [
    {
      name: "Little Lemon",
      image: littleLemonImg,
      details:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipitiure, quidem, magni voluptates esse blanditiis tempora officiisillum unde earum expedita laborum id, veritatis hic excepturivoluptatum fugiat voluptas vitae.",
    },
    {
      name: "Little Lemon",
      image: littleLemonImg,
      details:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipitiure, quidem, magni voluptates esse blanditiis tempora officiisillum unde earum expedita laborum id, veritatis hic excepturivoluptatum fugiat voluptas vitae.",
    },
  ];

  return (
    <StyledSection>
      <BackgroundGrid></BackgroundGrid>
      <Heading>SELECTED WORKS.</Heading>
      {projects.map((project, index) => (
        <Projects key={index} {...project} />
      ))}
    </StyledSection>
  );
};

export default SelectedWorks;
