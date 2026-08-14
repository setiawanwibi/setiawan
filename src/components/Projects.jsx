import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiX,
} from 'react-icons/fi'

import plnFuelCover from '../assets/projects/pln-fuel/cover.png'
import plnFuelDashboard from '../assets/projects/pln-fuel/dashboard.png'
import plnFuelReport from '../assets/projects/pln-fuel/fuel-report.png'
import plnFuelAnalysis from '../assets/projects/pln-fuel/fuel-analysis.png'


function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [filter, setFilter] = useState('All')

const projects = [
  {
    id: 1,
    number: '01',
    category: 'Web Development',
    title: 'PLN Fuel Monitoring & Efficiency Analysis System',

    cover: plnFuelCover,

    images: [
      plnFuelDashboard,
      plnFuelReport,
      plnFuelAnalysis,
    ],

    shortDescription:
      'A web-based information system for reporting and monitoring operational vehicle fuel consumption with fuel usage efficiency analysis.',

    description:
      'A web-based information system developed to digitalize operational vehicle fuel reporting at PT PLN (Persero) UP3 Tanjungkarang. The system manages fuel records, generates reports, visualizes consumption data, and provides analysis of fuel usage efficiency to support monitoring and evaluation.',

    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'JavaScript',
      'Figma',
    ],

    role: 'System Developer',
    year: '2025',
    github: '',
    demo: '',
  },
]

  const categories = [
    'All',
    'Web Development',
    'UI/UX Design',
  ]

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === filter,
        )

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        {/* Heading */}

        <motion.div
          className="section-heading projects-heading"
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
            PROJECTS
          </span>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p>
            Selected projects, experiments, and digital
            solutions I've worked on throughout my journey.
          </p>
        </motion.div>

        {/* Filter */}

        <motion.div
          className="project-filter"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={
                filter === category
                  ? 'active'
                  : ''
              }
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects */}

        <div className="projects-list">

          <AnimatePresence mode="popLayout">

            {filteredProjects.map(
              (project, index) => (
                <motion.article
                className="project-card"
                key={project.id}
                layout
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: -20,
                }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                }}
                onClick={() =>
                    setActiveProject(project)
                }
                >

                {/* Cover */}

                <div className="project-cover">
                    <img
                    src={project.cover}
                    alt={project.title}
                    />
                </div>

                {/* Number */}

                <div className="project-number">
                    {project.number}
                </div>

                {/* Content */}

                <div className="project-content">

                    <div className="project-meta">
                    <span>
                        {project.category}
                    </span>

                    <span>
                        {project.year}
                    </span>
                    </div>

                    <h3>
                    {project.title}
                    </h3>

                    <p>
                    {project.shortDescription}
                    </p>

                    <div className="project-technologies">
                    {project.technologies.map(
                        (technology) => (
                        <span key={technology}>
                            {technology}
                        </span>
                        ),
                    )}
                    </div>

                </div>

                {/* Arrow */}

                <div className="project-arrow">
                    <FiArrowUpRight />
                </div>

                </motion.article>
              ),
            )}

          </AnimatePresence>

        </div>

      </div>

      {/* Project Modal */}

      <AnimatePresence>

        {activeProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setActiveProject(null)
            }
          >

            <motion.div
              className="project-modal"
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 30,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                className="project-modal-close"
                onClick={() =>
                  setActiveProject(null)
                }
                aria-label="Close project details"
              >
                <FiX />
              </button>

              <span className="modal-project-number">
                {activeProject.number}
              </span>

              <span className="modal-project-category">
                {activeProject.category}
              </span>

              <h3>
                {activeProject.title}
              </h3>

              <div className="modal-project-info">
                <span>
                  {activeProject.year}
                </span>

                <span>
                  {activeProject.role}
                </span>
              </div>

              <p className="modal-project-description">
                {activeProject.description}
              </p>

              <div className="modal-project-stack">

                <h4>
                  Technologies
                </h4>

                <div>
                  {activeProject.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ),
                  )}
                </div>

              </div>

              <div className="modal-project-actions">

                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                    Source Code
                  </a>
                )}

                {activeProject.demo && (
                  <a
                    href={activeProject.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  )
}

export default Projects