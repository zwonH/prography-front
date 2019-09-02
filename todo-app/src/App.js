import React, { Component } from "react";

import Header from "./components/layout/Header";
import BlueMoon from "./components/layout/BlueMoon";

import "./App.css";
import AddTodo from "./components/AddTodo";

//임시로 아이디 생성
// import uuid from "uuid";

class App extends Component {
  state = {
    todos: []
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
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <BlueMoon />
        </div>
      </div>
    );
  }
}

export default App;
