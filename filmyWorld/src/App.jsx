import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import AddMovie from "./components/AddMovie"
import Details from "./components/Details"

const App = () => {
  return (
    <div className="app relative">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/add-movie" element={<AddMovie/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App