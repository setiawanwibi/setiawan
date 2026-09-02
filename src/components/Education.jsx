import { motion } from 'framer-motion'
import {
  FiBookOpen,
  FiAward,
  FiArrowUpRight,
} from 'react-icons/fi'

function Education() {
  const education = [
    {
      period: '2022 — 2026',
      degree: 'Bachelor of Computer Science',
      institution: 'Universitas Lampung',
      detail:
        'S1 Ilmu Komputer · Fakultas Matematika dan Ilmu Pengetahuan Alam',
      highlight: 'GPA 3.54 / 4.00',
      featured: true,
    },
    {
      period: '2019 — 2022',
      degree: 'Senior High School',
      institution: 'SMA Negeri 3 Bandar Lampung',
      detail: 'Bandar Lampung',
      featured: false,
    },
  ]

  const academicFocus = [
    'Web Development',
    'Software Engineering',
    'Information Systems',
    'Database Management',
    'UI / UX Design',
    'Computer Science',
  ]

  return (
    <section id="education" className="education-section">
      <div className="container">

        {/* Heading */}

        <motion.div
          className="section-heading education-heading"
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
            EDUCATION
          </span>

          <h2>
            Where my journey
            <span> started.</span>
          </h2>

          <p>
            My academic background and the foundation that
            shaped my interest in technology and software
            development.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="education-grid">

          {/* Timeline */}

          <div className="education-list">

            {education.map((item, index) => (
              <motion.article
                className={`education-item ${
                  item.featured
                    ? 'education-item-featured'
                    : ''
                }`}
                key={item.institution}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >

                <div className="education-period">
                  {item.period}
                </div>

                <div className="education-marker">
                  <div></div>
                </div>

                <div className="education-content">

                  <span className="education-level">
                    {item.featured
                      ? 'Higher Education'
                      : 'Formal Education'}
                  </span>

                  <h3>
                    {item.degree}
                  </h3>

                  <h4>
                    {item.institution}
                  </h4>

                  <p>
                    {item.detail}
                  </p>

                  {item.highlight && (
                    <div className="education-highlight">
                      <FiAward />

                      <span>
                        {item.highlight}
                      </span>
                    </div>
                  )}

                </div>

              </motion.article>
            ))}

          </div>

          {/* Academic Focus */}

          <motion.aside
            className="education-side"
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div className="education-side-icon">
              <FiBookOpen />
            </div>

            <span className="section-label">
              ACADEMIC FOCUS
            </span>

            <h3>
              Built a foundation
              <span> in technology.</span>
            </h3>

            <p>
              My Computer Science education gave me a strong
              foundation in software development, information
              systems, databases, and user interface design.
            </p>

            <div className="academic-focus-list">

              {academicFocus.map((focus) => (
                <span key={focus}>
                  {focus}
                </span>
              ))}

            </div>

            <a
              href="#projects"
              className="education-link"
            >
              Explore my projects
              <FiArrowUpRight />
            </a>

          </motion.aside>

        </div>

      </div>
    </section>
  )
}

export default Education