import { useEffect, useState } from "react"
// import myAssets from "../assets/asset"
import ReactStars from 'react-stars'
import { ThreeDots } from  "react-loader-spinner"
import { getDocs } from "firebase/firestore"
import { moviesRef } from "../Firebase/firebase"
import { Link } from "react-router-dom"

const Main = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  // to get the data from firestore database and display on web when the component get rendered.
  // we will use useEffect 
  useEffect( () =>{
    async function getData(){
      setLoading(true)
      const mydata = await getDocs(moviesRef)
      // console.log(mydata);
      
      mydata.forEach( (doc) =>{
        setData( (prev) => [...prev, {...(doc.data()), id: doc.id}])
      })

      setLoading(false)      
    }
    getData();
  },[])

  return (
    <div className="mt-16 pb-12">
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
        { loading ? <div className="w-full flex justify-center items-center mx-[500px] h-96"><ThreeDots height={40} color="white"/></div> :
          data.map( (element, index) =>(
            <Link to={`/details/${element.id}`} key={index}>
              <div className="bg-gray-800 p-2 font-medium shadow-lg cursor-pointer rounded-md hover:translate-y-2 transition-all duration-500">
                <img src={element.image} className="w-full md:h-72 rounded-md" alt="" />
                
                <h1> <span className="text-gray-400">Name: </span> {element.title}</h1>

                <h1 className="flex items-center">
                  <span className="text-gray-400 mr-1">Rating: </span> 
                  {/* rating stars package added */}
                  <ReactStars
                    size={20}
                    half={true}
                    value={element.rating / element.rated}
                    edit={false}
                    />
                </h1>

                <h1> <span className="text-gray-400">Year: </span> {element.year}</h1>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Main