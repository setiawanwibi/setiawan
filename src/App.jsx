import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Profile />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
        
      </main>
    </div>
  )
}

export default App