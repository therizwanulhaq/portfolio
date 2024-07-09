import styled from "@emotion/styled";

const StyledSection = styled.footer`
  position: relative;
  z-index: 3;
  padding: 6rem 3rem 1rem 3rem;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.generalSans};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
`;

const FooterNav = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 5rem;
  margin-bottom: 4rem;
`;

const Container = styled.div``;

const Heading = styled.h5`
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #929292;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 550;
  margin-bottom: 0.5rem;
`;

const Footer = () => {
  return (
    <StyledSection>
      <FooterNav>
        <Container>
          <Heading>Navigation</Heading>
          <Divider />
          <Content>Home</Content>
          <Content>About</Content>
          <Content>Services</Content>
          <Content>Works</Content>
          <Content>Contact</Content>
        </Container>
        <Container>
          <Heading>Socials</Heading>
          <Divider />
          <Content>LinkedIn</Content>
          <Content>Github</Content>
          <Content>Email</Content>
          <Content>Instagram</Content>
        </Container>
        <Container>
          <Heading>Resources</Heading>
          <Divider />
          <Content>Figma Templates</Content>
        </Container>
      </FooterNav>
      <p>
        <b>© 2024 RIZWAN UL HAQ</b>
      </p>
    </StyledSection>
  );
};

export default Footer;
