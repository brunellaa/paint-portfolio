import React from "react";
import styled from "styled-components";
import Shortcut from "../components/Shortcut";

const DesktopArea = styled.div`
  background-color: darkslateblue;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
