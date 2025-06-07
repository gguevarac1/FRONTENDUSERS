import { BrowserRouter, Route, Routes } from "react-router"
import { Nav } from "./components/Nav"

import { Error404 } from "./pages/Error404"
import { Home } from "./pages/Home"
import { Users } from "./pages/Users"
import { Register } from "./pages/Register"
import { UserDetail } from "./pages/UserDetail";

function App() {
  return(
  <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/create"element={<Register></Register>}> </Route>
      <Route path="/users" element={<Users></Users>}></Route>
      <Route path="/user/:id" element={<UserDetail></UserDetail> }></Route>
      <Route path="*" element={<Error404></Error404>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
