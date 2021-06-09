import React from "react";
import styled from "styled-components";
import { screenFlicker, scanLines } from "../../utils";

const EffectsContainer = styled.div`
  pointer-events: none;
`;

const NoiserBox = styled.div`
  position: fixed;
  z-index: 10;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  animation: ${scanLines} 0.09s linear infinite;
  z-index: 20;
`;
const FlickerBox = styled.div`
  position: fixed;
  z-index: 10;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.1);
  animation: ${screenFlicker} 2s linear infinite;
  z-index: 20;
  opacity: 0.1;
`;

const Noiser = () => {
  return (
    <EffectsContainer>
      <NoiserBox />
      <FlickerBox />
    </EffectsContainer>
  );
};

export default Noiser;
