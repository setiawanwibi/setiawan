import { motion } from 'framer-motion'
import {
  FiBriefcase,
  FiBookOpen,
  FiArrowUpRight,
} from 'react-icons/fi'

function Experience() {
  const experiences = [
    {
      year: '2026',
      type: 'Academic Experience',
      title: 'Assistant Lecturer',
      organization: 'Universitas Lampung',
      description:
        'Assisted the lecturer in supporting students during the Multimedia course, including practical activities, learning assistance, and academic tasks.',
      tags: ['Teaching', 'Multimedia', 'Academic'],
      icon: <FiBookOpen />,
    },
    {
      year: '2025',
      type: 'Professional Experience',
      title: 'Internship',
      organization: 'PT PLN (Persero)',
      description:
        'Supported digital administrative processes and field-work reporting activities through PLN internal systems while contributing to structured data management and documentation.',
      tags: ['Internship', 'Information Systems', 'Digitalization'],
      icon: <FiBriefcase />,
    },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="container">

        <motion.div
          className="section-heading experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            EXPERIENCE
          </span>

          <h2>
            Where I've
            <span> contributed.</span>
          </h2>

          <p>
            A collection of professional, academic, and
            practical experiences that shaped my development.
          </p>
        </motion.div>

        <div className="experience-list">

          {experiences.map((experience, index) => (
            <motion.article
              className="experience-card"
              key={`${experience.year}-${experience.title}`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >

              <div className="experience-year">
                <span>{experience.year}</span>

                <div className="experience-line"></div>
              </div>

              <div className="experience-main">

                <div className="experience-top">

                  <div className="experience-icon">
                    {experience.icon}
                  </div>

                  <div>
                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h3>
                      {experience.title}
                    </h3>

                    <h4>
                      {experience.organization}
                    </h4>
                  </div>

                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-tags">
                  {experience.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              <div className="experience-number">
                0{index + 1}
              </div>

            </motion.article>
          ))}

        </div>

        <motion.div
          className="experience-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>
            More than a job title — every experience is
            an opportunity to learn, build, and contribute.
          </span>

          <a href="#projects">
            See what I've built
            <FiArrowUpRight />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Experience