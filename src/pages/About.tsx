import './About.css'

const About = () => {
  return (
    <div className="about-page page">
      <section className="about-hero">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-border"></div>
                <p className="placeholder-text">Photo</p>
              </div>
            </div>

            <div className="about-text">
              <h1 className="page-title">About Naofumi Ezaki</h1>
              <h2 className="role-title">Chief Architect</h2>
              
              <div className="bio-section">
                <p className="bio-text">
                  Naofumi Ezaki is our esteemed Chief Architect, leading the technical vision and 
                  architectural direction of our organization. With his exceptional expertise and 
                  innovative mindset, he has been instrumental in shaping our technology landscape.
                </p>
                
                <p className="bio-text">
                  Known for his mentorship and leadership, Naofumi inspires the team to push 
                  boundaries and achieve excellence. His dedication to fostering a collaborative 
                  environment has made him not just a leader, but a role model for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="container">
          <div className="section-header">
            <div className="header-line"></div>
            <h2 className="section-title">Achievements & Impact</h2>
            <div className="header-line"></div>
          </div>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-number">01</div>
              <h3>Technical Leadership</h3>
              <p>Leading architectural decisions and technical strategy across the organization</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-number">02</div>
              <h3>Team Mentorship</h3>
              <p>Guiding and mentoring team members to grow their technical and leadership skills</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-number">03</div>
              <h3>Innovation</h3>
              <p>Driving innovation and implementing cutting-edge solutions</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-number">04</div>
              <h3>Project Excellence</h3>
              <p>Delivering successful projects with outstanding quality and performance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="qualities-section">
        <div className="container">
          <div className="section-header">
            <div className="header-line"></div>
            <h2 className="section-title">Professional Excellence</h2>
            <div className="header-line"></div>
          </div>
          <div className="qualities-list">
            <div className="quality-item">
              <div className="quality-number">I</div>
              <div className="quality-content">
                <h3>Visionary Thinking</h3>
                <p>Always ahead of the curve with innovative solutions and strategic planning</p>
              </div>
            </div>

            <div className="quality-item">
              <div className="quality-number">II</div>
              <div className="quality-content">
                <h3>Collaborative Spirit</h3>
                <p>Fosters teamwork and creates an inclusive environment where everyone thrives</p>
              </div>
            </div>

            <div className="quality-item">
              <div className="quality-number">III</div>
              <div className="quality-content">
                <h3>Knowledge Sharing</h3>
                <p>Passionate about teaching and sharing expertise with the entire team</p>
              </div>
            </div>

            <div className="quality-item">
              <div className="quality-number">IV</div>
              <div className="quality-content">
                <h3>Problem Solver</h3>
                <p>Tackles complex challenges with creativity and determination</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

