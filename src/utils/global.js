import { createGlobalStyle, css } from "styled-components";

const baseStyles = css`
  html {
    font-size: 20px;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  * {
    /* text-shadow: 1px 1px 0px #f0f, -1px -1px 0 #0ff; */
  }
  div {
    /* box-shadow: 1px 1px 0px #f0f, -1px -1px 0 #0ff; */
  }
  body {
    margin: 0;
    font-family: "VT323", monospace;
    background-color: black;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${baseStyles}
`;
