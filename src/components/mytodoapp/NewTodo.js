import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <>

    <Form  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name='title' value={title} onChange={handleChange} placeholder="Enter title" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3}  id='des' name='des' value={des} onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </>

    
  )
}

export default NewTodo
