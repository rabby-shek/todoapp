import React, { useState } from 'react'
import Add from './Add';


const TodoList = () => {
  const [todos, setTodo] = useState([]);
  const handleTodo = (todo) =>{
    console.log(todo);
  }
 
  return (
  
        <section className='list'>
        <Add onAddTodo={handleTodo}/>




 
    </section>

  

  )
}

export default TodoList
