import React, { Component } from "react";

import Header from "./components/layout/Header";
import BlueMoon from "./components/layout/BlueMoon";

import "./App.css";
import AddTodo from "./components/AddTodo";
import Toggle from "./components/Toggle";
import Todos from "./components/Todos";

//임시로 아이디 생성
// import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "임시: 프로그라피 지원하기",
        completed: true
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
  };

  //Add Todo
  addTodo = title => {
    // const todo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // };
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <React.Fragment>
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Toggle>
              <div className="todoListDIv">
                <Todos todos={this.state.todos} />
              </div>
            </Toggle>
            <BlueMoon />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default App;
