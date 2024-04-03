// import components
import Hero from './components/Hero'
import Navbar from './Layouts/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useEffect } from 'react'
// Animation package
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: 'mobile',
    })
  }, [])
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />

      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">PHUTADON PHUMMARIN</h6>
        <p>Portfolio © All CopyRights Reserved {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
