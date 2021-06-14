import styled from "styled-components";
import portrait from "../../assets/images/gabriel-garcia-portrait.png";

const AboutBox = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  margin: 10px 0;
  font-size: 32px;
`;

const Picture = styled.img`
  max-width: 200px;
  filter: hue-rotate(36deg);
`;

const About = () => {
  return (
    <AboutBox>
      <Picture src={portrait} alt="Gabriel García Portrait" />
      <Title>About me:</Title>
      Hi everyone! I’m a passionate about cars and automotive design in general.
      Since I was a child I have been attracted by cars, trucks, buses, etc. I
      like their shapes, the beauty of many models from so many regions of the
      world and I always liked to draw them. I started some years ago to draw
      them digitally, using a simple program, Paint, which is the one I still
      use today. It started as a simple hobby and little by little has been
      transformed into something more elaborate, lately I have even received
      orders from enthusiasts who wanted to see their cars captured in a digital
      drawing and the result has been amazing. Now I want to share some of my
      work with you.
    </AboutBox>
  );
};

export default About;
