import React from 'react';

function Todo({todo}) {
    return(
        <div style={{display:"flex"}}>
            <input type="checkbox"/>
            <li
            style={{
<<<<<<< HEAD
                color:"white",
=======
                color="white",
>>>>>>> f3b21471d50eba52705750151fdad3ee590e74db
                textDecoration:todo.completed ? "line-through":null
            }}>{todo.task}</li>
            <button>X</button>
        </div>
    )
}

export default Todo;