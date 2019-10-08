import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'uno', isDone: false },
    { text: 'dos', isDone: false },
    { text: 'tres', isDone: false },
  ]);

  // create new task
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // delete ojo lo poso dentro y lo llamo para el estilo
  const doneTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const ToDo = ({ todo, index, completeTodo }) => {
    return (
      <div className="todo" style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
        {todo.text}

        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => deleteTodo(index)}>x</button>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <ToDo
            key={index}
            index={index}
            todo={todo}
            completeTodo={doneTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
