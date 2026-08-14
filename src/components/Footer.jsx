import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
            >
              SW<span>.</span>
            </a>

            <p>
              Software Engineer · Web Developer · UI/UX Designer
            </p>

          </div>

          <div className="footer-socials">

            <a
              href="https://github.com/setiawanwibi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-setiawan-wibisono-37a047314/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

            <a
              href="mailto:wibi202229@gmail.com"
              aria-label="Email"
            >
              <FiMail />
            </a>

          </div>

          <button
            className="back-to-top"
            onClick={scrollToTop}
          >
            <span>
              Back to top
            </span>

            <FiArrowUp />
          </button>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 Muhammad Setiawan Wibisono
          </span>

          <span>
            Built with React · Deployed on Vercel
          </span>

        </div>

      </div>

    </footer>
  )
}

export default Footer