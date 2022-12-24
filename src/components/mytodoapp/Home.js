import React,{useState} from 'react'
import Todos from './Todos';
import './style.css';
import NewTodo from './NewTodo';
import { v4 as uuidv4 } from 'uuid';


const Home = () => {
    const [todos,setTodos] = useState([]);
    const handleAddTodo = (todo) =>{
       setTodos((prevTodo) =>{
        return[...prevTodo,{id : uuidv4(),todo}];
        
       })

    }
    const handleRemoveTodo = (id) =>{
       // const removeFilter = todos.filter((todo) => todo.id != id)
        setTodos((prevTodos)=>{
            const removeFilter = todos.filter((todo) => todo.id != id);
            return removeFilter;
        })

    }
    const handleUpdate = () =>{
        
    }
 
  return (
    <div className='body'>
    <h1>Todo App</h1>
    <NewTodo onAddtodo = {handleAddTodo}/>
    <Todos todos = {todos} removeTodo={handleRemoveTodo} updateTodo= {handleUpdate}/>
      
    </div>
  )
}

export default Home
