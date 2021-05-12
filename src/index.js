import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./utils/global";

import Intro from "./components/Intro";
import Header from "./components/Header";
import Desktop from "./components/Desktop";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Intro duration={5} />
    <Header />
    <Desktop />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
