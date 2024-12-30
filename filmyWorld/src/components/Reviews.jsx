import { useContext, useEffect, useState } from "react"
import ReactStars from "react-stars"
import { reviewsRef, db } from "../Firebase/firebase"
import { addDoc, updateDoc, doc, query, where, getDocs } from "firebase/firestore"
import { TailSpin, ThreeDots } from "react-loader-spinner"
import swal from "sweetalert"
import {appState} from "../App"
import { useNavigate } from "react-router-dom"

const Reviews = ({id, prevRating, userRated }) => {
    const [rating, setRating] = useState(0)
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    const [reviewDetails, setReviewDetails] = useState([])
    const [reviewLoading, setReviewLoading] = useState(false)

    const useAppState = useContext(appState)
    const navigate = useNavigate()
    // to Load review instantly 
    const [newReviewAdded, setNewReviewAdded] = useState(0)

    // To send review to firebase database
    const sentReview = async() => {
        setLoading(true)
        try {
            if (useAppState.login) {
                await addDoc(reviewsRef, {
                    movieId: id,
                    name: useAppState.userName,
                    rating: rating,
                    thought: input,
                    timestamp: new Date().getTime()
                })
                
                // to update the rating and userRated in movie collection 
                const ref = doc(db, "movies", id)
                await updateDoc(ref, {
                    rating: prevRating + rating,
                    rated: userRated + 1
                })
                setRating(0)
                setInput("")
                setNewReviewAdded(newReviewAdded + 1)
    
                swal({
                    title: "Review Sent",
                    icon: "success",
                    button: false,
                    time: 3000
                })
            }else {
                navigate("/login")
            }
            
        } catch (error) {
            swal({
                title: error.message,
                icon: "success",
                button: false,
                time: 3000
            })
        }
        setLoading(false)
    }

    // To get reviews data from database and display on the web 
    useEffect( () =>{
        async function getReviewsData() {
            setReviewLoading(true)
            let quer = query(reviewsRef, where("movieId", '==', id))
            const querySnap = await getDocs(quer)
            // console.log(querySnap);
            
            querySnap.forEach( (review) =>{
                setReviewDetails( (prev) =>[...prev, review.data()])
            })

            setReviewLoading(false)
        }
        getReviewsData()
    }, [newReviewAdded])

  return (
    <div className="mt-2 py-2 w-full border-t-2 border-gray-600">
        <ReactStars
         size={30}
         half={true}
         value={rating}
         onChange={ (rate) =>setRating(rate)}
        />

        <input 
          value={input}
          onChange={ (e) =>setInput(e.target.value)}
          placeholder="Share your thoughts..."
          className="p-2 w-full outline-none bg-gray-800"
        />
        <button onClick={sentReview} className="bg-red-600 w-full p-1 flex justify-center">
            { loading ? <TailSpin height={20} color="white"/> : "Share"}
        </button>

        {
            reviewLoading
             ? <div className="mt-10 flex justify-center"><ThreeDots height={10} color="white"/></div>
             : 
                <div className="mt-4">
                    {
                        reviewDetails.map( (e, i) =>(
                            <div key={i} className="w-full p-2 mt-2 border-b border-gray-600">
                                <div className="flex items-center">
                                    <p className="text-blue-500 text-xl">{e.name}</p>
                                    <p className="ml-4 text-[12px]">{new Date(e.timestamp).toLocaleString()}</p>
                                </div>

                                <ReactStars
                                    size={15}
                                    half={true}
                                    value={e.rating}
                                    edit={false}
                                />

                                <p>{e.thought}</p>
                            </div>
                        ))
                    }
                </div>
        }
    </div>
  )
}

export default Reviews