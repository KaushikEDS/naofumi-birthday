import './Videos.css'

const Videos = () => {
  // Actual videos from your collection
  const videos = [
    { 
      id: 1, 
      title: 'Epic Dance', 
      videoUrl: '/videos/526b3aba-84a6-4a8e-82a4-52a500327ffb.MP4'
    },
    { 
      id: 2, 
      title: 'Another Epic Dance', 
      videoUrl: '/videos/a07829f3-2a37-409b-a42c-39ebcd7df661.MP4'
    },
    { 
      id: 3, 
      title: 'Team Celebration', 
      videoUrl: '/videos/VID-20231204-WA0104.mp4'
    },
  ]

  return (
    <div className="videos-page page">
      <section className="videos-header-section">
        <div className="container">
          <div className="header-decoration">
            <div className="header-line"></div>
            <h1 className="page-title">Video Messages</h1>
            <div className="header-line"></div>
          </div>
          <p className="page-subtitle">Heartfelt birthday wishes from your team</p>
        </div>
      </section>

      <section className="videos-content">
        <div className="container">
          <div className="videos-grid">
            {videos.map((video, index) => (
              <div 
                key={video.id} 
                className="video-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="video-player">
                  <video 
                    controls 
                    preload="metadata"
                    className="video-element"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Videos
