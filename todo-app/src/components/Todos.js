import React, { Component } from "react";
import Todoitem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => <Todoitem key={todo.id} todo={todo} />);
  }
} //export class TodoItem ends here

Todos.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todos;
