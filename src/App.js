import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import { v4 as uuid} from 'uuid'
import TodoList from './components/TodoList';

function App() {

    const [todos,setTodo] = useState([]);

      function addTodo(todo) {
        setTodo([todo,...todos])
      }

  return (
    <div className="App">
      <header className="App-header">
        <p>Add Todo</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
