import React, { Component } from "react";

class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div style={toggleStyle}>
        <div onClick={this.toggle} style={astronautStyle}></div>
        {this.state.on && this.props.children}
        {!this.state.on && "Show me the missions"}
      </div>
    );
  }
}

const astronautStyle = {
  display: "block",
  width: "6rem",
  height: "6rem",
  margin: "5.7rem auto 1rem auto",
  padding: "0",
  backgroundImage: "url('/astronaut.png')",
  backgroundPosition: "top center",
  backgroundSize: "100% auto",
  backgroundColor: "transparent",
  backgroundRepeat: "no-repeat",
  border: "none",
  alt: "toggle",
  cursor: "pointer"
};

const toggleStyle = {
  textAlign: "center"
};

export default Toggle;
