const sendEmail = () => {
  window.location.href = 'mailto:claudia.mingdalin@outlook.com?subject=Hey%20Mingda'
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-class">
        <img src="./assets/images/footer1.png" alt="footer-image" className="footer-image" />
        <div className="footer-r1">
          <div className="left-group">
            <h2 className="c1">Better pick</h2>
            <img src="./assets/images/signauto.png" alt="footer-signauto" className="footer-signauto" />
          </div>
          <div className="right-group">
            <img
              src="./assets/images/footer-email.png"
              alt="footer-email"
              className="footer-email"
              onClick={sendEmail}
              style={{ cursor: 'pointer' }}
            />
            <a href="https://www.linkedin.com/in/mingda-lin/" target="_blank" rel="noreferrer">
              <img src="./assets/images/Linkdein.png" alt="footer-linkdein" className="footer-linkdein" />
            </a>
            <a href="https://www.behance.net/mingdalin" target="_blank" rel="noreferrer">
              <img src="./assets/images/behence.png" alt="footer-behence" className="footer-behence" />
            </a>
          </div>
        </div>
        <div className="footer-r2">
          <p className="cr1">
            Let&apos;s connect and collaborate on exciting ideas, projects, and{' '}
            <br />everything design to create better experiences together!
          </p>
          <p className="cr2">Claudia.mingdalin@outlook.com<br />(+64) 20 492 9375</p>
        </div>
      </div>

      <div className="footer-mobile-container">
        <div className="row1-container">
          <p className="row1">Better pick</p>
          <img src="./assets/images/signauto.png" alt="footer-signauto" className="footer-signauto" />
        </div>
        <div className="row2-container">
          <p className="row2">Let&apos;s connect and collaborate on exciting</p>
          <p className="row2">ideas, projects, and everything design!</p>
        </div>
        <div className="row3-container">
          <img
            src="./assets/images/footer-email.png"
            alt="footer-email"
            className="footer-email"
            onClick={sendEmail}
            style={{ cursor: 'pointer' }}
          />
          <a href="https://www.linkedin.com/in/mingda-lin/" target="_blank" rel="noreferrer">
            <img src="./assets/images/Linkdein.png" alt="footer-linkdein" className="footer-linkdein" />
          </a>
          <a href="https://www.behance.net/mingdalin" target="_blank" rel="noreferrer">
            <img src="./assets/images/behence.png" alt="footer-behence" className="footer-behence" />
          </a>
        </div>
        <div className="row4-container">
          <p className="row4">Claudia.mingdalin@outlook.com</p>
          <p className="row4">(+64) 20 492 9375</p>
        </div>
      </div>
    </footer>
  )
}
