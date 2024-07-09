import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useState } from "react";

const StyledSection = styled.section`
  position: relative;
  z-index: 5;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #d1d1c7;
  white-space: nowrap;
  text-transform: uppercase;
`;

// const SubHeading = styled.p`
//   color: #a29e9a;
//   font-weight: 500;
//   width: 18rem;
// `;

const Container = styled.div``;

const AccordianContainer = styled.div`
  padding: ${({ isExpanded }) => (isExpanded ? "1.5rem" : "0")};
  color: ${({ isExpanded }) => (isExpanded ? "#393632" : "#bfbfb1")};
  background: ${({ isExpanded }) => (isExpanded ? "#d1d1c7" : "")};
  border-radius: 0.5rem;
`;

const AccordianHeader = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ isExpanded }) => (isExpanded ? "0 0 1rem 0" : "1rem 0")};
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h5`
  font-size: 2rem;
  font-weight: 800;
`;

const Icon = styled.span`
  font-weight: 800;
`;
const Details = styled.p`
  font-family: ${({ theme }) => theme.fonts.spaceGrotesk};
  color: #524d47;
  font-weight: 500;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #ccc;
`;

const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 15rem;
  grid-template-columns: 1fr 5fr;
`;

const Accordian = ({ title, details, toggleAccordian, isExpanded }) => (
  <AccordianContainer isExpanded={isExpanded}>
    <AccordianHeader onClick={toggleAccordian} isExpanded={isExpanded}>
      <Title isExpanded={isExpanded}>{title}</Title>
      <Icon className="material-symbols-outlined">
        {isExpanded ? "remove" : "add"}
      </Icon>
    </AccordianHeader>
    {isExpanded && <Details>{details}</Details>}
  </AccordianContainer>
);
Accordian.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  toggleAccordian: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

const WhatIDo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordian = (index) => {
    setIsExpanded((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordianData = [
    {
      title: "Web Development",
      details:
        "I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.",
    },
    {
      title: "App Development",
      details:
        "I specialize in developing cross-platform mobile applications using frameworks like Flutter. From concept to deployment, I ensure seamless user experiences and robust functionality for your app.",
    },
    {
      title: "UI Design",
      details:
        "I specialize in designing intuitive and visually appealing user interfaces across various platforms. From web applications to mobile apps, I focus on creating seamless experiences that delight users and drive engagement.",
    },
  ];

  return (
    <StyledSection>
      <Container>
        <Heading>What i do.</Heading>
        <Divider />
      </Container>
      <Grid>
        <Container />
        <Container>
          {accordianData.map((data, index) => (
            <Accordian
              key={index}
              title={data.title}
              details={data.details}
              isExpanded={isExpanded === index}
              toggleAccordian={() => toggleAccordian(index)}
            />
          ))}
        </Container>
      </Grid>
    </StyledSection>
  );
};

export default WhatIDo;
