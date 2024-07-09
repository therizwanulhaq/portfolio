import styled from "@emotion/styled";

const StyledSection = styled.section`
  position: relative;
  display: flex;
  gap: 10rem;
`;
const Heading = styled.h1`
  font-size: 3rem;
  color: #d1d1c7;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk};
`;

const Content = styled.p`
  font-family: ${({ theme }) => theme.fonts.spaceGrotesk};
  margin-top: 0.5rem;
  color: #a29e9a;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const AboutMe = () => {
  return (
    <StyledSection>
      <Heading>ABOUT ME.</Heading>
      <div>
        <Content>
          A driven front-end developer with a passion for crafting exceptional
          user experiences. My journey into the world of development began with
          Flutter, where I delved into the exciting realm of mobile app
          development. Flutter sparked my fascination with creating seamless and
          beautiful interfaces, pushing me to explore the possibilities of
          interactive design. As I honed my skills in building robust mobile
          applications, I discovered a love for problem-solving and pushing the
          boundaries of what
          {"'"}s possible.
        </Content>
        <Content>
          Transitioning to React was a natural progression for me, opening up
          new avenues for web development and expanding my toolkit. Embracing
          the React ecosystem, I{"'"}ve immersed myself in creating dynamic and
          responsive web applications that captivate users and deliver tangible
          results. Beyond my technical expertise, I bring a creative perspective
          to every project, infusing innovation and originality into my work.
          Collaboration and communication are at the core of my approach,
          recognizing the value of teamwork in achieving shared goals.
        </Content>
        <Content>
          Outside of coding, I{"'"}m constantly seeking inspiration from the
          ever-evolving landscape of design and technology. Whether it{"'"}s
          experimenting with new frameworks or diving into the latest trends, I
          {"'"}m committed to continuous learning and growth.
        </Content>
      </div>
    </StyledSection>
  );
};

export default AboutMe;
