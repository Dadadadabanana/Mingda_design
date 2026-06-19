import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

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
    company: 'Kuaiqian International',
    title: 'UX Request Management',
    desc: 'I designed a platform to streamline and standardise the request handling process.',
    img: 'requestmanagement.png',
    alt: 'designmanagement-image',
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
    title: 'SaaS Platform Design',
    desc: 'I established a unified design system to enhance both design and development efficiency.',
    img: 'ux_system_home.png',
    alt: 'ux_system_home-image',
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

export default function Projects() {
  return (
    <>
      <Navbar />

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
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  )
}
