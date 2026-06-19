import { useState, useEffect, useRef } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = window.innerHeight

      let visible = currentY > 700

      // 向上滚动且未接近底部时隐藏
      if (currentY < lastScrollY.current && currentY + clientHeight < scrollHeight - 50) {
        visible = false
      }

      setShow(visible)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const beginTime = Date.now()
    const beginValue = document.documentElement.scrollTop
    const rAF = window.requestAnimationFrame || ((fn) => setTimeout(fn, 16))

    const frame = () => {
      const progress = (Date.now() - beginTime) / 500
      if (progress < 1) {
        document.documentElement.scrollTop = beginValue * (1 - progress)
        rAF(frame)
      } else {
        document.documentElement.scrollTop = 0
      }
    }
    rAF(frame)
  }

  return (
    <a
      className={`back-to-top${show ? ' show' : ''}`}
      title="Back to Top"
      onClick={scrollToTop}
      style={{ cursor: 'pointer' }}
    >
      <img src="./assets/images/backtotop.png" alt="Back to Top" className="back-to-top__image" />
    </a>
  )
}
