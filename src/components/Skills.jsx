import { motion } from 'framer-motion'
import {
  FiCode,
  FiDatabase,
  FiPenTool,
  FiTool,
  FiUsers,
} from 'react-icons/fi'

function Skills() {
  const skillGroups = [
    {
      icon: <FiCode />,
      title: 'Development',
      description:
        'Technologies I use to build responsive and functional web applications.',
      skills: [
        'JavaScript',
        'React.js',
        'HTML',
        'CSS',
        'Tailwind CSS',
      ],
    },
    {
      icon: <FiDatabase />,
      title: 'Backend & Database',
      description:
        'Tools and technologies for developing application logic and managing data.',
      skills: [
        'PHP',
        'Laravel',
        'MySQL',
        'REST API',
        'SQL',
      ],
    },
    {
      icon: <FiPenTool />,
      title: 'UI / UX & Design',
      description:
        'Design tools I use to translate ideas into clear and user-friendly interfaces.',
      skills: [
        'Figma',
        'UI/UX Design',
        'Adobe Photoshop',
        'Canva',
      ],
    },
    {
      icon: <FiTool />,
      title: 'Tools & Workflow',
      description:
        'Tools that support my development workflow and project collaboration.',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Postman',
        'Vercel',
      ],
    },
  ]

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Adaptability',
    'Time Management',
    'Creativity',
    'Continuous Learning',
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        {/* Heading */}

        <motion.div
          className="section-heading skills-heading"
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
            EXPERTISE
          </span>

          <h2>
            Tools I use to
            <span> build.</span>
          </h2>

          <p>
            A practical set of technologies, tools, and
            skills I've developed through academic,
            professional, and personal projects.
          </p>
        </motion.div>

        {/* Skill Groups */}

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.title}
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
                delay: index * 0.08,
              }}
            >

              <div className="skill-card-top">

                <div className="skill-icon">
                  {group.icon}
                </div>

                <span className="skill-index">
                  0{index + 1}
                </span>

              </div>

              <h3>
                {group.title}
              </h3>

              <p>
                {group.description}
              </p>

              <div className="skill-list">

                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </motion.article>
          ))}

        </div>

        {/* Soft Skills */}

        <motion.div
          className="soft-skills"
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
            duration: 0.6,
          }}
        >

          <div className="soft-skills-heading">

            <div className="soft-skills-icon">
              <FiUsers />
            </div>

            <div>
              <span>
                BEYOND TECHNICAL SKILLS
              </span>

              <h3>
                How I work
              </h3>
            </div>

          </div>

          <div className="soft-skills-list">

            {softSkills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Skills