import React, { useState } from "react";
import styled from "styled-components";
import Window from "../components/Window";
import aboutIcon from "../assets/images/icon-about.png";
import workIcon from "../assets/images/icon-work.png";
import contactIcon from "../assets/images/icon-contact.png";
import videoIcon from "../assets/images/icon-video.png";

const ShortcutBox = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const ShortcutName = styled.span`
  background-color: white;
  color: black;
  text-align: center;
  font-size: 0.8rem;
  padding: 0 4px;
`;

const Shortcut = ({ name, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <Window closeWindow={() => setIsOpen(false)} id={id} name={name} />
      ) : null}
      <ShortcutBox onDoubleClick={() => setIsOpen(true)}>
        <Icon
          src={
            id === "about"
              ? aboutIcon
              : id === "work"
              ? workIcon
              : id === "video"
              ? videoIcon
              : (id = "contact" ? contactIcon : null)
          }
        />
        <ShortcutName>{name}</ShortcutName>
      </ShortcutBox>
    </>
  );
};

export default Shortcut;
