import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
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
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App