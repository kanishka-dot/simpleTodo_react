import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
<<<<<<< HEAD
import { v4 as uuid} from 'uuid'
import TodoList from './components/TodoList';

function App() {

    const [todos,setTodo] = useState([]);

      function addTodo(todo) {
        setTodo([todo,...todos])
      }
=======

function App() {

const [todos,setTodo] = useState([]);

function addTodo(todo) {
  setTodo([todo,...todos])
}
>>>>>>> f3b21471d50eba52705750151fdad3ee590e74db

  return (
    <div className="App">
      <header className="App-header">
        <p>Add Todo</p>
        <TodoForm addTodo={addTodo} />
<<<<<<< HEAD
        <TodoList todos={todos} />
=======
>>>>>>> f3b21471d50eba52705750151fdad3ee590e74db
      </header>
    </div>
  );
}

export default App;
