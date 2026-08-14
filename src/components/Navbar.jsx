import { useEffect, useState } from 'react'

function Navbar() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem('theme') === 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }, [isLight])

  const toggleTheme = () => {
    setIsLight(prev => !prev)
  }

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="#home" className="navbar-logo">
          Muhammad Setiawan Wibisono
        </a>

        <nav className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar-actions">

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {isLight ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                width="17"
                height="17"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                width="17"
                height="17"
              >
                <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8Z" />
              </svg>
            )}
          </button>

          <a href="#contact" className="navbar-button">
            Let's Talk
          </a>

        </div>

      </div>
    </header>
  )
}

export default Navbar