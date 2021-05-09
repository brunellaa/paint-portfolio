import React, { useState } from "react";
import styled from "styled-components";
import Window from "../components/Window";

const ShortcutBox = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  background-color: black;
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
        <Icon />
        <ShortcutName>{name}</ShortcutName>
      </ShortcutBox>
    </>
  );
};

export default Shortcut;
