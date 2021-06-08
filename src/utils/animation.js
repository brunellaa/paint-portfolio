import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const diagonalScroll = keyframes`
  0%,
  100% {
    left: -30%;
    top: -30%;
  }
  50% {
    left: 0;
    top: 0;
  }
`;

export const slide = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -400px 0;
  }
`;

export const toastFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  5% {
    opacity: 1;
    transform: translateY(0px);
  }
  95% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-4px);
  }
`;

// Intro animations
export const screenFlicker = keyframes`
  0% {
    opacity: 0.6;
  }
  20% {
    opacity: 0.3;
  }
  35% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  60% {
    opacity: 0.4;
  }
  80% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.6;
  }
`;

export const scanLines = keyframes`
  from {
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(255, 255, 255, 0.1) 51%
    );
    background-size: 100% 4px;
  }
  to {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 51%
    );
    background-size: 100% 4px;
  }
`;

// Intro: rgbText flicker
export const rgbText = keyframes`
  0% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6),
      1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 1px rgba(251, 0, 231, 0.8),
      0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8),
      0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
  }
  75% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6),
      1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 1px rgba(251, 0, 231, 0.8),
      0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8),
      0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
  }
  80% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6),
      1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 1px rgba(251, 0, 231, 0.8),
      0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8),
      0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
  }
  84% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6),
      1px -1px 8px rgba(255, 255, 235, 0.7), 5px 0 1px rgba(251, 0, 231, 0.8),
      0 5px 1px rgba(0, 233, 235, 0.8), -5px 0 1px rgba(0, 242, 14, 0.8),
      0 -5px 1px rgba(244, 45, 0, 0.8), 5px 0 1px rgba(59, 0, 226, 0.8);
  }
  88% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6),
      1px -1px 8px rgba(255, 255, 235, 0.7), -5px 0 1px rgba(251, 0, 231, 0.8),
      0 -5px 1px rgba(0, 233, 235, 0.8), 5px 0 1px rgba(0, 242, 14, 0.8),
      0 5px 1px rgba(244, 45, 0, 0.8), -5px 0 1px rgba(59, 0, 226, 0.8);
  }
  92% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6),
      1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 3px rgba(251, 0, 231, 0.8),
      0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8),
      0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
  }
  96% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6),
      1px -1px 8px rgba(255, 255, 235, 0.7), -5px 0 1px rgba(251, 0, 231, 0.8),
      0 5px 1px rgba(0, 233, 235, 0.8), 5px 0 1px rgba(0, 242, 14, 0.8),
      0 -5px 1px rgba(244, 45, 0, 0.8), 5px 0 1px rgba(59, 0, 226, 0.8);
  }
  100% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6),
      1px -1px 8px rgba(255, 255, 235, 0.7), 5px 0 1px rgba(251, 0, 231, 0.8),
      0 -5px 1px rgba(0, 233, 235, 0.8), -5px 0 1px rgba(0, 242, 14, 0.8),
      0 5px 1px rgba(244, 45, 0, 0.8), -5px 0 1px rgba(59, 0, 226, 0.8);
  }
`;

export const type = keyframes`
  0%,
  19% {
    opacity: 0;
  }
  20%,
  100% {
    opacity: 1;
  }
`;

export const noise = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  10% {
    background-position: -5% -10%;
  }
  20% {
    background-position: -15% 5%;
  }
  30% {
    background-position: 7% -25%;
  }
  40% {
    background-position: 20% 25%;
  }
  50% {
    background-position: -25% 10%;
  }
  60% {
    background-position: 15% 5%;
  }
  70% {
    background-position: 0 15%;
  }
  80% {
    background-position: 25% 35%;
  }
  90% {
    background-position: -10% 10%;
  }
`;
