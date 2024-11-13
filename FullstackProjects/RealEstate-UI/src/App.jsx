import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <header>
        <Header/>
      </header>
      <main>
        <About/>
        <Projects/>
      </main>
    </div>
  )
}

export default App