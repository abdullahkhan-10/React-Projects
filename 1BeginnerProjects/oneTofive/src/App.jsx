
import './App.css'
import RandomColor from './components/2color-generator/RandomColor'
import Accordian from './components/1accordian/Accordian'
import StarRating from './components/3star-rating/StarRating'
import ImageSlider from './components/4image-slider/ImageSlider'

function App() {

  return (
    <>
     {/* 1. Accordian */}
     {/* <Accordian/> */}

     {/* 2 Random Color Generator */}
     {/* <RandomColor/> */}

     {/* 3 Star Rating */}
     {/* <StarRating noOfStars={10}/> */}

     {/* 4 Image Slider */}
     <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/>


    </>
  )
}

export default App
