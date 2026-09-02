import { useEffect, useState } from 'react'

function Navbar() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem('theme') === 'light'
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }, [isLight])

  // ================================
  // ACTIVE SECTION ON SCROLL
  // ================================

  useEffect(() => {
    const sections = document.querySelectorAll(
      '#home, #about, #experience, #projects, #skills, #contact'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsLight(prev => !prev)
  }

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

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

          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => {
                setActiveSection(item.id)
                closeMenu()
              }}
            >
              {item.label}
            </a>
          ))}

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


      {/* MOBILE SIDEBAR */}

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
          <span>MENU</span>

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

          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id ? 'active' : ''
              }
              onClick={() => {
                setActiveSection(item.id)
                closeMenu()
              }}
            >
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              {item.label}
            </a>
          ))}

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