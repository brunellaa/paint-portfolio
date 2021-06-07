import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { rgbText } from "../utils";
import Typing from "react-typing-animation";

const IntroContainer = styled.div`
  position: fixed;
  z-index: 10;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  background-color: black;
`;

const TextLayer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  color: White;
  font-size: 1rem;
  position: absolute;
  will-change: text-shadow;
  animation: ${rgbText} 10s steps(9) 0s infinite alternate;
  pre {
    display: flex;
  }
`;

const Intro = () => {
  const [isVisible, setisVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisVisible(false);
    }, 9000);
  }, []);

  const delay = 500;

  return isVisible ? (
    <IntroContainer>
      <TextLayer>
        <Typing speed={1} hideCursor={false}>
          SYSTEM BOOTING
          <br />
          <Typing.Delay ms={delay} />
          Initializing USB controllers
          <Typing.Speed ms={200} />
          ...
          <Typing.Speed ms={1} />
          <Typing.Delay ms={delay} /> Done
          <br />
          <Typing.Delay ms={delay} />
          Loading visual interface
          <Typing.Speed ms={200} />
          ...
          <Typing.Speed ms={1} />
          <Typing.Delay ms={delay} /> Done
          <br />
          <Typing.Delay ms={delay} />
          Appliying Website version 2.0
          <br />
          <Typing.Delay ms={delay} />
          WELCOME!
        </Typing>
      </TextLayer>
    </IntroContainer>
  ) : null;
};

export default Intro;
