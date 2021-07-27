import React, { Component } from "react";

class ThemeButton extends Component {
  render() {
    return <button {...this.props} className="btn" />;
  }
}

export default ThemeButton;
