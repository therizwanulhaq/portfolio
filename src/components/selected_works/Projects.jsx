import styled from "@emotion/styled";
import littleLemonImg from "../../assets/images/little_lemon.png";
import placeholderImage from "../../assets/images/Wallpaper -www.posintech.com.jpg";
import React from "react";

const Section = styled.section`
  padding: 0 6rem 3rem 6rem;
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  align-items: start;
`;

const ProjectNumberWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const FirstNumber = styled.h1`
  font-size: 20vw;
  line-height: 1;
  color: ${({ theme }) => theme.colors.background};
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk};
`;

const SecondNumberWrapper = styled.div`
  height: 20vw;
`;

const SecondNumber = styled.h1`
  font-size: 20vw;
  line-height: 1;
  color: ${({ theme }) => theme.colors.background};
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk};
  position: absolute;
  transform: translateY(100%);
  transition: transform 0.5s ease;
`;

const Project = styled.div`
  margin-bottom: 10rem;

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

const Projects = ({ projectNumberRefs }) => {
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
    {
      name: "Little Lemon",
      type: "Technology and Arts",
      image: placeholderImage,
      date: "2024",
    },
  ];

  return (
    <Section>
      <ProjectContainer className="projectContainer">
        {/* Project Numbers */}
        <ProjectNumberWrapper className="projectNumber">
          <FirstNumber>0</FirstNumber>
          <SecondNumberWrapper>
            {projects.map((_, index) => (
              <SecondNumber
                key={index}
                ref={(el) => (projectNumberRefs.current[index] = el)}
                style={{
                  transform:
                    index === 0 ? "translateY(0%)" : "translateY(100%)",
                }} // Initially show the first number, hide others
              >
                {index + 1 < 10 ? `${index + 1}` : index + 1}
              </SecondNumber>
            ))}
          </SecondNumberWrapper>
        </ProjectNumberWrapper>

        {/* Project List */}
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project key={index} className="project">
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
            </Project>
            <div></div>
          </React.Fragment>
        ))}
      </ProjectContainer>
    </Section>
  );
};

export default Projects;
