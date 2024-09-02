
import './App.css'
import RandomColor from './components/2color-generator/RandomColor'
import Accordian from './components/1accordian/Accordian'
import StarRating from './components/3star-rating/StarRating'

function App() {

  return (
    <>
     {/* 1. Accordian */}
     {/* <Accordian/> */}

     {/* 2 Random Color Generator */}
     {/* <RandomColor/> */}

     {/* 3 Star Rating */}
     <StarRating noOfStars={10}/>
    </>
  )
}

export default App
