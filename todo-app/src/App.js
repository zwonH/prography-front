import React, { Component } from "react";

import Header from "./components/layout/Header";

import "./App.css";
import BlueMoon from "./components/layout/BlueMoon";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <BlueMoon />
        </div>
      </div>
    );
  }
}

export default App;
