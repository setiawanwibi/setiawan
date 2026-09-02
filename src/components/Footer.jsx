import { motion } from 'framer-motion'
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from 'react-icons/fi'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const socials = [
    {
      icon: <FiGithub />,
      label: 'GitHub',
      href: 'https://github.com/setiawanwibi',
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-setiawan-wibisono-37a047314/',
    },
    {
      icon: <FiMail />,
      label: 'Email',
      href: 'mailto:wibi202229@gmail.com',
    },
  ]

  return (
    <footer className="footer">

      <div className="container">

        <motion.div
          className="footer-main"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Brand */}

          <div className="footer-brand">

            <motion.a
              href="#home"
              className="footer-profile"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <div className="footer-profile-ring">
                <img
                  src="/profile.jpg"
                  alt="Muhammad Setiawan Wibisono"
                />
              </div>

              <div className="footer-brand-info">
                <strong>
                  Muhammad Setiawan
                </strong>

                <span>
                  Web Developer · UI/UX Designer
                </span>
              </div>
            </motion.a>

          </div>

          {/* Socials */}

          <div className="footer-socials">

            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={
                  social.label === 'Email'
                    ? undefined
                    : '_blank'
                }
                rel={
                  social.label === 'Email'
                    ? undefined
                    : 'noreferrer'
                }
                aria-label={social.label}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.03,
                }}
              >
                {social.icon}
              </motion.a>
            ))}

          </div>

          {/* Back To Top */}

          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <span>
              Back to top
            </span>

            <span className="back-to-top-icon">
              <FiArrowUp />
            </span>
          </motion.button>

        </motion.div>

        {/* Bottom */}

        <motion.div
          className="footer-bottom"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
            duration: 0.6,
          }}
        >

          <span>
            © 2026 Muhammad Setiawan Wibisono
          </span>

          <span className="footer-built">
            Built with
            <span className="footer-dot">·</span>
            React
            <span className="footer-dot">·</span>
            Deployed on Vercel
          </span>

        </motion.div>

      </div>

    </footer>
  )
}

export default Footer