import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

const SLOGANS = [
  'Analysing requirements strategically.',
  'Crafting empathetic, logical experience.',
  'Creating practical, impactful solutions.',
]

const PROJECTS = [
  {
    company: 'SAIC Finance',
    title: 'Online Car Loan Process',
    desc: 'I integrated online and offline processes to guide users through the entire car loan journey.',
    img: 'car_loan_home.png',
    alt: 'car_loan-image',
    url: './projects/Loan.html',
  },
  {
    company: 'Kuaiqian',
    title: 'UX Request Management',
    desc: 'I designed a platform to streamline and standardise the request handling process.',
    img: 'requestmanagement.png',
    alt: 'requestmanagement',
    url: './projects/RequestManagement.html',
  },
  {
    company: 'SAIC Finance',
    title: 'Repayment Query',
    desc: 'I provided customers with more convenient post-loan services and boosted company revenue.',
    img: 'repayment.png',
    alt: 'repayment-image',
    url: './projects/Repayment.html',
  },
  {
    company: 'Kuaiqian International',
    title: 'Design System',
    desc: 'I established a unified design system to enhance both design and development efficiency.',
    img: 'ux_system_home.png',
    alt: 'ux_system-image',
    url: './projects/DesignSystem.html',
  },
  {
    company: 'Ministry of Justice & MUXD',
    title: 'Internal Comms Platform',
    desc: 'We created a centralised communication experience for the internal repository.',
    img: 'sharepoint_home.png',
    alt: 'sharepoint_home-image',
    url: './projects/SharePoint.html',
  },
  {
    company: 'Infographic',
    title: 'Inside No.9',
    desc: 'I designed a infographic to highlight the most interesting parts of my favourite show.',
    img: 'inside9.png',
    alt: 'inside9-image',
    url: './projects/Inside9.html',
  },
]

const PLATFORMS = [
  {
    icon: 'platform-icon1.png',
    title: 'Ecomm sites/apps',
    content:
      'I designed travel and medical e-commerce products from scratch, helping startups and innovative projects secure funding.',
  },
  {
    icon: 'platform-icon2.png',
    title: 'Financial apps',
    content:
      'I streamlined the car loan, investment, and POS service apps, boosting user satisfaction and increasing company revenue.',
  },
  {
    icon: 'platform-icon3.png',
    title: 'B2B SaaS platform',
    content:
      'I contributed to the cross-border payment platform and POS backend, simplifying workflows and building customer trust.',
  },
  {
    icon: 'platform-icon4.png',
    title: 'Internal platform',
    content:
      'I improved the customer service and UX management platforms, enabling teams to work more efficiently.',
  },
  {
    icon: 'platform-icon5.png',
    title: 'Digital marketing',
    content:
      'I designed digital posters, banners, marketing pages, and the company calendar, increasing engagement.',
  },
  {
    icon: 'platform-icon6.png',
    title: 'Design unifying',
    content:
      'I revamped various designs and unified design systems, ensuring consistency and boosting efficiency.',
  },
]

function PlatformItem({ icon, title, content }) {
  const [active, setActive] = useState(false)
  return (
    <div className={`platform${active ? ' active' : ''}`}>
      <div className="platform-inner-title-container" onClick={() => setActive((a) => !a)}>
        <img src={`./assets/images/${icon}`} alt="platform-icon" className="platform-icon" />
        <p className="platform-inner-title">{title}</p>
      </div>
      <div className="platform-content-container">
        <p className="platform-content">{content}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [sloganIndex, setSloganIndex] = useState(0)
  const [sloganClass, setSloganClass] = useState('slogan-enter')

  const [videoOpen, setVideoOpen] = useState(false)
  const [showReplay, setShowReplay] = useState(false)
  const videoRef = useRef(null)

  // 轮播 slogan
  useEffect(() => {
    const timer = setInterval(() => {
      setSloganClass('slogan-exit')
      setTimeout(() => {
        setSloganIndex((i) => (i + 1) % SLOGANS.length)
        setSloganClass('slogan-enter')
      }, 500)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const openVideo = () => {
    setVideoOpen(true)
    setShowReplay(false)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play()
      }
    }, 0)
  }

  const closeVideo = () => {
    setVideoOpen(false)
    if (videoRef.current) videoRef.current.pause()
    if (document.exitFullscreen) document.exitFullscreen()
  }

  const replayVideo = () => {
    setShowReplay(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  const downloadResume = () => {
    window.open('./assets/files/Resume_Mingda Lin.pdf', '_blank')
    const link = document.createElement('a')
    link.href = './assets/files/Resume_Mingda Lin.pdf'
    link.download = 'Resume_Mingda Lin.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <Navbar />

      <div className="page-container">
        {/* Slogan banner */}
        <div className="banner-text-container">
          <div className="slogan-container">
            <div className={`slogan ${sloganClass}`}>
              {SLOGANS[sloganIndex]}
            </div>
          </div>
        </div>

        {/* Greeting */}
        <div className="greeting">
          <img src="./assets/images/shake.png" alt="shake-image" className="shake-image" />
          <h1 className="hi">Hi, I&apos;m Mingda</h1>
        </div>

        {/* Introduction */}
        <div className="introduction">
          <p>
            I&apos;ve been designing for 8+ years across fintech, enterprise systems, and e-commerce
            on B2C and B2B digital products, untangling messy workflows and creating practical
            solutions.
          </p>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button className="download_resume" onClick={downloadResume}>
            Download Resume
          </button>
          <button className="watchvideo myvideo" onClick={openVideo}>
            Watch My Video
            <div className="pulse-circle">
              <img
                src="./assets/images/triangle-white.png"
                alt="triangle-image"
                className="triangle-image"
              />
            </div>
          </button>
        </div>

        {/* Video modal */}
        {videoOpen && (
          <>
            <div className="overlay" id="overlay" onClick={closeVideo}></div>
            <div className="video-container" id="videoContainer">
              <video
                ref={videoRef}
                id="myVideo"
                controls
                controlsList="nodownload"
                onEnded={() => setShowReplay(true)}
              >
                <source src="./assets/video/myvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button id="closeBtn" className="close-btn" onClick={closeVideo}>
                &times;
              </button>
              {showReplay && (
                <button id="replayBtn" className="replay-btn" onClick={replayVideo}>
                  &#8634;
                </button>
              )}
            </div>
          </>
        )}

        {/* Projects section */}
        <div className="page1-project-container">
          <div className="selected">
            <h2 className="project">Selected Projects</h2>
          </div>

          <div className="container-max1280">
            <div className="projects-class">
              {PROJECTS.map((p) => (
                <div
                  key={p.title}
                  className="project-container"
                  onClick={() => (window.location.href = p.url)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="project-image-container">
                    <img src={`./assets/images/${p.img}`} alt={p.alt} className="project-image" />
                  </div>
                  <div className="project-text-container">
                    <p className="company-name">{p.company}</p>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-introduction">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop platform cards */}
            <div className="platform-container">
              <div className="platform-title-container">
                <h2 className="platform-title">All the Designs I&apos;ve Crafted</h2>
              </div>
              <div className="platform-exter-container">
                {PLATFORMS.map((p) => (
                  <PlatformItem key={p.title} {...p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile platform cards */}
      <div className="mobile-platform-container">
        <div className="platform-title-container">
          <h2 className="platform-title">All My Design Works</h2>
        </div>
        {PLATFORMS.map((p) => (
          <PlatformItem key={p.title} {...p} />
        ))}
      </div>

      <Footer />
      <BackToTop />
    </>
  )
}
