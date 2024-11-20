import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <header>
        <Header/>
      </header>
      <main>
        <About/>
        <Projects/>
        <Testimonials/>
      </main>
    </div>
  )
}

export default App