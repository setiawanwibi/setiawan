import { motion } from 'framer-motion'
import {
  FiAward,
  FiExternalLink,
  FiShield,
} from 'react-icons/fi'

function Certifications() {
  const certifications = [
    {
      number: '01',
      title: 'Webinar Nasional K3',
      issuer: 'UPNVJ',
      year: '2026',
      category: 'Webinar',
      credential: '',
      link: '',
    },
    {
      number: '02',
      title: 'Professional Development',
      issuer: 'Academic & Professional Training',
      year: '2026',
      category: 'Training',
      credential: '',
      link: '',
    },
  ]

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="container">

        {/* Heading */}

        <motion.div
          className="section-heading certifications-heading"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className="section-label">
            CREDENTIALS
          </span>

          <h2>
            Always learning,
            <span> always growing.</span>
          </h2>

          <p>
            Selected certifications, training, and
            professional learning experiences that support
            my technical journey.
          </p>
        </motion.div>

        {/* Certifications */}

        <div className="certifications-list">

          {certifications.map(
            (certificate, index) => (
              <motion.article
                className="certificate-card"
                key={certificate.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className="certificate-number">
                  {certificate.number}
                </div>

                <div className="certificate-icon">
                  <FiAward />
                </div>

                <div className="certificate-content">

                  <div className="certificate-meta">
                    <span>
                      {certificate.category}
                    </span>

                    <span>
                      {certificate.year}
                    </span>
                  </div>

                  <h3>
                    {certificate.title}
                  </h3>

                  <p>
                    {certificate.issuer}
                  </p>

                  {certificate.credential && (
                    <small>
                      Credential ID:{' '}
                      {certificate.credential}
                    </small>
                  )}

                </div>

                {certificate.link ? (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-link"
                    aria-label={`View ${certificate.title}`}
                  >
                    <FiExternalLink />
                  </a>
                ) : (
                  <div className="certificate-status">
                    <FiShield />
                  </div>
                )}

              </motion.article>
            ),
          )}

        </div>

        {/* Bottom Note */}

        <motion.div
          className="certification-note"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <FiShield />

          <span>
            Certificates and credentials can be verified
            through their respective issuers.
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default Certifications