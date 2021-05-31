import styled from "styled-components";
import Draggable from "react-draggable";
import About from "./variations/About";
import Contact from "./variations/Contact";
import Work from "./variations/Work";
import { primary, neutral, shadow, border } from "../utils";

const WindowBox = styled.div`
  position: absolute;
  align-self: center;
  top: 20%;
  background-color: ${neutral[100]};
  width: 450px;
  height: 300px;
  min-width: 450px;
  min-height: 300px;
  border: ${border.default};
  box-shadow: ${shadow.default};
  /* hide scrollbar ff */
  scrollbar-width: none;
  /* hide scrollbar chrome*/
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;
  resize: both;
`;

const TopBar = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  cursor: grab;
  border-bottom: 2px solid ${neutral[100]};
  background-color: ${primary.default};
  color: white;
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
