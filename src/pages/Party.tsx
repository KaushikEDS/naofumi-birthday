import './Party.css'

const Party = () => {
  return (
    <div className="party-page page">
      <section className="party-hero">
        <div className="container">
          <div className="header-decoration">
            <div className="header-line"></div>
            <h1 className="page-title">Celebration</h1>
            <div className="header-line"></div>
          </div>
          <p className="page-subtitle">Looking forward to celebrating together</p>
        </div>
      </section>

      <section className="party-content">
        <div className="container">
          <div className="party-card">
            <div className="card-decoration top"></div>
            
            <div className="party-message">
              <h2 className="party-heading">When Will You Visit India?</h2>
              
              <div className="message-divider"></div>
              
              <p className="party-text">
                Dear Naofumi,
              </p>
              
              <p className="party-text">
                Your leadership and mentorship have made a lasting impact on all of us. 
                On this special occasion of your birthday, we have an important question 
                that the entire team is eager to know.
              </p>
              
              <div className="party-question">
                <span className="question-mark">?</span>
                <h3>When will you come to India and give us a party?</h3>
              </div>
              
              <p className="party-text closing">
                We would love to celebrate with you in person and experience your generous 
                hospitality. The team is looking forward to the day when you treat us to 
                a wonderful celebration and we can create unforgettable memories together!
              </p>

              <div className="message-divider"></div>

              <p className="party-signature">
                Awaiting your visit,<br/>
                Your Team in India
              </p>
            </div>

            <div className="card-decoration bottom"></div>
          </div>

          <div className="expectations-section">
            <h3 className="expectations-title">What We're Looking Forward To</h3>
            
            <div className="expectations-grid">
              <div className="expectation-item">
                <div className="expectation-number">I</div>
                <h4>Grand Celebration</h4>
                <p>A wonderful party hosted by you for the entire team</p>
              </div>

              <div className="expectation-item">
                <div className="expectation-number">II</div>
                <h4>Team Bonding</h4>
                <p>Celebrating together and strengthening our connections</p>
              </div>

              <div className="expectation-item">
                <div className="expectation-number">III</div>
                <h4>Indian Experience</h4>
                <p>Show you the vibrant culture and hospitality of India</p>
              </div>

              <div className="expectation-item">
                <div className="expectation-number">IV</div>
                <h4>Memorable Moments</h4>
                <p>Create lasting memories beyond the virtual workspace</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Party

