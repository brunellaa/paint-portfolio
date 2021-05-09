import React from "react";
import styled from "styled-components";

import Shortcut from "../components/Shortcut";
import BackgroundImg from "../assets/images/pixel-pattern.png";

const DesktopArea = styled.div`
  background-color: darkslateblue;
  height: 95vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* background-image: url(${BackgroundImg});
  background-size: 600px; */
`;

const Desktop = () => {
  return (
    <DesktopArea>
      <Shortcut id="about" name="About.txt" />
      <Shortcut id="work" name="My Work" />
      <Shortcut id="contact" name="Contact me" />
    </DesktopArea>
  );
};

export default Desktop;
