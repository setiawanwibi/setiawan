import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2500
    const interval = 20
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + increment, 100)

        if (next >= 100) {
          clearInterval(timer)

          setTimeout(() => {
            onComplete()
          }, 350)
        }

        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: '-100%',
      }}
      transition={{
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      }}
    >

      {/* Top Label */}

      <div className="loading-top">
        <span>PORTFOLIO</span>
        <span>2026</span>
      </div>


      {/* Center */}

      <div className="loading-center">

        <motion.div
          className="loading-image"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <img
            src="/profile.jpg"
            alt="Setiawan Wibisono"
          />
        </motion.div>


        <motion.p
          className="loading-welcome"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
        >
          Portfolio
        </motion.p>


        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.45,
          }}
        >
          Muhammad Setiawan
          <span> Wibisono.</span>
        </motion.h1>


        <motion.p
          className="loading-role"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
        >
          Computer Science Graduate 
        </motion.p>

      </div>


      {/* Bottom */}

      <div className="loading-bottom">

        <div className="loading-progress-info">
          <span>LOADING EXPERIENCE</span>

          <span>
            {Math.floor(progress)
              .toString()
              .padStart(2, '0')}
            %
          </span>
        </div>


        <div className="loading-progress">
          <motion.div
            className="loading-progress-bar"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>


        <div className="loading-footer">
          <span>BUILDING IDEAS INTO DIGITAL SOLUTIONS.</span>

          <span>01 / 01</span>
        </div>

      </div>

    </motion.div>
  )
}

export default LoadingScreen