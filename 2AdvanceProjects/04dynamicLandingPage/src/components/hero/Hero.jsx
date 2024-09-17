import React from 'react'
import "./hero.css"
import arrow_btn from "../../assets/arrow_btn.png"
import play_icon from "../../assets/play_icon.png"
import pause_icon from "../../assets/pause_icon.png"

const Hero = ({heroData, setVideoStatus,setHeroCount, videoStatus, heroCount}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>

        <div className="hero-explore">
            <p>Explore features</p>
            <img src={arrow_btn} alt="" />
        </div>

        <div className="hero-dot-play">
            <ul className="hero-dots">
                {/* to update the indexes and change the background images */}
                <li onClick={ () =>setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick={ () =>setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick={ () =>setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
            </ul>

            <div className="hero-play">
                {/* if {videoStatus} is true add (play_icon) image to src else add (pause_icon) image to src.  */}
                {/* setVideoStatus(!videoStatus) will toggle the true and false, which stop and play the video. */}
                <img onClick={ ()=> setVideoStatus(!videoStatus)} src={videoStatus ? play_icon : pause_icon} alt="" />
                <p>See the Video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero