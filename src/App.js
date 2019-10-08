import React, { Component } from "react";

import "./App.css";
import ListTask from "./components/ListTask";

class App extends Component {
  state = {
    tasks: ["una tarea", "dos tareas"],
  };

  deleteTask = () => {};

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <input></input>
        <button></button>
        <ul>
          {tasks.map((task, index) => {
            return (
              <ListTask
                key={index}
                id={index}
                task={task}
                onDelete={this.deleteTask}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
