import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const LOCAL_STORAGE_KEY = "react-todo-list-todos"

function App() {

    const [todos,setTodo] = useState([]);
  
      useEffect(()=>{
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storageTodos){
          setTodo(storageTodos)
        }
      },[])


      useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
      },[todos]);


      function addTodo(todo) {
        setTodo([todo,...todos])
      }

      function toggleComplete(id){
          setTodo(
            todos.map(todo=>{
              if(todo.id===id){
                return {
                  ...todo,
                  completed: !todo.completed
                };
              }
              return todo
            })
          )
      }

      function removeTodo(id){
        setTodo(todos.filter(todo=>todo.id !==id))
      }

  return (
    <div className="App">
      <header className="App-header">
        <p>Add Todo</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete}  removeTodo={removeTodo}/>
      </header>
    </div>
  );
}

export default App;
