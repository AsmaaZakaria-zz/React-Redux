import React from "react";

import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
  // contextType is a special name
  // static contextType = LanguageContext;

  renderButton(value) {
    return (
      <button className={`ui button ${value}`}>
        <LanguageContext.Consumer>
          {(value) => value === "english" ? "Submit" : "Indienen"}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    // const text = this.context === "english" ? "Submit" : "Indienen";
    return (
      <ColorContext.Consumer>
        {(value) => this.renderButton(value)}
      </ColorContext.Consumer>
    )
  }
}

export default Button;
