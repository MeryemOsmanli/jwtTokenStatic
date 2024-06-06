import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div>
         {/* <Link to="admin">admin</Link>--- */}
         <Link to="admin/adminadd">adminadd</Link>---
         <Link to="/">home</Link>

    </div>
  )
}

export default AdminNavbar