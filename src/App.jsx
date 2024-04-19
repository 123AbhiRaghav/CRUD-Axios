import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Create from "./Components/Create"
import Edit from "./Components/Edit"
import DashBoard from "./Components/DashBoard"

export const API_URL = "https://jsonplaceholder.typicode.com/users"

function App() {
  return(
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/navbar" element={<Navbar />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/edit/:id" element={<Edit />}></Route>
      <Route path="/dashboard" element={<DashBoard />}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;