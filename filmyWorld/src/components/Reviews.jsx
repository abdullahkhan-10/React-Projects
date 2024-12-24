import { useState } from "react"
import ReactStars from "react-stars"
import { reviewsRef } from "../Firebase/firebase"
import { addDoc } from "firebase/firestore"
import { TailSpin } from "react-loader-spinner"
import swal from "sweetalert"

const Reviews = ({id}) => {
    const [rating, setRating] = useState(0)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState("")

    const sentReview = async() => {
        setLoading(true)
        try {
            await addDoc(reviewsRef, {
                movieId: id,
                name: "Abdullah khan",
                rating: rating,
                thought: input,
                timestamp: new Date().getTime()
            })
            setRating(0)
            setInput("")
            
            swal({
                title: "Review Sent",
                icon: "success",
                button: false,
                time: 3000
            })
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
    </div>
  )
}

export default Reviews