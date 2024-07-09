import styled from "@emotion/styled";

const StyledSection = styled.section`
  padding: 3rem;
  height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100%); /* Adjust this value based on the grid size */
    height: 100%;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px);
    background-size: 7rem 7rem; /* Adjust this value to change the size of the grid boxes */
    background-position: 50% 0; /* Center the background vertically */
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% + 1rem); /* Adjust this value based on the grid size */
    height: 100%;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px);
    background-size: 7rem 7rem; /* Adjust this value to change the size of the grid boxes */
    background-position: -50% 0; /* Center the background vertically */
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #080807;
  white-space: nowrap;
`;

const SelectedWorks = () => {
  return (
    <StyledSection>
      <Heading>SELECTED WORKS.</Heading>
    </StyledSection>
  );
};

export default SelectedWorks;
