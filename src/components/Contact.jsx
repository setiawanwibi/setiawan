import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMessageCircle,
} from 'react-icons/fi'

function Contact() {
  const contacts = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'wibi202229@gmail.com',
      href: 'mailto:wibi202229@gmail.com',
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'Muhammad Setiawan Wibisono',
      href: 'https://www.linkedin.com/in/muhammad-setiawan-wibisono-37a047314/',
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'github.com/setiawanwibi',
      href: 'https://github.com/setiawanwibi',
    },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >

          {/* Ambient effects */}
          <div className="contact-glow contact-glow-blue"></div>
          <div className="contact-glow contact-glow-yellow"></div>
          <div className="contact-grid"></div>

          {/* Main Content */}
          <div className="contact-content">

            <motion.div
              className="contact-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <div className="contact-eyebrow-icon">
                <FiMessageCircle />
              </div>

              <span>GET IN TOUCH</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's build something
              <span> meaningful.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I'm open to opportunities, collaborations,
              and conversations around software development,
              web technologies, and digital products.
            </motion.p>

            {/* Contact Cards */}
            <div className="contact-actions">

              {contacts.map((contact, index) => (
                <motion.a
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
                    delay: 0.35 + index * 0.1,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -6,
                  }}
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

                </motion.a>
              ))}

            </div>

          </div>

          {/* Bottom Bar */}
          <motion.div
            className="contact-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >

            <div className="contact-currently">
              <span>CURRENTLY</span>

              <strong>
                Open to opportunities
              </strong>
            </div>

            <div className="availability">
              <span className="availability-dot"></span>

              <span className="availability-text">
                Available
              </span>
            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Contact