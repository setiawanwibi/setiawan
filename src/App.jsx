import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="app">

      {/* Loading Screen */}

      <AnimatePresence>
        {loading && (
          <LoadingScreen
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>


      {/* Portfolio */}

      <Navbar />

      <main>
        <Hero />
        <Profile />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>

    </div>
  )
}

export default App