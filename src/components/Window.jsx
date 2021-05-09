import styled from "styled-components";
import Draggable from "react-draggable";
import About from "./variations/About";
import Contact from "./variations/Contact";
import Work from "./variations/Work";

const WindowBox = styled.div`
  position: absolute;
  align-self: center;
  top: 20%;
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

const Content = styled.div``;

const Close = styled.div`
  cursor: pointer;
  border: 1px solid #f8dddd;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Window = ({ id, name, closeWindow }) => {
  return (
    <Draggable bounds="parent" handle=".draghandle">
      <WindowBox>
        <TopBar className="draghandle">
          <div>{name}</div>
          <Close onClick={closeWindow}>X</Close>
        </TopBar>
        <Content>
          {id === "about" ? (
            <About />
          ) : id === "contact" ? (
            <Contact />
          ) : id === "work" ? (
            <Work />
          ) : null}
        </Content>
      </WindowBox>
    </Draggable>
  );
};

export default Window;
