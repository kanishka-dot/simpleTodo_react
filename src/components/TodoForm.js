import React, { useState } from 'react'
<<<<<<< HEAD
import {v4 as uuid} from 'uuid'

function TodoForm({addTodo}){
        const[todo,setTodo] = useState({
            id:"",
            task:"",
            completed:false
        });

        function handleTaskInputChanges(e) {
            setTodo({...todo,task:e.target.value});
        }

        function handleSubmit(e){
            e.preventDefault();
            // if(todo.task.trim()){
                addTodo({...todo,id:uuid()});
                setTodo({...todo,task:""})
            // }
        }
=======
import uuid from 'uuid'

function TodoForm({addTodo}){
    const[todo,setTodo] = useState({
        id:"",
        task:"",
        completed:false
    });

function handleTaskInputChanges(e) {
    setTodo({...todo,task:e.target.value});
}

function handleSubmit(e){
    e.preventDefault();
    if(todo.task.trim()){
        addTodo({...todo,id:uuid.v4()});
        setTodo({...todo,task:""})
    }
}
>>>>>>> f3b21471d50eba52705750151fdad3ee590e74db


    return(
        <form onSubmit={handleSubmit}>
            <input 
            name="task"
            type="text"
            value={todo.task}
<<<<<<< HEAD
            onChange={handleTaskInputChanges}
            />
=======
            onChange={handleTaskInputChanges}/>
>>>>>>> f3b21471d50eba52705750151fdad3ee590e74db
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;