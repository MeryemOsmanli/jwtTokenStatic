import React from 'react'
import { Link } from 'react-router-dom'

function UserNavbar() {
  return (
    <div>
           <Link to="/">Home</Link>---
         <Link to="about">About</Link>---
         <Link to="admin">admin</Link>

    </div>
  )
}

export default UserNavbar