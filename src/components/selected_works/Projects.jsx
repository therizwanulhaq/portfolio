import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Project = styled.div`
  position: relative;
  z-index: 5;
  padding: 6rem;
  display: flex;
  align-items: center;
  gap: 6rem;
`;

const ProjectImageContainer = styled.div`
  width: 30rem;
  height: 30rem;
  background: grey;
  flex-shrink: 0;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ProjectDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

const ProjectName = styled.p`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk};
`;

const ProjectDescription = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
`;

const Directional = styled.div`
  position: relative;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const Reactangle = styled.div`
  width: 2.5rem;
  height: 1rem;
  background: #080807;
  flex-shrink: 0;
`;

const Line = styled.div`
  width: 0.1rem;
  height: 15rem;
  background: #080807;
  flex-shrink: 0;
`;

const Circle = styled.div`
  position: absolute;
  top: 17rem;
  left: -0.2rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #080807;
  flex-shrink: 0;
`;

const Projects = ({ name, image, details }) => {
  return (
    <Project>
      <ProjectImageContainer>
        <ProjectImage src={image} />
      </ProjectImageContainer>
      <ProjectDetails>
        <Directional>
          <Reactangle />
          <Line />
          <Circle />
        </Directional>
        <div>
          <ProjectName>{name}</ProjectName>
          <ProjectDescription>{details}</ProjectDescription>
        </div>
      </ProjectDetails>
    </Project>
  );
};

Projects.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Projects;
