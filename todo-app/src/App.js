import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/layout/Header";
import BlueMoon from "./components/layout/BlueMoon";

import AddTodo from "./components/AddTodo";
import Toggle from "./components/Toggle";
import Todos from "./components/Todos";

import "./App.css";

const App = () => {
  const [state, setState] = useState({
    todos: []
  });

  const url =
    "https://killsanghyuck.github.io/prography_5th_front/todoDummy.json";

  // Add Todo
  const addTodo = title => {
    axios
      .post(url, {
        title,
        status: "todo"
      })
      .then(res => setState({ todos: [...state.todos, res.data.body] }));
  };

  // API 불러오기
  const getData = () => {
    axios.get(url).then(res => setState({ todos: res.data.body }));
  };
  useEffect(() => {
    getData();
  }, []);

  // Delete Todo
  const delTodo = id => {
    axios.delete(url).then(res =>
      setState({
        todos: [...state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  // 취소선
  const markComplete = id => {
    setState({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          if (todo.status === "todo") {
            todo.status = "complete";
          } else {
            todo.status = "todo";
          }
        }
        return todo;
      })
    });
  };

  return (
    <div className="App">
      <div className="container">
        <React.Fragment>
          <Header />
          <AddTodo addTodo={addTodo} />
          <Toggle>
            <div className="todoListDIv">
              <Todos
                todos={state.todos}
                markComplete={markComplete}
                delTodo={delTodo}
              />
            </div>
          </Toggle>
          <BlueMoon />
        </React.Fragment>
      </div>
    </div>
  );
};

export default App;
