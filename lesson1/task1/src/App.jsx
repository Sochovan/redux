import React, { Component } from "react";
import ThemeButton from "./ThemeButton.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <ThemeButton>Dynamic Theme</ThemeButton>
        <ThemeButton>Default Theme</ThemeButton>
      </div>
    );
  }
}

export default App;
