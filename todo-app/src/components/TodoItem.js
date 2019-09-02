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

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.lineThroughStyle()}>
        <p>
          <span onClick={this.props.markComplete.bind(this, id)}>{title}</span>
          <button style={xBtnStyle}> x </button>
        </p>
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
