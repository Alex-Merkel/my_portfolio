import Navbar from './components/navbar'
import Intro from './components/intro'
import Projects from './components/projects'
import About from './components/about'
import Why from './components/why'
import Footer from './components/footer'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Projects />
      <About />
      <Why />
      <Footer />
    </div>
  )
}

export default App