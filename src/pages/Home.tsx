import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="decorative-line"></div>

          <h1 className="hero-title">Happy Birthday</h1>

          <h2 className="hero-name">Naofumi Ezaki</h2>

          <p className="hero-subtitle">Chief Architect</p>

          <div className="decorative-line"></div>

          <div className="hero-message">
            <p>
              Wishing you a wonderful birthday filled with success, inspiration, and memorable moments. 
              Thank you for your exceptional leadership and unwavering dedication.
            </p>
          </div>

          <div className="hero-cta">
            <Link to="/messages" className="cta-button primary">
              Birthday Wishes
            </Link>
            <Link to="/gallery" className="cta-button secondary">
              Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="quick-links">
        <div className="container">
          <div className="section-header">
            <div className="header-line"></div>
            <h2 className="section-title">Celebration</h2>
            <div className="header-line"></div>
          </div>
          <div className="links-grid">
            <Link to="/about" className="link-card">
              <div className="card-number">01</div>
              <h3>About</h3>
              <p>Learn more about our Chief Architect</p>
            </Link>

            <Link to="/gallery" className="link-card">
              <div className="card-number">02</div>
              <h3>Gallery</h3>
              <p>Memorable moments captured</p>
            </Link>

            <Link to="/videos" className="link-card">
              <div className="card-number">03</div>
              <h3>Messages</h3>
              <p>Heartfelt birthday wishes</p>
            </Link>

            <Link to="/timeline" className="link-card">
              <div className="card-number">04</div>
              <h3>Timeline</h3>
              <p>Journey and milestones</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

