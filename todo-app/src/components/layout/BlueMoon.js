import React from "react";

function BlueMoon() {
  return <div style={blueMoonStyle}></div>;
}

const blueMoonStyle = {
  display: "block",
  position: "fixed",
  top: "32.3rem",
  width: "60%",
  height: "21rem",
  margin: "0 auto",
  backgroundImage: "url('/blueMoon.png')",
  //   이미지를 public에 넣어야함! 다른 폴더를 만드니 적용 안 됨.
  backgroundSize: "100% 21rem",
  backgroundPosition: "center",
  alt: "blueMoon",
  zIndex: "-1"
};

export default BlueMoon;
