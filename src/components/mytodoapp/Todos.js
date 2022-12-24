import React from 'react'
import Todo from './Todo';
import './style.css'
const Todos = (props) => {
    console.log(props.todos);
  return (
    <section className='todos'>
    {
        props.todos.map((todo) => <Todo todo = {todo.todo} key={todo.id} id={todo.id} onRemove={props.removeTodo}/>)
    }
      
    </section>
  )
}

export default Todos
