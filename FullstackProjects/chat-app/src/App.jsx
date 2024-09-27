
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Chat from "./pages/chat/Chat"
import Profile from "./pages/Profile/Profile"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth } from './config/configuration'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const navigate = useNavigate()

  useEffect( () =>{
    onAuthStateChanged(auth, async(user) =>{
      if (user) {
        // if login, navigate the user to chat page
        navigate('/chat')

      }else{
        // if logout, navigate the user to home page which is login page.
        navigate('/')
      }
    })
  },[])
  
  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='chat' element={<Chat/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
