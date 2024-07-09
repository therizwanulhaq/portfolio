import styled from "@emotion/styled";

const StyledSection = styled.section`
  position: relative;
  z-index: 3;
  padding: 6rem 3rem;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.generalSans};
  background: ${({ theme }) => theme.colors.background};
`;

const Heading = styled.h1`
  font-size: 5rem;
  text-align: center;
  font-weight: 600;
  letter-spacing: -4px;
`;

const SubHeading = styled.h5`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Contact = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8rem;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: bold;
  font-weight: 600;
`;

const Input = styled.input`
  height: 3rem;
  padding: 0.5rem 1rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 600;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-size: 1rem;
    font-weight: 550;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.activeBorder};
    outline: none;
    background: ${({ theme }) => theme.colors.activeBg};
  }
`;

const TextArea = Input.withComponent("textarea");

const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const StyledButton = styled.button`
  padding: 1.5rem 2rem;
  border: none;
  border-radius: 3rem;
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.1rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.text};
  width: 40%;
  text-transform: uppercase;
`;

const FurtherEnquires = styled.div``;

const Heading2 = styled.p`
  font-size: 1rem;
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.7rem;
`;

const Details = styled.p`
  margin-bottom: 0.3rem;
  font-weight: 550;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Spacer = styled.div`
  height: 2.5rem;
`;

const GetInTouch = () => {
  return (
    <StyledSection>
      <Heading>GET IN TOUCH</Heading>
      <SubHeading>Let{"'"}s bring your ideas to life.</SubHeading>
      <Contact>
        <StyledForm>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="John Doe"></Input>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="yourname@email.com"
          ></Input>
          <Label htmlFor="work">You work at</Label>
          <Input id="work" type="text" placeholder="Mappa"></Input>
          <Label htmlFor="message">Detailed Message</Label>
          <TextArea id="message" placeholder="Brief Summary"></TextArea>
          <StyledButton>Let&apos;s do it</StyledButton>
        </StyledForm>
        <FurtherEnquires>
          <Heading2>
            Further Enquiries <br /> or collaboration
          </Heading2>
          <Details>therizwanulhaq@gmail.com</Details>
          <Details>+917006149337</Details>
          <Spacer />
          <Heading2>Socials</Heading2>
          <Details>LinkedIn</Details>
          <Details>Github</Details>
          <Details>Instagram</Details>
        </FurtherEnquires>
      </Contact>
    </StyledSection>
  );
};

export default GetInTouch;
