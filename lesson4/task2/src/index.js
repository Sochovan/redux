import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App.jsx";
import store from "./store.js";

ReactDOM.render(<App />, document.querySelector("#root"));

store.subscribe(() => {
  console.log(store.getState());
});
