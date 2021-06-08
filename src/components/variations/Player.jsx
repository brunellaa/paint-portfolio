import React from "react";
import styled from "styled-components";

const PlayerBox = styled.iframe`
  width: 100%;
  height: 100%;
  .ytp-chrome-top {
    display: none;
  }
`;

const Player = () => {
  return (
    <PlayerBox
      src={
        "https://www.youtube.com/embed/oJnF5VxTO5g?" +
        "modestbranding=1" +
        "&autoplay=1" +
        "&loop=1" +
        "&showinfo=0" +
        "&controls=0" +
        "&rel=0&" +
        "&theme=light" +
        "fs=0"
      }
    ></PlayerBox>
  );
};

export default Player;
