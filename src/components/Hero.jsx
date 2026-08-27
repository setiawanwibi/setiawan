import { motion } from 'framer-motion'
import { FiArrowUpRight, FiDownload, FiMapPin } from 'react-icons/fi'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Muhammad Setiawan
            <br />
            <span>Wibisono.</span>
          </h1>

          <h2>
            <span>Computer Science Graduate</span>
          </h2>

          <p className="hero-description">
            I design and develop web-based solutions that combine
            practical functionality, clean interfaces, and thoughtful
            user experiences.
          </p>

          <div className="hero-location">
            <FiMapPin />
            <span>Bandar Lampung, Indonesia</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore My Work
              <FiArrowUpRight />
            </a>

            <a
              href="/cv-setiawan-wibisono.pdf"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
              <FiDownload />
            </a>
          </div>

        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >

          <div className="hero-glow"></div>

          <div className="hero-image-wrapper">
            <img
              src="/profile.jpg"
              alt="Setiawan Wibisono"
            />
          </div>

          <div className="hero-card hero-card-top">
            <span>Focus</span>
            <strong>Web Development</strong>
          </div>

          <div className="hero-card hero-card-bottom">
            <span>Education</span>
            <strong>Computer Science</strong>
          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero