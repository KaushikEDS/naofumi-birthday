import './Timeline.css'

interface TimelineEvent {
  id: number
  year: string
  title: string
  description: string
  icon: string
}

const Timeline = () => {
  // Sample timeline events - customize with actual milestones
  const events: TimelineEvent[] = [
    {
      id: 1,
      year: '2015',
      title: 'Joined the Company',
      description: 'Started the journey as a Senior Developer, bringing fresh ideas and innovative solutions to the team.',
      icon: 'I'
    },
    {
      id: 2,
      year: '2017',
      title: 'Led Major Project',
      description: 'Successfully led the development of a critical system that transformed our infrastructure.',
      icon: 'II'
    },
    {
      id: 3,
      year: '2019',
      title: 'Promoted to Lead Architect',
      description: 'Recognition for outstanding technical leadership and architectural excellence.',
      icon: 'III'
    },
    {
      id: 4,
      year: '2021',
      title: 'Innovation Award',
      description: 'Received the company\'s Innovation Award for groundbreaking technical solutions.',
      icon: 'IV'
    },
    {
      id: 5,
      year: '2023',
      title: 'Chief Architect',
      description: 'Appointed as Chief Architect, leading the overall technical vision and strategy.',
      icon: 'V'
    },
    {
      id: 6,
      year: '2025',
      title: 'Celebrating Today',
      description: 'Another year of incredible achievements, mentorship, and leadership. Here\'s to many more.',
      icon: 'VI'
    }
  ]

  return (
    <div className="timeline-page page">
      <section className="timeline-header-section">
        <div className="container">
          <div className="header-decoration">
            <div className="header-line"></div>
            <h1 className="page-title">Timeline</h1>
            <div className="header-line"></div>
          </div>
          <p className="page-subtitle">Journey of achievements and milestones</p>
        </div>
      </section>

      <section className="timeline-content">
        <div className="container">
          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            
            {events.map((event, index) => (
              <div 
                key={event.id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-content-box">
                  <div className="timeline-icon">{event.icon}</div>
                  <div className="timeline-year">{event.year}</div>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>

          <div className="timeline-note">
            <div className="note-content">
              <h3>Customize Timeline</h3>
              <p>
                Edit <code>src/pages/Timeline.tsx</code> to add Naofumi's actual career milestones, achievements, and memorable moments.
              </p>
              <div className="note-example">
                <strong>Event Structure:</strong>
                <code>{`{
  id: 1,
  year: '2020',
  title: 'Milestone Title',
  description: 'Description of the achievement...',
  icon: '🚀' // Choose an appropriate emoji
}`}</code>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Timeline

