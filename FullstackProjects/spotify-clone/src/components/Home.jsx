import Navbar from "./Navbar"
import { albumsData } from "../assets/assets"
import Albums from "./Albums"

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
      
    </>
  )
}

export default Home