import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todos = props => {
  return props.todos.map(todo => (
    <TodoItem key={todo.id} todo={todo} markComplete={props.markComplete} />
  ));
}; //export class TodoItem ends here

Todos.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired
};

export default Todos;
