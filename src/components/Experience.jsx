import { motion } from 'framer-motion'
import {
  FiBriefcase,
  FiBookOpen,
  FiCamera,
  FiArrowUpRight,
  FiExternalLink,
} from 'react-icons/fi'

import sertifikatmulmed from '../assets/experience/sertifikatmulmed.png'
import fotographer from '../assets/experience/fotographer.png'
import sertifikatkp from '../assets/experience/sertifikatkp.png'

function Experience() {
  const experiences = [
    {
      year: '2026',
      type: 'Academic Experience',
      title: 'Assistant Lecturer',
      organization: 'Universitas Lampung',
      period: '2026',
      employment: 'Full-time',
      mode: 'On-site',
      description:
        'Assisted lecturers in supporting students throughout the Multimedia course, including practical sessions, learning activities, and academic assignments.',
      tags: ['Teaching', 'Multimedia', 'Academic'],
      icon: <FiBookOpen />,
      image: sertifikatmulmed,
      imageAlt: 'Multimedia Assistant Lecturer Certificate',
    },

    {
      year: '2025',
      type: 'Professional Experience',
      title: 'Video Editor & Photographer',
      organization: 'YBM PLN UP3 Tanjung Karang',
      period: 'Jun 2025 – Dec 2025',
      employment: 'Part-time',
      mode: 'Hybrid',
      description:
        'Handled event documentation as a photographer and videographer for community service and social welfare programs. Edited video content and created visual assets for organizational reports, publications, and official social media channels.',
      tags: ['Photography', 'Video Editing', 'Digital Production'],
      icon: <FiCamera />,
      image: fotographer,
      imageAlt: 'Photography and video documentation',
    },

    {
      year: '2025',
      type: 'Professional Experience',
      title: 'Internship',
      organization: 'PT PLN (Persero) UP3 Tanjung Karang',
      period: 'Jun 2025 – Aug 2025',
      employment: 'Apprenticeship',
      mode: 'On-site',
      description:
        'Supported digital administrative processes and field work reporting through PLN’s internal systems, while contributing to structured data management, documentation, and digitalization initiatives.',
      tags: ['Internship', 'Information Systems', 'Digitalization'],
      icon: <FiBriefcase />,
      image: sertifikatkp,
      imageAlt: 'PT PLN Internship Certificate',
    },
  ]
  
  return (
    <section id="experience" className="experience-section">
      <div className="container">

        {/* ================================
            SECTION HEADING
        ================================ */}

        <motion.div
          className="section-heading experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
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


        {/* ================================
            EXPERIENCE TIMELINE
        ================================ */}

        <div className="experience-list">

          {experiences.map((experience, index) => (

            <motion.article
              className="experience-card"
              key={`${experience.year}-${experience.title}`}

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
                margin: '-80px',
              }}

              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* ================================
                  TIMELINE YEAR
              ================================ */}

              <div className="experience-year">

                <span>
                  {experience.year}
                </span>

                <div className="experience-line">
                  <span></span>
                </div>

              </div>


              {/* ================================
                  MAIN CONTENT
              ================================ */}

              <div className="experience-main">

                <div className="experience-top">

                  <motion.div
                    className="experience-icon"
                    whileHover={{
                      scale: 1.08,
                      rotate: -4,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {experience.icon}
                  </motion.div>


                  <div className="experience-heading-content">

                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h3>
                      {experience.title}
                    </h3>

                    <h4>
                      {experience.organization}
                    </h4>

                    <div className="experience-meta">

                      <span>
                        {experience.period}
                      </span>

                      <span className="experience-meta-dot">
                        ·
                      </span>

                      <span>
                        {experience.employment}
                      </span>

                      <span className="experience-meta-dot">
                        ·
                      </span>

                      <span>
                        {experience.mode}
                      </span>

                    </div>

                  </div>

                </div>


                {/* DESCRIPTION */}

                <p className="experience-description">
                  {experience.description}
                </p>


                {/* TAGS */}

                <div className="experience-tags">

                  {experience.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

              </div>


              {/* ================================
                  EVIDENCE
              ================================ */}

              <motion.div
                className="experience-evidence"
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
              >

                <div className="experience-image">

                  <img
                    src={experience.image}
                    alt={experience.imageAlt}
                  />

                  <div className="experience-image-overlay">

                    <span>
                      View Evidence
                    </span>

                    <FiExternalLink />

                  </div>

                </div>

              </motion.div>


              {/* NUMBER */}

              <div className="experience-number">
                0{index + 1}
              </div>

            </motion.article>

          ))}

        </div>


        {/* ================================
            EXPERIENCE NOTE
        ================================ */}

        <motion.div
          className="experience-note"

          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.25,
          }}
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