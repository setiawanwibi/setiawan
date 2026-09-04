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

// ================================
// PLN FUEL
// ================================
import plnFuelCover from '../assets/projects/pln-fuel/cover.png'
import plnFuelDashboard from '../assets/projects/pln-fuel/dashboard.png'
import plnFuelReport from '../assets/projects/pln-fuel/fuel-report.png'
import plnFuelAnalysis from '../assets/projects/pln-fuel/fuel-analysis.png'
import plnFuelReports from '../assets/projects/pln-fuel/reports.png'

// ================================
// PLN FIELD
// ================================
import plnFieldCover from '../assets/projects/pln-field/cover.png'
import plnFieldDashboard from '../assets/projects/pln-field/dashboard.png'
import plnFieldWorkReport from '../assets/projects/pln-field/work-report.png'
import plnFieldComplaints from '../assets/projects/pln-field/complaints.png'

// ================================
// GRIYA KOST
// ================================
import griyaKostCover from '../assets/projects/griyakost/coverr.png'
import griyaKostGambar1 from '../assets/projects/griyakost/griya1.png'
import griyaKostGambar2 from '../assets/projects/griyakost/griya2.png'
import griyaKostGambar3 from '../assets/projects/griyakost/griya3.png'
import griyaKostGambar4 from '../assets/projects/griyakost/griya4.png'
import griyaKostGambar5 from '../assets/projects/griyakost/griya5.png'
import griyaKostGambar6 from '../assets/projects/griyakost/griya6.png'
import griyaKostGambar7 from '../assets/projects/griyakost/griya7.png'
import griyaKostGambar8 from '../assets/projects/griyakost/griya8.png'
import griyaKostGambar9 from '../assets/projects/griyakost/griya9.png'
import griyaKostGambar10 from '../assets/projects/griyakost/griya10.png'
import griyaKostGambar11 from '../assets/projects/griyakost/griya11.png'

// ================================
// GO-LEARN
// ================================
import goLearnGambar1 from '../assets/projects/golearn/gambar1.png'
import goLearnGambar2 from '../assets/projects/golearn/gambar2.png'
import goLearnGambar3 from '../assets/projects/golearn/gambar3.png'
import goLearnGambar4 from '../assets/projects/golearn/gambar4.png'
import goLearnGambar5 from '../assets/projects/golearn/gambar5.png'
import goLearnGambar6 from '../assets/projects/golearn/gambar6.png'

// ================================
// SAVORHOUSE UI/UX
// ================================
import savorhouseCover from '../assets/projects/savorhouse/cover.png'
import savorhouseDashboard from '../assets/projects/savorhouse/dashboard.png'
import savorhouseMenu from '../assets/projects/savorhouse/menu.png'
import savorhouseRegister from '../assets/projects/savorhouse/register.png'
import savorhouseOrder from '../assets/projects/savorhouse/order.png'
import savorhousePayment from '../assets/projects/savorhouse/payment.png'

// ================================
// GADGETHUB UI/UX
// ================================
import gadgetHubCover from '../assets/projects/gadgethub/cover.png'
import gadgetHubDesign from '../assets/projects/gadgethub/design.png'


function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [activeImage, setActiveImage] = useState(0)
  const [filter, setFilter] = useState('All')


  const projects = [

    // ================================
    // PROJECT 01
    // PLN FUEL
    // ================================
    {
      id: 1,
      number: '01',
      category: 'Web Development',
      systemName: 'SIPER BBM',
      title: 'PLN Fuel Monitoring & Efficiency Analysis System',

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

      role: 'Fullstack Developer',
      year: '2026',

      github:
        'https://github.com/setiawanwibi/siper_bbm',
    },


    // ================================
    // PROJECT 02
    // PLN FIELD
    // ================================
    {
      id: 2,
      number: '02',
      category: 'Web Development',
      systemName: 'SIGAP PLN',
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

      role: 'Fullstack Developer',
      year: '2025',

      github:
        'https://github.com/setiawanwibi/sigap-pln',
    },

    // PROJECT 03
// GRIYA KOST
// ================================
    {
      id: 6,
      number: '03',
      category: 'Web Development',
      systemName: 'Griya Kost',
      title: 'Griya Kost Management System',

      cover: griyaKostCover,

      images: [
        griyaKostGambar1,
        griyaKostGambar2,
        griyaKostGambar3,
        griyaKostGambar4,
        griyaKostGambar5,
        griyaKostGambar6,
        griyaKostGambar7,
        griyaKostGambar8,
        griyaKostGambar9,
        griyaKostGambar10,
        griyaKostGambar11,
      ],

      shortDescription:
        'A full-stack web application for managing rooms, tenants, payments, finances, and reports for Griya Kost ITERA.',

      description:
        'Griya Kost is a full-stack web-based management system developed for Griya Kost ITERA to support and simplify its daily administrative operations. The project was developed to address the limitations of the previous manual management process, which relied on Excel for recording and managing room, tenant, payment, and financial data. This approach made data management more time-consuming and prone to input errors, inconsistencies, and difficulties in monitoring information. To address these challenges, the system provides centralized management for room data, tenant records, rental information, payment transactions, financial records, and reports through a responsive dashboard. The application uses a REST API architecture, JWT authentication, and a MySQL database, with the frontend and backend deployed online to provide a more efficient and organized management process.',

      technologies: [
        'React',
        'Vite',
        'JavaScript',
        'Node.js',
        'Express.js',
        'REST API',
        'MySQL',
      ],

      role: 'Full-Stack Web Developer',
      year: '2026',

      github:
        'https://github.com/setiawanwibi/griyakost',

      demo:
        'https://griyakost-ten.vercel.app/',

      systemDemo:
        'https://drive.google.com/drive/folders/1SkUtSQwCgW8vudqVXYEPdTaAOyMoP_mP?usp=drive_link',
    },

    // ================================
    // PROJECT 03
    // GO-LEARN
    // ================================
    {
      id: 3,
      number: '04',
      category: 'Web Development',
      systemName: 'Golearn',
      title: 'Online Learning Platform',

      cover: goLearnGambar1,

      images: [
        goLearnGambar1,
        goLearnGambar2,
        goLearnGambar3,
        goLearnGambar4,
        goLearnGambar5,
        goLearnGambar6,
      ],

      shortDescription:
        'A web-based learning platform designed to provide accessible online learning through structured educational content and learning packages.',

      description:
        'Go-Learn is a web-based online learning platform developed to provide users with accessible and structured educational content. The platform includes learning content, learning packages, user authentication, and an informative About page. The system was designed with a clean and responsive interface to create a simple and comfortable learning experience.',

      technologies: [
        'PHP',
        'MySQL',
        'HTML',
        'CSS',
        'JavaScript',
        'Figma',
      ],

      role: 'Full-Stack Web Developer',
      year: '2024',

      github:
        'https://github.com/setiawanwibi/go-learn',

      demo:
        'https://golearn.free.je/',
    },


    // ================================
    // PROJECT 04
    // SAVORHOUSE
    // ================================
    {
      id: 4,
      number: '05',
      category: 'UI/UX Design',

      systemName: 'Savorhouse',

      title: 'Restaurant Ordering Platform',

      cover: savorhouseCover,

      images: [
        savorhouseCover,
        savorhouseDashboard,
        savorhouseMenu,
        savorhouseRegister,
        savorhouseOrder,
        savorhousePayment,
      ],

      shortDescription:
        'A restaurant website concept designed to create a simple, intuitive, and visually consistent experience from menu discovery to payment.',

      description:
        'Savorhouse is a restaurant website UI/UX design concept focused on creating a clear and intuitive customer journey. The design covers menu exploration, customer registration, order management, and payment while maintaining a consistent visual identity across the platform.',

      technologies: [
        'Figma',
        'UI Design',
        'UX Design',
        'Prototyping',
      ],

      role: 'UI/UX Designer',
      year: '2025',

      figma:
        'https://www.figma.com/design/UjE7BehvBtobHyovG1g5iL/Savorhouse?node-id=0-1&p=f&m=draw',
    },


    // ================================
    // PROJECT 05
    // GADGETHUB
    // ================================
    {
      id: 5,
      number: '06',
      category: 'UI/UX Design',

      systemName: 'GadgetHub',

      title: 'E-Commerce Platform',

      cover: gadgetHubCover,

      images: [
        gadgetHubDesign,
      ],

      shortDescription:
        'An e-commerce website concept designed to provide a simple and intuitive shopping experience for browsing products, managing orders, and completing purchases.',

      description:
        'GadgetHub is an e-commerce UI/UX design concept focused on creating a clean and straightforward shopping experience. The design covers product discovery, user authentication, product management, shopping orders, and payment flow with a consistent visual interface.',

      technologies: [
        'Figma',
        'UI Design',
        'UX Design',
        'Prototyping',
      ],

      role: 'UI/UX Designer',
      year: '2024',

      figma:
        'https://www.figma.com/design/DXcehTtVDcRICHr6cBrley/Gadgethub---MPTI?node-id=0-1&p=f&t=8qz4MbHkNyfjD0ZB-0',
    },
  ]


  const filters = [
    'All',
    'Web Development',
    'UI/UX Design',
  ]


  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(
          (project) =>
            project.category === filter
        )


  // ================================
  // OPEN PROJECT
  // ================================
  const openProject = (project) => {
    setActiveProject(project)
    setActiveImage(0)
    document.body.style.overflow = 'hidden'
  }


  // ================================
  // CLOSE PROJECT
  // ================================
  const closeProject = () => {
    setActiveProject(null)
    setActiveImage(0)
    document.body.style.overflow = ''
  }


  // ================================
  // NEXT IMAGE
  // ================================
  const nextImage = (event) => {
    event?.stopPropagation()

    if (!activeProject) return

    setActiveImage((current) =>
      current ===
      activeProject.images.length - 1
        ? 0
        : current + 1
    )
  }


  // ================================
  // PREVIOUS IMAGE
  // ================================
  const previousImage = (event) => {
    event?.stopPropagation()

    if (!activeProject) return

    setActiveImage((current) =>
      current === 0
        ? activeProject.images.length - 1
        : current - 1
    )
  }


  return (
    <section
      id="projects"
      className="projects-section"
    >

      <div className="container">

        {/* ================================
            HEADING
        ================================ */}

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
            Selected things
            <span> I've built.</span>
          </h2>

          <p>
            A selection of projects combining
            software development, information systems,
            and user-centered design.
          </p>

        </motion.div>


        {/* ================================
            FILTER
        ================================ */}

        <div className="project-filter">

          {filters.map((item) => (

            <button
              key={item}

              className={
                filter === item
                  ? 'active'
                  : ''
              }

              onClick={() =>
                setFilter(item)
              }
            >
              {item}
            </button>

          ))}

        </div>


        {/* ================================
            PROJECT LIST
        ================================ */}

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
                    y: 30,
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

                  {/* COVER */}

                  <div className="project-cover">

                    <img
                      src={project.cover}
                      alt={project.title}
                    />

                    <span className="project-number">
                      {project.number}
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="project-content">

                    <div className="project-meta">

                      <span>
                        {project.category}
                      </span>

                      <span>
                        {project.year}
                      </span>

                    </div>


                    {/* SYSTEM NAME - UI/UX */}

                    {project.systemName && (

                      <h3 className="project-system-name">
                        {project.systemName}
                      </h3>

                    )}


                    <h3>
                      {project.title}
                    </h3>


                    <p>
                      {project.shortDescription}
                    </p>


                    {/* TECHNOLOGIES */}

                    <div className="project-technologies">

                      {project.technologies.map(
                        (technology) => (

                          <span
                            key={technology}
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>

                  </div>


                  {/* ACTIONS */}

                  <div className="project-actions">

                    {/* VIEW PROJECT */}

                    <button
                      className="project-view-btn"

                      onClick={(event) => {
                        event.stopPropagation()
                        openProject(project)
                      }}
                    >

                      View Project

                      <FiArrowUpRight />

                    </button>


                    {/* GITHUB */}

                    {project.github && (

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"

                        className="project-source-btn"

                        onClick={(event) =>
                          event.stopPropagation()
                        }
                      >

                        <FiGithub />

                        Source Code

                      </a>

                    )}


                    {/* LIVE WEB */}

                    {project.demo && (

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"

                        className="project-source-btn"

                        onClick={(event) =>
                          event.stopPropagation()
                        }
                      >

                        <FiExternalLink />

                        Web Access

                      </a>

                    )}


                    {/* FIGMA */}

                    {project.figma && (

                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"

                        className="project-source-btn"

                        onClick={(event) =>
                          event.stopPropagation()
                        }
                      >

                        <FiExternalLink />

                        View Figma

                      </a>

                    )}

                    {project.systemDemo && (
                      <a
                        href={project.systemDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-source-btn"
                        onClick={(event) =>
                          event.stopPropagation()
                        }
                      >
                        <FiExternalLink />
                        Demo System
                      </a>
                    )}
                  </div>

                </motion.article>

              )
            )}

          </AnimatePresence>

        </div>

      </div>


      {/* ================================
          PROJECT MODAL
      ================================ */}

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
                y: 30,
                scale: 0.98,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}

              transition={{
                duration: 0.35,
              }}

              onClick={(event) =>
                event.stopPropagation()
              }
            >

              {/* CLOSE */}

              <button
                className="project-modal-close"

                onClick={closeProject}

                aria-label="Close project"
              >

                <FiX />

              </button>


              {/* NUMBER */}

              <span className="modal-project-number">
                {activeProject.number}
              </span>


              {/* CATEGORY */}

              <span className="modal-project-category">
                {activeProject.category}
              </span>


              {/* TITLE */}

              <h3>

                {activeProject.systemName && (
                  <>
                    {activeProject.systemName}

                    <br />
                  </>
                )}

                {activeProject.title}

              </h3>


              {/* INFO */}

              <div className="modal-project-info">

                <span>
                  {activeProject.role}
                </span>

                <span>
                  {activeProject.year}
                </span>

              </div>


              {/* ================================
                  GALLERY
              ================================ */}

              <div className="modal-project-gallery">

                <div className="modal-gallery-main">

                  <img
                    src={
                      activeProject.images[
                        activeImage
                      ]
                    }

                    alt={`${activeProject.title} ${
                      activeImage + 1
                    }`}
                  />


                  {activeProject.images.length > 1 && (
                    <>

                      {/* PREVIOUS */}

                      <button
                        className="gallery-nav gallery-prev"

                        onClick={previousImage}

                        aria-label="Previous image"
                      >

                        <FiChevronLeft />

                      </button>


                      {/* NEXT */}

                      <button
                        className="gallery-nav gallery-next"

                        onClick={nextImage}

                        aria-label="Next image"
                      >

                        <FiChevronRight />

                      </button>


                      {/* COUNTER */}

                      <div className="gallery-counter">

                        {String(
                          activeImage + 1
                        ).padStart(2, '0')}

                        {' / '}

                        {String(
                          activeProject.images.length
                        ).padStart(2, '0')}

                      </div>

                    </>
                  )}

                </div>


                {/* THUMBNAILS */}

                {activeProject.images.length > 1 && (

                  <div className="modal-gallery-thumbnails">

                    {activeProject.images.map(
                      (image, index) => (

                        <button
                          key={index}

                          className={
                            activeImage === index
                              ? 'active'
                              : ''
                          }

                          onClick={() =>
                            setActiveImage(index)
                          }
                        >

                          <img
                            src={image}
                            alt={`Preview ${
                              index + 1
                            }`}
                          />

                        </button>

                      )
                    )}

                  </div>

                )}

              </div>


              {/* DESCRIPTION */}

              <p className="modal-project-description">
                {activeProject.description}
              </p>


              {/* UI/UX PROCESS */}

              {activeProject.category ===
                'UI/UX Design' && (

                <div className="modal-project-stack">

                  <h4>
                    Design Process
                  </h4>

                  <div>

                    <span>
                      User Flow
                    </span>

                    <span>
                      Wireframing
                    </span>

                    <span>
                      UI Design
                    </span>

                    <span>
                      Prototyping
                    </span>

                  </div>

                </div>

              )}


              {/* TECHNOLOGIES */}

              <div className="modal-project-stack">

                <h4>

                  {activeProject.category ===
                  'UI/UX Design'
                    ? 'Tools & Skills'
                    : 'Technologies'}

                </h4>


                <div>

                  {activeProject.technologies.map(
                    (technology) => (

                      <span
                        key={technology}
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>


              {/* ACTIONS */}

              <div className="modal-project-actions">

                {/* GITHUB */}

                {activeProject.github && (

                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <FiGithub />

                    Source Code

                  </a>

                )}


                {/* FIGMA */}

                {activeProject.figma && (

                  <a
                    href={activeProject.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <FiExternalLink />

                    View Figma Prototype

                  </a>

                )}


                {/* LIVE DEMO */}

                {activeProject.demo && (

                  <a
                    href={activeProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <FiExternalLink />

                    Live Demo

                  </a>

                )}

                {/* SYSTEM DEMO */}
                {activeProject.systemDemo && (
                  <a
                    href={activeProject.systemDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                    Demo System
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