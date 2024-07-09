import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const StyledSection = styled.section`
  z-index: 2;
  position: relative;
  padding: 0 3rem;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  ${mq[3]} {
    font-size: 1rem;
  }

  ${mq[2]} {
    font-size: 1rem;
  }

  ${mq[1]} {
    font-size: 6rem;
  }

  ${mq[0]} {
    padding: 0 1.5rem;
  }
`;

const Background = styled.div`
  z-index: 1;
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translate(-50%, -30%);
  top: 0;
  background-image: linear-gradient(
    to bottom,
    #d9d9d1,
    #e0dad5,
    #e1dbdb,
    #e1dee0,
    #e1e1e1
  );

  width: 40rem;
  height: 40rem;
  border-radius: 100%;
  top: 20%;

  ${mq[0]} {
    width: 25rem;
    height: 25rem;
  }
`;

const Spacer = styled.div`
  ${mq[1]} {
    margin-top: auto;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.spaceGrotesk};
  z-index: 4;
  margin-left: 12rem;
  margin-right: auto;
  font-size: 9rem;
  font-weight: bold;
  letter-spacing: -0.8rem;
  line-height: 9rem;
  padding-right: 1rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  div {
    display: inline-block;
  }

  ${mq[3]} {
    font-size: 8rem;
  }

  ${mq[2]} {
    font-size: 7rem;
  }

  ${mq[1]} {
    font-size: 6rem;
  }

  ${mq[0]} {
    font-size: 3rem;
    line-height: 1;
    letter-spacing: -3px;
    margin-left: 0;
    margin-right: auto;
  }
`;

const Title2 = styled(Title)`
  margin-left: auto;
  margin-right: 10rem;
`;

const Subheading = styled.p`
  z-index: 4;
  margin-top: 3rem;
  font-size: 1.2rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.SpaceGrotesk};
  font-weight: 600;
  text-align: center;

  ${mq[3]} {
    font-size: 1rem;
  }

  ${mq[2]} {
    font-size: 1rem;
  }

  ${mq[1]} {
    font-size: 6rem;
  }

  ${mq[0]} {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    text-align: left;
    margin-bottom: 5rem;
  }
`;

const Hero = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { duration: 1 } });

      if (window.innerWidth < 768) {
        gsap.to([".title, .title2, .subheading"], {
          // opacity: 0,
          color: "transparent",
          scrollTrigger: {
            trigger: ".title",
            start: "center 30%",
            end: "bottom top",
            scrub: 1,
            markers: true,
            pin: ".backgroundCircle, .title, title2",
            toggleActions: "restart pause reverse play",
          },
        });
      } else {
        gsap.from(".title div", {
          y: 150,
          stagger: 0.07,
          duration: 0.8,
          ease: "sine",
        });

        gsap.from(".title2 div", {
          y: 150,
          stagger: 0.1,
          duration: 0.8,
          ease: "sine",
        });

        tl.from(".backgroundCircle", {
          opacity: 0,
          y: 0,
          stagger: 0.5,
          ease: "sine",
          delay: 1,
        });

        tl.from(
          ".subheading",
          {
            opacity: 0,
            y: 50,
            stagger: 0.5,
            ease: "sine",
          },
          "<"
        );

        gsap.to([".title, .title2, .subheading"], {
          // opacity: 0,
          color: "transparent",
          scrollTrigger: {
            trigger: ".title",
            start: "center 30%",
            end: "bottom top",
            scrub: 1,
            markers: true,
            pin: ".backgroundCircle",
            toggleActions: "restart pause reverse play",
          },
        });
      }
    },
    { dependencies: [], scope: container }
  );

  return (
    <StyledSection ref={container}>
      <Background className="backgroundCircle" />
      <Spacer></Spacer>
      <Title className="title">
        <div>H</div>
        <div>i</div>
        <span> </span>
        <div>t</div>
        <div>h</div>
        <div>e</div>
        <div>r</div>
        <div>e</div>
        <div>,</div>
        <span> </span>
        <div>I</div>
        <div>&apos;</div>
        <div>m</div>
      </Title>
      <Title2 className="title2">
        <div>R</div>
        <div>i</div>
        <div>z</div>
        <div>w</div>
        <div>a</div>
        <div>n</div>
        <span> </span>
        <div>U</div>
        <div>l</div>
        <span> </span>
        <div>H</div>
        <div>a</div>
        <div>q</div>
      </Title2>
      <Subheading className="subheading">
        A freelance front-end developer and web designer elevating digital
        <br />
        experiences with code and design prowess.
      </Subheading>
    </StyledSection>
  );
};

export default Hero;
