import { BrowserRouter, Route, Routes } from "react-router"
import { Error404 } from "./pages/Error404"
function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/"></Route>
      <Route path="/add"></Route>
      <Route path="/users"></Route>
      <Route path="/user/:id"></Route>
      <Route path="*" element={<Error404></Error404>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
