import { motion } from 'framer-motion'
import {
  FiCode,
  FiDatabase,
  FiPenTool,
  FiTool,
  FiUsers,
  FiGlobe,
  FiImage,
  FiMonitor,
  FiGitBranch,
  FiGithub,
  FiSend,
  FiLayers,
} from 'react-icons/fi'

function Skills() {
  const skillGroups = [
    {
      icon: <FiCode />,
      title: 'Development',
      description:
        'Technologies I use to build responsive and functional web applications.',
      skills: [
        {
          name: 'JavaScript',
          icon: <FiCode />,
          className: 'javascript',
        },
        {
          name: 'React.js',
          icon: <FiLayers />,
          className: 'react',
        },
        {
          name: 'HTML',
          icon: <FiCode />,
          className: 'html',
        },
        {
          name: 'CSS',
          icon: <FiCode />,
          className: 'css',
        },
        {
          name: 'Tailwind CSS',
          icon: <FiLayers />,
          className: 'tailwind',
        },
      ],
    },

    {
      icon: <FiDatabase />,
      title: 'Backend & Database',
      description:
        'Tools and technologies for developing application logic and managing data.',
      skills: [
        {
          name: 'PHP',
          icon: <FiCode />,
          className: 'php',
        },
        {
          name: 'Laravel',
          icon: <FiLayers />,
          className: 'laravel',
        },
        {
          name: 'MySQL',
          icon: <FiDatabase />,
          className: 'mysql',
        },
        {
          name: 'REST API',
          icon: <FiGlobe />,
          className: 'rest-api',
        },
        {
          name: 'SQL',
          icon: <FiDatabase />,
          className: 'sql',
        },
      ],
    },

    {
      icon: <FiPenTool />,
      title: 'UI / UX & Design',
      description:
        'Design tools I use to translate ideas into clear and user-friendly interfaces.',
      skills: [
        {
          name: 'Figma',
          icon: <FiPenTool />,
          className: 'figma',
        },
        {
          name: 'UI/UX Design',
          icon: <FiPenTool />,
          className: 'uiux',
        },
        {
          name: 'Adobe Photoshop',
          icon: <FiImage />,
          className: 'photoshop',
        },
        {
          name: 'Canva',
          icon: <FiPenTool />,
          className: 'canva',
        },
      ],
    },

    {
      icon: <FiTool />,
      title: 'Tools & Workflow',
      description:
        'Tools that support my development workflow and project collaboration.',
      skills: [
        {
          name: 'Git',
          icon: <FiGitBranch />,
          className: 'git',
        },
        {
          name: 'GitHub',
          icon: <FiGithub />,
          className: 'github',
        },
        {
          name: 'VS Code',
          icon: <FiMonitor />,
          className: 'vscode',
        },
        {
          name: 'Postman',
          icon: <FiSend />,
          className: 'postman',
        },
        {
          name: 'Vercel',
          icon: <FiGlobe />,
          className: 'vercel',
        },
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* Card Header */}
              <div className="skill-card-top">

                <motion.div
                  className="skill-icon"
                  whileHover={{
                    scale: 1.08,
                    rotate: -3,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  {group.icon}
                </motion.div>

                <span className="skill-index">
                  0{index + 1}
                </span>

              </div>


              {/* Card Content */}
              <h3>
                {group.title}
              </h3>

              <p>
                {group.description}
              </p>


              {/* Technology List */}
              <div className="skill-list">

                {group.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className={`skill-item ${skill.className}`}
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 18,
                    }}
                  >

                    <span className="skill-item-icon">
                      {skill.icon}
                    </span>

                    <span className="skill-item-name">
                      {skill.name}
                    </span>

                  </motion.span>
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
        >

          {/* Soft Skills Header */}
          <div className="soft-skills-heading">

            <motion.div
              className="soft-skills-icon"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FiUsers />
            </motion.div>

            <div>
              <span>
                BEYOND TECHNICAL SKILLS
              </span>

              <h3>
                How I work
              </h3>
            </div>

          </div>


          {/* Soft Skills List */}
          <div className="soft-skills-list">

            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.25 + index * 0.06,
                }}
                whileHover={{
                  y: -3,
                }}
              >
                {skill}
              </motion.span>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Skills