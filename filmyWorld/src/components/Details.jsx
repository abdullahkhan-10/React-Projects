import ReactStars from "react-stars"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db} from "../Firebase/firebase"
import { ThreeCircles } from "react-loader-spinner"
import Reviews from "./Reviews"

const Details = () => {
    const {id} = useParams()
    // window.alert(id)
    const[movieDetails, setMovieDetails] = useState({
        title: "",
        year: "",
        image: "",
        description: "",
        rating: 0, 
        rated: 0
    })
    const [loading, setLoading] = useState(false)

    useEffect( () =>{
        async function getMovieDetails(){
            setLoading(true)
            // get the data from firbase and display on Details component 
            const docRef = doc(db, "movies", id)
            const details = await getDoc(docRef)

            setMovieDetails(details.data())

            setLoading(false)
        }

        getMovieDetails()
    },[])
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full p-4 mt-4">
        {
            loading
            ? <ThreeCircles height={25} color="white"/>
            :  <>
                    <img className="h-[460px] w-96 block md:sticky top-24" src={movieDetails.image} alt="" />
        
                    <div className=" w-full md:w-1/2 ml-0 md:ml-4">
                        <h1 className="text-3xl font-bold text-gray-400">{movieDetails.title} <span className="text-xl">({movieDetails.year})</span></h1>
                        <ReactStars
                            size={20}
                            half={true}
                            value={movieDetails.rating/movieDetails.rated}
                            edit={false}
                        />
                
                        <p className="mt-3"> {movieDetails.description}</p>

                        <Reviews id={id} prevRating={movieDetails.rating} userRated={movieDetails.rated}/>
                    </div> 
                </>
        }
        
    </div>
  )
}

export default Details