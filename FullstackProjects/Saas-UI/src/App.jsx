import Feature from "./Sections/Feature"
import Header from "./Sections/Header"
import Hero from "./Sections/Hero"

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header/>
      <Hero/>
      <Feature/>
    </main>
  )
}

export default App