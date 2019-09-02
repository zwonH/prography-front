import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  lineThroughStyle = () => {
    return {
      marginBottom: "1.8rem",
      fontFamily: "Noto Sans KR, sansSerif",
      fontSize: "0.84rem",
      lineHeight: "1rem",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      textAlign: "left",
      cursor: "pointer"
    };
  };

  flagStyle = () => {
    return {
      position: "relative",
      top: "0.3rem",
      width: "1.1rem",
      height: "1.1rem",
      marginRight: "0.8rem",
      background: "transparent",
      backgroundImage: this.props.todo.completed
        ? "url('/flagWhite.png')"
        : "url('/flagBlack.png')",
      backgroundPosition: "top center",
      backgroundSize: "auto 100%",
      backgroundColor: "transparent",
      backgroundRepeat: "no-repeat",
      border: "none",
      lineHeight: "1rem",
      cursor: "pointer"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.lineThroughStyle()}>
        <ul>
          <li onClick={this.props.markComplete.bind(this, id)}>
            <button style={this.flagStyle()}> </button>
            {title}
            <button style={xBtnStyle}> x </button>
          </li>
        </ul>
      </div>
    );
  }
} //export class TodoItem ends here

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired
};

const xBtnStyle = {
  marginLeft: "0.5rem",
  background: "transparent",
  border: "none",
  color: "#D1C7AC",
  fontFamily: "Fredoka One, cursive",
  fontSize: "1rem",
  lineHeight: "1rem",
  cursor: "pointer"
};

export default TodoItem;
