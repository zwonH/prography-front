import React from "react";

function BlueMoon() {
  return <div style={blueMoonStyle}></div>;
}

const blueMoonStyle = {
  width: "100%",
  //   850px
  height: "21rem",
  margin: "0 auto",
  position: "relative",
  top: "25.3rem",
  backgroundImage: "url('/blueMoon.png')",
  alt: "blueMoon",
  //   이미지를 public에 넣어야함! 다른 폴더를 만드니 적용 안 됨.
  backgroundSize: "100% 21rem",
  backgroundPosition: "center"
};

export default BlueMoon;
