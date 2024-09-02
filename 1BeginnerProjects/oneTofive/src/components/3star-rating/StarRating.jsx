import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"
import "./style.css"

// if don't pass the number to this props in app.jsx, then it will take 5 by default.
const StarRating = ({noOfStars = 5}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (getCurrentIndex)=>{
        // console.log("Clicked",getCurrentIndex);
        setRating(getCurrentIndex)
        
    }
    const handleMouseEnter = (getCurrentIndex)=>{
        // console.log("Mouse Enter",getCurrentIndex);
        setHover(getCurrentIndex)
    }
    const handleMouseLeave = ()=>{
        // console.log("Mouse leave",getCurrentIndex);
        // when we leave from any star on which we have clicked, the rating will be set on that star, mean if we have cliked on star fourth star, then four stars will be rate yellow.
        setHover(rating)
        
    }

  return (
    <div className='star-rating'>
        {
            // we have created an arry and then pass that number of stars, and then map through them.
            [...Array(noOfStars)].map( (_, index) =>{
                index += 1
                return(
                    <FaStar
                    key={index}
                    // if index become greater or equal to any one of them , then apply active class other wise apply inactive class.
                    className={ index <= (hover || rating) ? "active" : "inactive"}
                    onClick={ () => handleClick(index)}
                    onMouseMove={ () =>handleMouseEnter(index)}
                    onMouseLeave={ () => handleMouseLeave()}
                    size={40}
                    />
                )
            })
        }
    </div>
  )
}

export default StarRating