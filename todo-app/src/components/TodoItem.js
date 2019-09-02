import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    return <div style={blueMoonStyle}></div>;
  }
}

const blueMoonStyle = {
  position: "relative",
  top: "11.7rem",
  width: "100%",
  height: "21rem",
  margin: "0 auto",
  backgroundImage: "url('/blueMoon.png')",
  //   이미지를 public에 넣어야함! 다른 폴더를 만드니 적용 안 됨.
  backgroundSize: "100% 21rem",
  backgroundPosition: "center",
  alt: "blueMoon"
};

export default TodoItem;
