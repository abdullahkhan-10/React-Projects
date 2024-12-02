import {Routes, Route, useLocation} from "react-router-dom"
import Home from "./Home"
import DisplayAlbum from "./DisplayAlbum"
import { useEffect, useRef } from "react"
import { albumsData } from "../assets/assets"

const Display = () => {

  // to display background color 

  const displayRef = useRef()
  const location = useLocation()
  // console.log(location);

  const isAlbum = location.pathname.includes("album")
  // console.log(isAlbum);

  const albumId = isAlbum ? location.pathname.slice(-1) : "";  
  // console.log(albumId);

  const backgroundColor = albumsData[Number(albumId)].bgColor
  // console.log(backgroundColor);

  useEffect( () =>{
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient( ${backgroundColor}, #121212)`

    }else{
      displayRef.current.style.background = `#121212`
    }
  })
  
  
  
  return (
    // we will change the background color of (Display.jsx) component when click on any (album). 
    <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:ml-0">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/album/:id" element={<DisplayAlbum/>} />
        </Routes>
    </div>
  )
}

export default Display