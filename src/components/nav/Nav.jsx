import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div >
       <nav>
         <div className="navcontainer">
       <Link to='/' className='link'> <div className="navleft">Prince.Booking</div></Link> 
         <div className="navright">
            <button>Register</button>
            <button>Log In</button>
         </div>
         </div>
       </nav>
    </div>
  )
}

export default Nav