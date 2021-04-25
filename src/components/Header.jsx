import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";
import { DateTime } from "luxon";

const HeaderContainer = styled.header`
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

const Header = () => {
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
        <li>Fullscreen</li>
        <li>{date}</li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
