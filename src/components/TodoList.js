<<<<<<< HEAD

import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}


=======
import React from 'react'
import Todo from './Todo'

function TodoList({todos}) {
    return(
        <ul>
            {todos.map(todo=>(
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList;
>>>>>>> f3b21471d50eba52705750151fdad3ee590e74db
