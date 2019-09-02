import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
      />
    ));
  }
} //export class TodoItem ends here

Todos.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired
};

export default Todos;
