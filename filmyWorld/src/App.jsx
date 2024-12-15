import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </div>
  )
}

export default App