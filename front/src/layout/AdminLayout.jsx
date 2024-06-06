import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div>
        <AdminNavbar/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout