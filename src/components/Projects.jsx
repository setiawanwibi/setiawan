import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi'

import plnFuelCover from '../assets/projects/pln-fuel/cover.png'
import plnFuelDashboard from '../assets/projects/pln-fuel/dashboard.png'
import plnFuelReport from '../assets/projects/pln-fuel/fuel-report.png'
import plnFuelAnalysis from '../assets/projects/pln-fuel/fuel-analysis.png'
import plnFuelReports from '../assets/projects/pln-fuel/reports.png'

import plnFieldCover from '../assets/projects/pln-field/cover.png'
import plnFieldDashboard from '../assets/projects/pln-field/dashboard.png'
import plnFieldWorkReport from '../assets/projects/pln-field/work-report.png'
import plnFieldComplaints from '../assets/projects/pln-field/complaints.png'


function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [activeImage, setActiveImage] = useState(0)
  const [filter, setFilter] = useState('All')


  /* ================================
     PROJECT DATA
  ================================ */

  const projects = [
    {
      id: 1,
      number: '01',

      systemName: 'SIPER BBM',

      category: 'Web Development',

      title:
        'PLN Fuel Monitoring & Efficiency Analysis System',

      cover: plnFuelCover,

      images: [
        plnFuelDashboard,
        plnFuelReport,
        plnFuelAnalysis,
        plnFuelReports,
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


    /* ================================
       PROJECT 02
    ================================ */

    {
      id: 2,
      number: '02',

      systemName: 'SIGAP PLN',

      category: 'Web Development',

      title:
        'Field Work Reporting & Customer Complaint System',

      cover: plnFieldCover,

      images: [
        plnFieldDashboard,
        plnFieldWorkReport,
        plnFieldComplaints,
      ],

      shortDescription:
        'A Laravel-based digital system for managing field worker reports and documenting customer complaints at PT PLN (Persero) UP3 Tanjung Karang – ULP Karang.',

      description:
        'A web-based information system developed to support integrated reporting of field work and customer complaints at PT PLN (Persero) UP3 Tanjung Karang – ULP Karang. The system is designed to structure field worker reports, manage customer complaint records, simplify monitoring and evaluation, and support faster and more transparent service processes.',

      technologies: [
        'Laravel',
        'PHP',
        'MySQL',
        'JavaScript',
        'Figma',
      ],

      role: 'Web Developer',

      year: '2025',

      github: '',

      demo: '',
    },
  ]


  /* ================================
     FILTER
  ================================ */

  const categories = [
    'All',
    'Web Development',
  ]


  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === filter,
        )


  /* ================================
     OPEN PROJECT
  ================================ */

  const openProject = (project) => {
    setActiveProject(project)
    setActiveImage(0)
  }


  /* ================================
     CLOSE PROJECT
  ================================ */

  const closeProject = () => {
    setActiveProject(null)
    setActiveImage(0)
  }


  return (
    <section
      id="projects"
      
      className="projects-section"
    >
      <div className="container">


        {/* ================================
            HEADING
        ================================= */}

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



        {/* ================================
            FILTER
        ================================= */}

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

          transition={{
            duration: 0.5,
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

              onClick={() =>
                setFilter(category)
              }
            >
              {category}
            </button>

          ))}

        </motion.div>



        {/* ================================
            PROJECT LIST
        ================================= */}

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
                    openProject(project)
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


                    {/* System Name */}

                    <h3 className="project-system-name">
                      {project.systemName}
                    </h3>


                    {/* Project Title */}

                    <h3>
                      {project.title}
                    </h3>


                    <p>
                      {project.shortDescription}
                    </p>


                    <div className="project-technologies">

                      {project.technologies.map(
                        (technology) => (

                          <span
                            key={technology}
                          >
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



      {/* ================================
          PROJECT MODAL
      ================================= */}

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

            onClick={closeProject}
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


              {/* Close */}

              <button
                className="project-modal-close"

                onClick={closeProject}

                aria-label="Close project details"
              >
                <FiX />
              </button>



              {/* Project Number */}

              <span className="modal-project-number">
                {activeProject.number}
              </span>



              {/* Category */}

              <span className="modal-project-category">
                {activeProject.category}
              </span>



              {/* Title */}

              <h3>
                {activeProject.title}
              </h3>



              {/* Project Info */}

              <div className="modal-project-info">

                <span>
                  {activeProject.year}
                </span>

                <span>
                  {activeProject.role}
                </span>

              </div>



              {/* ================================
                  GALLERY
              ================================= */}

              <div className="modal-project-gallery">


                {/* Main Image */}

                <div className="modal-gallery-main">

                  <img
                    src={
                      activeProject.images[
                        activeImage
                      ]
                    }

                    alt={`${activeProject.title} screenshot ${
                      activeImage + 1
                    }`}
                  />



                  {/* Navigation */}

                  {activeProject.images.length > 1 && (
                    <>

                      <button
                        className="gallery-nav gallery-prev"

                        onClick={() =>
                          setActiveImage(
                            (current) =>
                              current === 0
                                ? activeProject.images.length - 1
                                : current - 1,
                          )
                        }

                        aria-label="Previous image"
                      >
                        <FiChevronLeft />
                      </button>


                      <button
                        className="gallery-nav gallery-next"

                        onClick={() =>
                          setActiveImage(
                            (current) =>
                              current ===
                              activeProject.images.length - 1
                                ? 0
                                : current + 1,
                          )
                        }

                        aria-label="Next image"
                      >
                        <FiChevronRight />
                      </button>


                      <span className="gallery-counter">
                        {activeImage + 1} /{' '}
                        {activeProject.images.length}
                      </span>

                    </>
                  )}

                </div>



                {/* ================================
                    THUMBNAILS
                ================================= */}

                <div className="modal-gallery-thumbnails">

                  {activeProject.images.map(
                    (image, index) => (

                      <button
                        key={`${activeProject.id}-${index}`}

                        className={
                          activeImage === index
                            ? 'active'
                            : ''
                        }

                        onClick={() =>
                          setActiveImage(index)
                        }

                        aria-label={`View screenshot ${
                          index + 1
                        }`}
                      >

                        <img
                          src={image}
                          alt={`Project screenshot ${
                            index + 1
                          }`}
                        />

                      </button>

                    ),
                  )}

                </div>

              </div>



              {/* ================================
                  DESCRIPTION
              ================================= */}

              <p className="modal-project-description">
                {activeProject.description}
              </p>



              {/* ================================
                  TECHNOLOGIES
              ================================= */}

              <div className="modal-project-stack">

                <h4>
                  Technologies
                </h4>


                <div>

                  {activeProject.technologies.map(
                    (technology) => (

                      <span
                        key={technology}
                      >
                        {technology}
                      </span>

                    ),
                  )}

                </div>

              </div>



              {/* ================================
                  ACTIONS
              ================================= */}

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