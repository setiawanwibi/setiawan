import { useEffect, useState } from 'react'

function Navbar() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem('theme') === 'light'
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }, [isLight])

  const toggleTheme = () => {
    setIsLight(prev => !prev)
  }

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          Muhammad Setiawan Wibisono
        </a>


        {/* Desktop Menu */}

        <nav className="navbar-menu">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

        </nav>


        {/* Actions */}

        <div className="navbar-actions">

          {/* Theme */}

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={
              isLight
                ? 'Switch to dark mode'
                : 'Switch to light mode'
            }
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




          {/* Mobile Menu Button */}

          <button
            type="button"
            className={`navbar-toggle ${
              isMenuOpen ? 'active' : ''
            }`}
            onClick={toggleMenu}
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>

      </div>


      {/* ================================
          MOBILE SIDEBAR
      ================================= */}

      <div
        className={`mobile-sidebar-overlay ${
          isMenuOpen ? 'show' : ''
        }`}
        onClick={closeMenu}
      ></div>


      <aside
        className={`mobile-sidebar ${
          isMenuOpen ? 'open' : ''
        }`}
      >

        {/* Sidebar Header */}

        <div className="mobile-sidebar-header">

          <span>
            MENU
          </span>

          <button
            type="button"
            className="mobile-sidebar-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            ×
          </button>

        </div>


        {/* Sidebar Navigation */}

        <nav className="mobile-sidebar-menu">

          <a
            href="#home"
            onClick={closeMenu}
          >
            <span>01</span>
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            <span>02</span>
            About
          </a>

          <a
            href="#experience"
            onClick={closeMenu}
          >
            <span>03</span>
            Experience
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
          >
            <span>04</span>
            Projects
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
          >
            <span>05</span>
            Skills
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            <span>06</span>
            Contact
          </a>

        </nav>


        {/* Sidebar Bottom */}

        <div className="mobile-sidebar-bottom">

          <span>
            Have a project in mind?
          </span>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Let's Talk
            <span>↗</span>
          </a>

        </div>

      </aside>

    </header>
  )
}

export default Navbar