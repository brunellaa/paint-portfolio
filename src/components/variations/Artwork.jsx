import styled from "styled-components";
import Draggable from "react-draggable";
import { WindowBox, TopBar, Close, Content } from "../Window";

const ArtworkBox = styled(WindowBox)`
  height: min-content;
  width: min-content;
  display: flex;
  flex-direction: column;
  top: 120px;
  left: 120px;
  resize: none;
  z-index: 6;
`;

const CarImage = styled.img`
  max-width: 1200px;
`;

const Artwork = ({ id, name, currentArtwork, changeArtwork }) => {
  return currentArtwork === id ? (
    <Draggable bounds="parent" handle=".draghandle">
      <ArtworkBox model={id}>
        <TopBar className="draghandle">
          <div>{name}</div>
          <Close onClick={() => changeArtwork("")}>X</Close>
        </TopBar>
        <Content>
          <CarImage src={require(`../../assets/artwork/${name}.jpg`).default} />
        </Content>
      </ArtworkBox>
    </Draggable>
  ) : null;
};

export default Artwork;
