// import { useState } from 'react'
import Navbar from './components/navbar'
import Intro from './components/intro'
import Projects from './components/projects'
import About from './components/about'
import Footer from './components/footer'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Intro />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}

export default App