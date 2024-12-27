import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import AddMovie from "./components/AddMovie"
import Details from "./components/Details"

import Login from "./components/Login"
import { createContext, useState } from "react"

const appState = createContext()

const App = () => {
  const [login, setLogin] = useState(false)
  const [userName, setUserName] = useState("")

  return (
    <appState.Provider value={{login, setLogin, userName, setUserName}}>
      <div className="app relative">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/add-movie" element={<AddMovie/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </appState.Provider>
  )
}

export default App
export {appState}