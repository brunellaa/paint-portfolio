import React from "react";
import styled from "styled-components";
import Shortcut from "../components/Shortcut";
import Wallpaper from "../components/Wallpaper";

const DesktopArea = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: transparent;
`;

const Desktop = () => {
  return (
    <>
      <DesktopArea>
        <Shortcut id="about" name="About.txt" />
        <Shortcut id="work" name="My Work" />
        <Shortcut id="video" name="Video Player" />
        <Shortcut id="contact" name="Contact me" />
        <Wallpaper />
      </DesktopArea>
    </>
  );
};

export default Desktop;
