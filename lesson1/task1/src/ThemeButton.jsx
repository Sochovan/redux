import React, { Component } from "react";
import { ThemeContext } from "./themes-context";

class ThemeButton extends Component {
  render() {
    console.log(this.context);
    return (
      <button
        {...this.props}
        className="btn"
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
      />
    );
  }
}

ThemeButton.contextType = ThemeContext;

export default ThemeButton;
