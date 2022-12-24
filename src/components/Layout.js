import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './home.css'

const Layout = () => {
  return (
    <>
     <nav >
        <ul>
          <li>
            <Link className='link' to="/">Home</Link>
          </li>
          <li>
            <Link className='link' to="/list">Your list</Link>
          </li>
          <li>
            <Link className='link' to="/add">AddNew</Link>
          </li>
        </ul>
      </nav>
      <div className='hi'>
      <Outlet  />

      </div>

      
      
    </>
  )
}

export default Layout
