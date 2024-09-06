import React from 'react'
import UseLocalStorage from './UseLocalStorage'
import "./style.css"

const LightDark = () => {
    const [theme,setTheme] = UseLocalStorage('myTheme', 'dark')

    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light")
    }

    console.log(theme);
    
  return (
    <div className='light-dark-mode' data-theme = {theme}>
        <div className="container" >
            <p>Light and Dark theme!</p>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    </div>
  )
}

export default LightDark