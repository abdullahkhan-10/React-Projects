import Navbar from "./Navbar"
import { albumsData, songsData } from "../assets/assets"
import Albums from "./Albums"
import Songs from "./Songs"

const Home = () => {
  return (
    <>
      <Navbar/>

      {/* Albums data  */}
      <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
          <div className="flex overflow-auto">
            {
                albumsData.map( (item, index) =>(
                    <Albums key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
                ))
            }
          </div>
      </div>

      {/* songs data  */}
      <div className="mb-4">
        <h1 className="my-4 font-bold text-2xl">Today Biggest hits</h1>
        <div className="flex overflow-auto">
          {
            songsData.map( (song, index) =>(
              <Songs key={index} name={song.name} image={song.image} desc={song.desc} id={song.id}/>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default Home