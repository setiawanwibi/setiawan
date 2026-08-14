import { motion } from 'framer-motion'
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiMonitor,
  FiArrowUpRight,
} from 'react-icons/fi'

function Profile() {
  const focusAreas = [
    {
      icon: <FiCode />,
      title: 'Web Development',
      description:
        'Building responsive and functional web applications with modern development practices.',
    },
    {
      icon: <FiMonitor />,
      title: 'Software Development',
      description:
        'Turning real-world requirements into practical and maintainable digital solutions.',
    },
    {
      icon: <FiLayout />,
      title: 'UI/UX Design',
      description:
        'Designing clean interfaces with a focus on usability, consistency, and user experience.',
    },
    {
      icon: <FiDatabase />,
      title: 'Database & Systems',
      description:
        'Working with structured data, relational databases, and information systems.',
    },
  ]

  return (
    <section id="about" className="profile-section">
      <div className="container">

        {/* Section Header */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            PROFILE
          </span>

          <h2>
            A little about
            <span> me.</span>
          </h2>

          <p>
            A closer look at my background, interests, and
            the areas I enjoy working in.
          </p>
        </motion.div>

        {/* Main Profile */}
        <div className="profile-grid">

          <motion.div
            className="profile-intro"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="profile-number">
              01
            </span>

            <h3>
              Computer Science graduate
              <br />
              with a passion for
              <span> digital solutions.</span>
            </h3>

            <p>
              I am a Computer Science graduate from Universitas
              Lampung with an interest in web development,
              software engineering, UI/UX design, and information
              systems.
            </p>

            <p>
              Throughout my academic journey and project
              experience, I have worked on various digital
              solutions ranging from web-based information
              systems to interface design. I enjoy understanding
              problems, exploring technologies, and turning ideas
              into useful applications.
            </p>

            <a
              href="#experience"
              className="text-link"
            >
              Explore my experience
              <FiArrowUpRight />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="profile-stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="stat-card">
              <span>Graduated</span>
              <strong>2026</strong>
              <small>Computer Science</small>
            </div>

            <div className="stat-card">
              <span>Academic</span>
              <strong>3.54</strong>
              <small>GPA / 4.00</small>
            </div>

            <div className="stat-card stat-card-wide">
              <span>Education</span>
              <strong>
                Universitas Lampung
              </strong>
              <small>
                Computer Science · FMIPA
              </small>
            </div>

          </motion.div>

        </div>

        {/* Focus Areas */}
        <motion.div
          className="focus-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="section-label">
              WHAT I DO
            </span>

            <h3>
              Areas I enjoy
              <span> working in.</span>
            </h3>
          </div>
        </motion.div>

        <div className="focus-grid">

          {focusAreas.map((item, index) => (
            <motion.div
              className="focus-card"
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="focus-icon">
                {item.icon}
              </div>

              <div>
                <span className="focus-index">
                  0{index + 1}
                </span>

                <h4>{item.title}</h4>

                <p>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Profile