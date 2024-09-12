import styled from "@emotion/styled";

import littleLemonImg from "../../assets/images/little_lemon.png";
import placeholderImage from "../../assets/images/Wallpaper -www.posintech.com.jpg"

const Section = styled.section`
display: grid;
grid-template-columns: 1fr 2fr;
align-items: flex-start;
justify-content: space-between;
padding: 0 6rem 6rem 6rem;
`

const ProjectNumberContainer = styled.div`
 flex: 0 0 40%;
`

const ProjectNumber = styled.div`
   font-size: 20vw;
  line-height: 20vw;
  color: ${({ theme }) => theme.colors.background};
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

div{
 display: inline-flex;
 position: sticky;
top: 0;
}
`

const ImageContainer = styled.div`
 flex: 0 0 60%;

 p{
  margin-top: 1rem;
  text-align: left;
 }
`

const Image = styled.img`
width: 100%;
object-fit: cover;
aspect-ratio: 1/1;
`

const ProjectData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5{
    color: aliceblue;
    font-size: 2rem;
  }

  div{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

const ProjectDetails = styled.div`
  width: fit-content;
  padding: 0.2rem 0.7rem;
  border: 1px solid white;
  border-radius: 5rem;
  color: aliceblue;
`

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
      <ProjectNumberContainer className="projectNumber">
        <ProjectNumber >
          <div className="firstDigit">0</div>
          <div className="secondDigit">1.</div>
        </ProjectNumber>
      </ProjectNumberContainer>
      {projects.map((project, index) => (
        <>
          <ImageContainer key={index}>
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
          <div></div>
        </>
      ))}
    </Section>

  )
}

export default Projects
