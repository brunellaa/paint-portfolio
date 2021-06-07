import styled from "styled-components";
import Draggable from "react-draggable";
import About from "./variations/About";
import Contact from "./variations/Contact";
import Work from "./variations/Work";
import Player from "./variations/Player";
import { primary, neutral, shadow, border } from "../utils";

const WindowBox = styled.div`
  position: absolute;
  align-self: center;
  top: ${props =>
    props.id === "about"
      ? "200px"
      : props.id === "contact"
      ? "600px"
      : props.id === "work"
      ? "400px"
      : props.id === "video"
      ? "100px"
      : "20%"};
  right: ${props =>
    props.id === "about"
      ? "unset"
      : props.id === "contact"
      ? "200px"
      : props.id === "work"
      ? "unset"
      : props.id === "video"
      ? "100px"
      : "20%"};
  left: ${props =>
    props.id === "about"
      ? "400px"
      : props.id === "contact"
      ? "unset"
      : props.id === "work"
      ? "300px"
      : props.id === "video"
      ? "unset"
      : "20%"};
  background-color: ${neutral[100]};
  /* width: ${props => (props.id === "video" ? 595 + "px" : "450px")}; */
  /* height: ${props => (props.id === "video" ? 370 + "px" : "300px")}; */
  width: ${props =>
    props.id === "about"
      ? "350px"
      : props.id === "contact"
      ? "300px"
      : props.id === "work"
      ? "610px"
      : props.id === "video"
      ? "595px"
      : "450px%"};
  height: ${props =>
    props.id === "about"
      ? "400px"
      : props.id === "contact"
      ? "300px"
      : props.id === "work"
      ? "500px"
      : props.id === "video"
      ? "370px"
      : "300px"};
  /* min-width: 450px;
  min-height: 300px; */
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

const Content = styled.div`
  height: calc(100% - 33px);
`;

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
      <WindowBox id={id}>
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
          ) : id === "video" ? (
            <Player />
          ) : null}
        </Content>
      </WindowBox>
    </Draggable>
  );
};

export default Window;
