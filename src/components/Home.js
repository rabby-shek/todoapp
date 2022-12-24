import React from 'react'
import TodoList from './TodoList';

const dummyTodos = [
  {
   id : 1,
   title : "todo title 1",
   des : "todo description 1"
  },
  {
    id : 2,
    title : "todo title 2",
    des : "todo description 2"
   }
];
const Home = () => {
  return (
    <>
    <div>
      {dummyTodos}
    </div>
   

    </>
    
  )
}

export default Home
