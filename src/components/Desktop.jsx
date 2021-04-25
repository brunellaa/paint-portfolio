import React from "react";
import styled from "styled-components";
import Window from "../components/Window";
import Shortcut from "../components/Shortcut";

const DesktopArea = styled.div`
  background-color: lightgray;
  height: 95vh;
`;

const Desktop = () => {
  return (
    <DesktopArea>
      <Window />
      <Window />
      <Shortcut />
    </DesktopArea>
  );
};

export default Desktop;
