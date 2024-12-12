import { useState } from "react"
import myAssets from "../assets/asset"

const Main = () => {

  const [data, setData] = useState([
    {
      name: "Fast and Furious",
      year: 2010,
      rating: 5,
      img: `${myAssets.fastAndFurious}`
    },
    {
      name: "Fast and Furious",
      year: 2010,
      rating: 5,
      img: `${myAssets.fastAndFurious}`
    },
    {
      name: "Fast and Furious",
      year: 2010,
      rating: 5,
      img: `${myAssets.fastAndFurious}`
    },
    {
      name: "Fast and Furious",
      year: 2010,
      rating: 5,
      img: `${myAssets.fastAndFurious}`
    },
    {
      name: "Fast and Furious",
      year: 2010,
      rating: 5,
      img: `${myAssets.fastAndFurious}`
    },
    {
      name: "Fast and Furious",
      year: 2010,
      rating: 5,
      img: `${myAssets.fastAndFurious}`
    },
    
  ])
  return (
    <div className="mt-16">
      {/* top  */}
      <div className="flex items-center justify-center flex-col mx-28">
        <h1 className="text-3xl font-bold my-4">Filmy world Premium Movies</h1>
        <p className="text-slate-400 w-3/4 text-center my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint, ipsum ut voluptates tempore inventore perferendis laborum et labore ullam ad cupiditate veritatis laudantium autem. Placeat corporis laborum velit dignissimos?</p>
      </div>

      {/* middle  */}
      <div className="flex items-center justify-between mx-8 mt-4">
        <h1 className="text-2xl">Our latest Movies</h1>
        <button className="bg-red-500 px-6 py-1 rounded hover:bg-red-700">Buy Now</button>
      </div>
      <hr className="mt-1 border-slate-400 h-1" />

      {/* bottom  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mx-2 my-4">
        {
          data.map( (element, index) =>(
            <div key={index} className="bg-gray-800 p-2 font-medium shadow-lg cursor-pointer rounded-md hover:translate-y-2 transition-all duration-500">
              <img src={element.img} className="w-full md:h-72 rounded-md" alt="" />
              
              <h1> <span className="text-gray-400">Name: </span> {element.name}</h1>

              <h1> <span className="text-gray-400">Rating: </span> {element.rating}</h1>
              <h1> <span className="text-gray-400">Year: </span> {element.year}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Main