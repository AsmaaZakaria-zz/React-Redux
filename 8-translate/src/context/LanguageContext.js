// we put it in a separate file so we can import it
// only in the component that we care about

import React from "react";

// we can create a default value by passing it directly into the create context call
const Context =  React.createContext('dutch');

export class LanguageStore extends React.Component {
  state = { language: "english" }

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.childern}
      </Context.Provider>
    )
  }
}

export default Context;
