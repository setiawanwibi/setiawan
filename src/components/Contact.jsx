import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi'

function Contact() {
  const contacts = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'Business Email',
      href: 'mailto:wibi202229@gmail.com',
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/muhammad-setiawan-wibisono-37a047314/',
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: 'https://github.com/setiawanwibi',
    },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <motion.div
          className="contact-wrapper"
          initial={{
            opacity: 0,
            y: 40,
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
          }}
        >

          <div className="contact-glow"></div>

          <div className="contact-content">

            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p>
              I'm open to opportunities, collaborations,
              and conversations around software development,
              web technologies, and digital products.
            </p>

            <div className="contact-actions">

              {contacts.map((contact) => (
                <a
                  href={contact.href}
                  target={
                    contact.label === 'Email'
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    contact.label === 'Email'
                      ? undefined
                      : 'noreferrer'
                  }
                  className="contact-card"
                  key={contact.label}
                >

                  <div className="contact-icon">
                    {contact.icon}
                  </div>

                  <div className="contact-info">
                    <span>
                      {contact.label}
                    </span>

                    <strong>
                      {contact.value}
                    </strong>
                  </div>

                  <FiArrowUpRight
                    className="contact-arrow"
                  />

                </a>
              ))}

            </div>

          </div>

          <div className="contact-bottom">

            <div>
              <span>
                CURRENTLY
              </span>

              <strong>
                Open to opportunities
              </strong>
            </div>

            <div className="availability">
              <span></span>
              Available
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Contact