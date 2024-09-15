import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'

const App = () => {
  // To change the category
  const [category, setcategory] = useState("general")
  return (
    <div>
      <Navbar setcategory={setcategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App