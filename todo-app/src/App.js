import React, { useState } from "react";

import Header from "./components/layout/Header";
import BlueMoon from "./components/layout/BlueMoon";

import AddTodo from "./components/AddTodo";
import Toggle from "./components/Toggle";
import Todos from "./components/Todos";

import "./App.css";

// 사용할 API 주소:
// https://killsanghyuck.github.io/prography_5th_front/todoDummy.json

const App = () => {
  const [state, setState] = useState({
    todos: [
      {
        title: "임시: 프로그라피 지원하기",
        id: 1,
        status: "todo"
      },
      {
        title: "임시: 과제 준비하기",
        id: 2,
        status: "complete"
      }
    ]
  });

  // Add Todo
  const addTodo = title => {};

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

  // const fetchData = () => {
  //   fetch("https://killsanghyuck.github.io/prography_5th_front/todoDummy.json")
  //     .then(res => res.json())
  //     .then(json => {
  //       json.body.forEach;
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios(
  //       "https://killsanghyuck.github.io/prography_5th_front/todoDummy.json"
  //     );
  //     setState(res.data);
  //   };
  //   fetchData();
  // }, []);

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
