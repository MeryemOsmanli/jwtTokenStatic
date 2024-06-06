import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import UserLayout from "./layout/UserLayout";
import Home from "./pages/user/Home";
import About from "./pages/user/About";
import AdminLayout from "./layout/AdminLayout";
import AdminHome from "./pages/admin/AdminHome";
import AdminAdd from "./pages/admin/AdminAdd";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="admin/adminadd" element={<AdminAdd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
