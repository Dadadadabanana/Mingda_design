import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

const TOOLS_ROW1 = [
  { src: 'figma.png', alt: 'figma-image' },
  { src: 'xure.png', alt: 'xure-image' },
  { src: 'sketch.png', alt: 'sketch-image' },
  { src: 'photoshop.png', alt: 'photoshop-image' },
  { src: 'Illustrator.png', alt: 'Illustrator-image' },
  { src: 'InDesign.png', alt: 'InDesign-image', className: 'InDesign' },
]

const TOOLS_ROW2 = [
  { src: 'webflow.png', alt: 'webflow-image' },
  { src: 'worldpress.png', alt: 'worldpress-image' },
  { src: 'miroboard.png', alt: 'miroboard-image' },
  { src: 'google_form.png', alt: 'google_form-image' },
  { src: 'jira.png', alt: 'jira-image' },
  { src: 'notion.png', alt: 'notion-image' },
]

export default function About() {
  return (
    <>
      <Navbar />

      <div className="page2-container">
        {/* Self intro */}
        <div className="self-intro-container">
          <div className="self-intro">
            <p className="paragraph">
              I&apos;m originally from Shanghai but now live in New Zealand. After graduating from
              university, I taught myself UI design and gradually transitioned into UX and product
              design. I approach design challenges by deeply understanding user needs, questioning
              assumptions, and refining solutions until they truly make sense. I drive
              implementation, track data, and iterate to improve outcomes.
            </p>
            <p className="paragraph">
              Last year, I moved to New Zealand to further my studies in User Experience Design at
              VUW. I&apos;ve settled in and love the rich cultural and artistic vibe here.
            </p>
            <p className="paragraph">
              I am practical and productive, specialising in creating simple yet effective designs.
              My legal background gives me a strong sense of logic and structure, which helps me
              analyse and solve problems efficiently. My natural creativity and eagerness to keep
              learning make my work solid and engaging.
            </p>
          </div>
          <div className="self-image-container">
            <img src="./assets/images/self-image.png" alt="self-image" className="self-image" />
          </div>
        </div>

        {/* Timeline */}
        <div className="name-container">
          <h2 className="title">My study and career journey</h2>
        </div>
        <div className="timeline-container">
          <img src="./assets/images/timeline.png" alt="timeline-image" className="timeline-image" />
        </div>

        {/* Toolkit & outside work */}
        <div className="third-container">
          <div className="third-box-right">
            <div className="skill-container">
              <h2 className="skill-title">My design toolkit</h2>
              <div className="skill-box-container">
                <div className="skill-box">
                  {TOOLS_ROW1.map((t) => (
                    <img
                      key={t.src}
                      src={`./assets/images/${t.src}`}
                      alt={t.alt}
                      className={`skill-image${t.className ? ` ${t.className}` : ''}`}
                    />
                  ))}
                </div>
                <div className="skill-box">
                  {TOOLS_ROW2.map((t) => (
                    <img
                      key={t.src}
                      src={`./assets/images/${t.src}`}
                      alt={t.alt}
                      className="skill-image"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="moreintro-container">
              <h2 className="skill-title">Outside of work...</h2>
              <p className="moreintor">
                I&apos;m a curious and energetic person who enjoys painting, weightlifting, dancing,
                and hiking. I used to be a spin instructor and have completed multiple marathons. I
                love sharing these passions with my partner and friends.
              </p>
            </div>
          </div>
          <div className="third-box-left">
            <div className="self-image-container">
              <img
                src="./assets/images/self-image2.png"
                alt="self-image"
                className="self-image"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  )
}
