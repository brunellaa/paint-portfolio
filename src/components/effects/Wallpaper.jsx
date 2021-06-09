import React from "react";
import styled from "styled-components";
import { slide, gradient } from "../../utils";
import PixelBg from "../../assets/images/pixel-pattern-2.jpg";

const WallpaperBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;

  background: gray url(${PixelBg}) repeat 0 0;
  margin: 0;
  text-align: center;
  box-sizing: border-box;
  animation: ${slide} 20s linear infinite;
`;

const BgColor = styled.div`
  background: ${gradient.background};
  position: absolute;
  width: 100%;
  height: 100%;
`;
const BgTexture = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Wallpaper = () => {
  return (
    <WallpaperBox>
      <BgColor />
      <BgTexture />
    </WallpaperBox>
  );
};

export default Wallpaper;
