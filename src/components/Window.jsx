import { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

const WindowBox = styled.div`
  background-color: white;
  width: 450px;
  height: 300px;
  border: 1px solid black;
  box-shadow: inset 1px 1px 0 0 #fff, 5px 5px 0 rgba(0, 0, 0, 0.2);
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  padding: 4px 6px;
  cursor: grab;
  border-bottom: 1px solid black;
`;

const Close = styled.div`
  cursor: pointer;
  border: 1px solid black;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Window = () => {
  const [isOpen, setIsOpen] = useState(true);
  if (isOpen) {
    return (
      <Draggable bounds="parent" handle=".draghandle">
        <WindowBox>
          <TopBar className="draghandle">
            <div>File name</div>
            <Close onClick={() => setIsOpen(false)}>X</Close>
          </TopBar>
        </WindowBox>
      </Draggable>
    );
  }
  return null;
};

export default Window;
