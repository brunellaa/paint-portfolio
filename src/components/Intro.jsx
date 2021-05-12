import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { screenFlicker, scanLines, rgbText } from "../utils";

const IntroContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  background-color: black;
`;

const EffectLayer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 300;
  opacity: 0.6;
  will-change: opacity;
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
    will-change: background, background-size;
    animation: ${scanLines} 0.5s linear infinite;
  }
`;

const TextLayer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: White;
  font-size: 2rem;
  position: absolute;
  will-change: text-shadow;
  animation: ${rgbText} 2s steps(9) 0s infinite alternate;
  pre {
    display: flex;
  }
`;

const Intro = ({ duration }) => {
  const [isVisible, setisVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisVisible(false);
    }, duration * 1000);
  }, [duration]);

  return isVisible ? (
    <IntroContainer>
      <EffectLayer />
      <TextLayer>
        <span>Please wait</span>
        <span>Loading assets</span>
      </TextLayer>
    </IntroContainer>
  ) : null;
};

export default Intro;
