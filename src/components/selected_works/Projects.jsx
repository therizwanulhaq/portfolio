import styled from "@emotion/styled";

import littleLemonImg from "../../assets/images/little_lemon.png";
import placeholderImage from "../../assets/images/Wallpaper -www.posintech.com.jpg";

const Section = styled.section`
  display: flex;
  padding: 0 6rem 6rem 6rem;
`;

const ProjectNumberWrapper = styled.div`
  position: relative; /* Allows the pinning behavior */
  height: 20vw; /* Same height as the first digit to maintain the space */
`;

const ProjectNumber = styled.div`
  p {
    font-size: 20vw;
    line-height: 20vw;
    color: ${({ theme }) => theme.colors.background};
    white-space: nowrap;
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk};
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  align-items: flex-start;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  margin-bottom: 5rem;

  p {
    margin-top: 1rem;
    text-align: left;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
`;

const ProjectData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5 {
    color: aliceblue;
    font-size: 2rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const ProjectDetails = styled.div`
  width: fit-content;
  padding: 0.2rem 0.7rem;
  border: 1px solid white;
  border-radius: 5rem;
  color: aliceblue;
`;

const Projects = () => {
  const projects = [
    {
      name: "Little Lemon",
      type: "Technology and Arts",
      image: placeholderImage,
      date: "2024",
    },
    {
      name: "Little Lemon",
      type: "Technology and Arts",
      image: littleLemonImg,
      date: "2024",
    },
  ];

  return (
    <Section>
      <ProjectNumberWrapper>
        <ProjectNumber className="firstDigit">
          <p>0</p>
        </ProjectNumber>
      </ProjectNumberWrapper>
      <ProjectContainer className="projectContainer">
        {projects.map((project, index) => (
          <>
            <ProjectNumber>
              <p>{index + 1}</p>
            </ProjectNumber>
            <ImageContainer key={index} className="projectContainer">
              <Image src={project.image} alt="placeholder picture" />
              <p>{project.type}</p>
              <ProjectData>
                <h5>{project.name}</h5>
                <div>
                  <ProjectDetails>DESIGN</ProjectDetails>
                  <ProjectDetails>DEVELOPMENT</ProjectDetails>
                  <ProjectDetails>{project.date}</ProjectDetails>
                </div>
              </ProjectData>
            </ImageContainer>
          </>
        ))}
      </ProjectContainer>
    </Section>
  );
};

export default Projects;
