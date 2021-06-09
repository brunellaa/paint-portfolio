import React, { useState } from "react";
import styled from "styled-components";
import Shortcut from "../components/Shortcut";
import Wallpaper from "./effects/Wallpaper";
import Artwork from "./variations/Artwork";

const DesktopArea = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: transparent;
  :nth-child(3) {
    order: 1;
  }
  :nth-child(4) {
    order: 2;
  }
  :nth-child(1) {
    order: 3;
  }
  :nth-child(2) {
    order: 4;
  }
`;

const carArtworkData = [
  { name: "1978 CHRYSLER LEBARON COUPÉ 03", id: "car01" },
  { name: "Chevrolet Caprice Classic Sedan '1980 03", id: "car02" },
  { name: "FERRARI TESTAROSSA 05", id: "car03" },
  { name: "FIAT 132 2000 04", id: "car04" },
  { name: "FORD LTD LANDAU 1979 02", id: "car05" },
  { name: "FORD SIERRA XR4i ES VE-SPEC 1986 03", id: "car06" },
  { name: "LAMBORGHINI COUNTACH 5000 QV 1985 05", id: "car07" },
  { name: "Land Rover Range Rover Vogue 1991 02", id: "car08" },
  { name: "PORSCHE 959 05", id: "car09" },
  { name: "Renault 18 GTS Sedan '1978-81 02", id: "car10" },
  { name: "Renault Fuego GTX 02", id: "car11" },
  { name: "RENAULT MÉGANE HATCHBACK '2002 02", id: "car12" },
];

const Desktop = () => {
  const [currentArtwork, setCurrentArtwork] = useState("car02");

  const changeArtwork = id => {
    setCurrentArtwork(id);
  };

  return (
    <>
      <DesktopArea>
        <Shortcut id="about" name="About.txt" />
        <Shortcut changeArtwork={changeArtwork} id="work" name="My Work" />
        <Shortcut id="video" name="Video Player" />
        <Shortcut id="contact" name="Contact me" />
        {carArtworkData.map(props => {
          return (
            <Artwork
              {...props}
              changeArtwork={changeArtwork}
              currentArtwork={currentArtwork}
            />
          );
        })}
        <Wallpaper />
      </DesktopArea>
    </>
  );
};

export default Desktop;
