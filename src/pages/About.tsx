import './About.css'

const About = () => {
  return (
    <div className="about-page page">
      <section className="about-hero">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="image-container">
                <img src="/hero.png" alt="Naofumi Ezaki" className="about-photo" />
              </div>
            </div>

            <div className="about-text">
              <h1 className="page-title">About Naofumi Ezaki</h1>
              <h2 className="role-title">Chief Architect · Our Silent Guardian</h2>
              
              <div className="bio-section">
                <p className="bio-text">
                  Naofumi Ezaki is the superhero our company didn't know it needed, but can't imagine 
                  working without. Like a silent guardian, he tackles the toughest challenges behind 
                  the scenes, ensuring everything runs smoothly while the rest of us sleep peacefully.
                </p>
                
                <p className="bio-text">
                  With his exceptional intelligence and problem-solving prowess, Naofumi is the person 
                  we all turn to when facing the impossible. No matter how complex the issue, he has 
                  the answer. His calm demeanor and brilliant solutions have saved countless projects 
                  and guided us through the most challenging technical storms.
                </p>

                <p className="bio-text">
                  He doesn't need a cape—his keyboard is his superpower, and his wisdom is our shield. 
                  Every day, Naofumi silently protects our systems, elevates our code, and empowers 
                  every team member to be their best.
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
            <h2 className="section-title">Superpowers & Impact</h2>
            <div className="header-line"></div>
          </div>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-number">01</div>
              <h3>Crisis Management</h3>
              <p>Swoops in to rescue any project from disaster, solving critical issues that keep us running</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-number">02</div>
              <h3>The Go-To Problem Solver</h3>
              <p>The first person we call when stuck—always has the answer, no matter how complex</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-number">03</div>
              <h3>Silent Guardian</h3>
              <p>Quietly fixes issues behind the scenes before they become problems for anyone else</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-number">04</div>
              <h3>Brilliant Mind</h3>
              <p>Exceptional intelligence that cuts through complexity like a hot knife through butter</p>
            </div>
          </div>
        </div>
      </section>

      <section className="qualities-section">
        <div className="container">
          <div className="section-header">
            <div className="header-line"></div>
            <h2 className="section-title">Why He's Our Hero</h2>
            <div className="header-line"></div>
          </div>
          <div className="qualities-list">
            <div className="quality-item">
              <div className="quality-number">I</div>
              <div className="quality-content">
                <h3>Always There When We Need Him</h3>
                <p>The reliable force we turn to in times of crisis—always ready with a solution</p>
              </div>
            </div>

            <div className="quality-item">
              <div className="quality-number">II</div>
              <div className="quality-content">
                <h3>Extraordinarily Smart</h3>
                <p>Possesses the rare combination of deep technical knowledge and practical wisdom</p>
              </div>
            </div>

            <div className="quality-item">
              <div className="quality-number">III</div>
              <div className="quality-content">
                <h3>Calm Under Pressure</h3>
                <p>When chaos strikes, he remains composed and guides us to safety with clarity</p>
              </div>
            </div>

            <div className="quality-item">
              <div className="quality-number">IV</div>
              <div className="quality-content">
                <h3>Our Safety Net</h3>
                <p>Works tirelessly behind the scenes, ensuring we can all do our best work worry-free</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

