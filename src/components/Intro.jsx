import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { screenFlicker, scanLines, rgbText } from "../utils";
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

const EffectLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  opacity: 0.6;
  animation: ${screenFlicker} 3s linear infinite;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(255, 255, 255, 0.1) 51%
    );
    background-size: 100% 4px;
    animation: ${scanLines} 0.5s linear infinite;
  }
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
    }, 1000);
  }, []);

  const delay = 500;

  return isVisible ? (
    <IntroContainer>
      {/* <EffectLayer /> */}
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
