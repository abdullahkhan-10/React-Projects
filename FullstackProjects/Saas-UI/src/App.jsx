import Feature from "./Sections/Feature"
import Header from "./Sections/Header"
import Hero from "./Sections/Hero"
import Pricing from "./Sections/Pricing"

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header/>
      <Hero/>
      <Feature/>
      <Pricing/>
    </main>
  )
}

export default App