import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  render() {
    const { id, title } = this.props.todo;
    return (
      <p style={todoListStyle}>
        {id} {title}
        <button> x </button>
      </p>
    );
  }
} //export class TodoItem ends here

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const todoListStyle = {
  fontFamily: "Noto Sans KR, sansSerif",
  fontSize: "0.84rem",
  marginBottom: "1.8rem"
};

export default TodoItem;
