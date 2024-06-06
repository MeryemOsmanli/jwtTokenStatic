import React from 'react'
import UserNavbar from './UserNavbar'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div>
        <UserNavbar/>
        <Outlet/>
    </div>
  )
}

export default UserLayout