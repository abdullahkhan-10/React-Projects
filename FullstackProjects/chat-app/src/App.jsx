
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Chat from "./pages/chat/Chat"
import Profile from "./pages/Profile/Profile"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='chat' element={<Chat/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
