import React, { useEffect, useState } from 'react'
import Background from './components/background/Background'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'

const App = () => {
  const [ heroCount, setHeroCount] = useState(0)              // to save indexes of images
  const [videoStatus, setVideoStatus] = useState(false)       // for video status
  
  let heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in to", text2: "your passions"},
  ]

  // To change images after three second.
  useEffect( () =>{
    if (videoStatus) {
      setHeroCount(0)
    }
    else{
      setInterval(() => {
        setHeroCount( (count) =>{
          return count === 2 ? 0 : count + 1
        })
      }, 3000);
    }

  },[])

  return (
    <div>
      {/* 1 */}
      <Background videoStatus={videoStatus} heroCount={heroCount}/>
      
      {/* 2 */}
      <Navbar/>

      {/* 3 */}
      <Hero 
        heroData={heroData[heroCount]}      //to dynamically pass the index to array.
        setVideoStatus={setVideoStatus}
        setHeroCount={setHeroCount}
        videoStatus={videoStatus}
        heroCount={heroCount}
      />
    </div>
  )
}

export default App