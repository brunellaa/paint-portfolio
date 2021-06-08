import { createGlobalStyle, css } from "styled-components";
import backgroundImage from "../assets/images/pixel-pattern-2.jpg";

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
    text-shadow: 1px 1px 0px #f0f, -1px -1px 0 #0ff;
  }
  body {
    margin: 0;
    font-family: "VT323", monospace;
    /* background-image: url(${backgroundImage}); */
  }
  a {
    text-decoration: none;
    color: black;
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
