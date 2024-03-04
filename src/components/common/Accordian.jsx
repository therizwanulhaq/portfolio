import styled from "@emotion/styled";
import { useState } from "react";
import PropTypes from "prop-types";

const AccordianContainer = styled.div`
  padding: ${({ isExpanded }) => (isExpanded ? "1.5rem" : "0")};
  color: ${({ isExpanded }) => (isExpanded ? "#393632" : "#bfbfb1")};
  background: ${({ isExpanded }) => (isExpanded ? "#d1d1c7" : "")};
  border-radius: 1rem;
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
  color: #524d47;
  font-weight: 500;
`;

const Accordian = ({ title, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordian = () => {
    setIsExpanded(!isExpanded);
  };
  return (
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
};
Accordian.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Accordian;
