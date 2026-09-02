import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiDownload,
  FiMapPin
} from 'react-icons/fi'

function Hero() {
  return (
    <section id="home" className="hero">

      {/* ========================================
          DECORATIVE BACKGROUND
      ======================================== */}

      <div className="hero-wave hero-wave-1"></div>
      <div className="hero-wave hero-wave-2"></div>
      <div className="hero-wave hero-wave-3"></div>

      {/* Green hills */}
      <div className="hero-hill hero-hill-back"></div>
      <div className="hero-hill hero-hill-front"></div>


      <div className="container hero-container">

        {/* ========================================
            LEFT CONTENT
        ======================================== */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8
          }}
        >

          <span className="hero-intro">
            Hi, I'm
          </span>

          <h1>
            Muhammad Setiawan
            <br />
            <span>Wibisono.</span>
          </h1>

          <h2>
            Computer Science Graduate
          </h2>

          <p className="hero-description">
            A fresh graduate focused on designing and developing digital
            solutions with practical functionality, clean interfaces,
            and thoughtful user experiences.
          </p>


          {/* Buttons */}

          <div className="hero-actions">

            <a
              href="#projects"
              className="hero-btn hero-btn-primary"
            >
              Explore My Project
              <FiArrowUpRight />
            </a>

            <a
              href="/cv-setiawan-wibisono.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-outline"
            >
              View Resume
              <FiDownload />
            </a>

          </div>


          {/* Location */}

          <div className="hero-location">

            <FiMapPin />

            <span>
              Bandar Lampung, Indonesia
            </span>

          </div>

        </motion.div>


{/* ========================================
    RIGHT — LANYARD PHOTO
======================================== */}

<motion.div
  className="hero-visual"
  initial={{
    opacity: 0,
    x: 40
  }}
  animate={{
    opacity: 1,
    x: 0
  }}
  transition={{
    duration: 0.8,
    delay: 0.15
  }}
>

  <div className="hero-glow"></div>

  <div className="hero-lanyard">

    {/* Lanyard strap */}

    <div className="lanyard-strap">

      <div className="lanyard-fabric"></div>

      <div className="lanyard-stitch"></div>

    </div>


    {/* Metal connector */}

    <div className="lanyard-ring"></div>

    <div className="lanyard-clip">

      <div className="clip-highlight"></div>

    </div>


    {/* ID Card */}

    <div className="hero-image-wrapper">

      <div className="lanyard-hole"></div>

      <div className="card-border"></div>

      <img
        src="/profile.jpg"
        alt="Muhammad Setiawan Wibisono"
      />

    </div>

  </div>

</motion.div>

      </div>


      {/* ========================================
          BOTTOM BLUE RIBBON
      ======================================== */}

      <div className="hero-bottom-wave"></div>

    </section>
  )
}

export default Hero