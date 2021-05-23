import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DateTime } from "luxon";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    li {
      margin: 4px 10px;
    }
  }
`;

const FullScreenButton = styled.li`
  cursor: pointer;
`;

const Header = ({ handle }) => {
  // Date and time display options
  const dateTimePreset = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "short",
    month: "short",
    day: "2-digit",
  };

  const [date, setDate] = useState(
    DateTime.now().toLocaleString(dateTimePreset)
  );

  // Update Time info
  useEffect(() => {
    setInterval(
      () => setDate(DateTime.now().toLocaleString(dateTimePreset)),
      1000
    );
  });

  return (
    <HeaderContainer>
      <ul>
        <li>Welcome to my portfolio!</li>
        <li>About</li>
        <li>Themes</li>
      </ul>
      <ul>
        {handle.active ? (
          <FullScreenButton onClick={handle.exit}>
            Exit Fullscreen
          </FullScreenButton>
        ) : (
          <FullScreenButton onClick={handle.enter}>Fullscreen</FullScreenButton>
        )}

        <li>{date}</li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
