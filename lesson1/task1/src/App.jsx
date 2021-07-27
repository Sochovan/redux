import React, { Component } from "react";
import ThemeButton from "./ThemeButton.jsx";
import { themes, ThemeContext } from "./themes-context";

class App extends Component {
  state = {
    theme: themes.light,
  };

  toggleTheme = () => {
    const newTheme =
      this.state.theme === themes.light ? themes.dark : themes.light;

    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeButton onClick={this.toggleTheme}>Dynamic Theme</ThemeButton>
        </ThemeContext.Provider>
        <ThemeButton onClick={this.toggleTheme}>Default Theme</ThemeButton>
      </div>
    );
  }
}

export default App;
