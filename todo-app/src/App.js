import React, { useState } from "react";
// useState, useEffect

import Header from "./components/layout/Header";
import BlueMoon from "./components/layout/BlueMoon";

import AddTodo from "./components/AddTodo";
import Toggle from "./components/Toggle";
import Todos from "./components/Todos";

import "./App.css";

// 사용할 API 주소:
// https://killsanghyuck.github.io/prography_5th_front/todoDummy.json

const App = props => {
  const [state, setState] = useState({
    todos: [
      {
        id: 1,
        title: "임시: 프로그라피 지원하기",
        completed: false
      },
      {
        id: 2,
        title: "임시: 과제 준비하기",
        completed: false
      },
      {
        id: 3,
        title: "임시: 프로그라피 친구들한테 알려주기",
        completed: false
      },
      {
        id: 4,
        title: "임시: 사랑해요 프로그라피",
        completed: false
      }
    ]
  });

  // Add Todo
  const addTodo = title => {
    // const todo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // };
  };

  // 취소선
  const markComplete = id => {
    setState({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
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
              <Todos todos={state.todos} markComplete={markComplete} />
            </div>
          </Toggle>
          <BlueMoon />
        </React.Fragment>
      </div>
    </div>
  );
};

export default App;
