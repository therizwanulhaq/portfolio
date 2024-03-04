import styled from "@emotion/styled";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
`;

const StyledLink = styled.li`
  font-size: 0.9rem;
  font-weight: 600;
`;

const StyledButton = styled.button`
  margin-left: 2rem;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 1rem;
  font-weight: 500;
  background: #8c8c73;
  color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  outline: 1px solid #ffffff;

  :hover {
    outline: 1px solid aquamarine;
    transition: outline 500ms ease;
  }
`;

const Navbar = () => {
  const navElements = ["About Me", "Services", "Projects", "Resume"];

  return (
    <StyledNavbar>
      {navElements.map((nav, index) => (
        <StyledLink key={index}>{nav}</StyledLink>
      ))}
      <StyledButton>Contact Me</StyledButton>
    </StyledNavbar>
  );
};

export default Navbar;
