import React from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="component-app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
