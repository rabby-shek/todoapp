import React,{useState} from 'react'

const NewTodo = (props) => {
    const [todo ,setTodo] = useState({title : "",des : ""});
    const {title,des} = todo;

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return{
                ...oldTodo, [name] : event.target.value
            }
        })

    }

    const handleSubmit = (event) =>{
       event.preventDefault();
       props.onAddtodo(todo);
       setTodo({
        title : "",
        des : ""
       })
    }
  return (
    <form className='form' onSubmit={handleSubmit}>
     <div className='formfield'>
        <label htmlFor="title">Title </label>
        <input type="text" id='title' name='title' value={title} onChange={handleChange}/>
     </div>
     <div className='formfield'>
        <label htmlFor="des">Description </label>
        <textarea type="text" id='des' name='des' value={des} onChange={handleChange}/>
     </div>
     <button>Add New</button>
    </form>
  )
}

export default NewTodo
