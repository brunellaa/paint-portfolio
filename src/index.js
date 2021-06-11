import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./utils/global";
import Intro from "./components/effects/Intro";
import Layout from "./components/Layout";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Intro />
    <Layout />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
