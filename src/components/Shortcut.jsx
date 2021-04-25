import React from "react";
import styled from "styled-components";

const ShortcutBox = styled.div`
  background-color: white;
  width: 150px;
`;

const Shortcut = () => {
  return (
    <ShortcutBox>
      <div>img</div>
      <div>name </div>
    </ShortcutBox>
  );
};

export default Shortcut;
