import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)
  const btnRef = useRef(null)

  const linkClass = (path) =>
    `nav__link${location.pathname === path ? ' active' : ' notactive'}`

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!mobileOpen) return
      if (navRef.current?.contains(e.target) || btnRef.current?.contains(e.target)) return
      setMobileOpen(false)
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [mobileOpen])

  const close = () => setMobileOpen(false)

  return (
    <div className="header-container">
      <div className="header-box">
        <div className="logo">
          <Link to="/" className="nav__link autosign" onClick={close}>
            <img src="./assets/images/signauto.png" alt="autosign-image" className="autosign-image" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="nav-list">
            <li
              id="nav-item"
              className="main-nav-item"
              ref={navRef}
              style={mobileOpen ? { display: 'block' } : undefined}
            >
              <ul className="nav-main-list">
                <li className="list-item">
                  <Link to="/" className={linkClass('/')} onClick={close}>Home</Link>
                </li>
                <li className="list-item">
                  <Link to="/projects" className={linkClass('/projects')} onClick={close}>Projects</Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className={linkClass('/about')} onClick={close}>About Me</Link>
                </li>
              </ul>
            </li>
            <li className="main-nav-button">
              <div className="button-box">
                <button
                  className="send-email"
                  onClick={() => { window.location.href = 'mailto:claudia.mingdalin@outlook.com?subject=Hey%20Mingda' }}
                >
                  Send<img src="./assets/images/email.png" alt="email-image" className="email-image" />
                </button>
              </div>
            </li>
            <li className="phone-show">
              <div
                ref={btnRef}
                id="nav-btn"
                className="nav-btn"
                onClick={() => setMobileOpen((o) => !o)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
