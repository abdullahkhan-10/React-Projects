import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import DisplayAlbum from "./DisplayAlbum"

const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:ml-0">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/album/:id" element={<DisplayAlbum/>} />
        </Routes>
    </div>
  )
}

export default Display