import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import AddMovie from "./components/AddMovie"

const App = () => {
  return (
    <div className="app relative">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="add-movie" element={<AddMovie/>}/>
      </Routes>
    </div>
  )
}

export default App