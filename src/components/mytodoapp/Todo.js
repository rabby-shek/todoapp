import React from 'react'
import './style.css';

const Todo = (props) => {
    const {title,des} = props.todo;
    const {id} = props;
    const handleDelete = (id) =>{
        props.onRemove(id);

    }
    const handleUpdate = () =>{

    }
  return (
    <article className='todo'>
    <div>
    <h3>{title}</h3>
      <p>{des}</p>

    </div>
    <div>
        <button onClick={()=>{handleDelete(id)}}>Delete</button>
    </div>
    
    
    </article>
  )
}

export default Todo
