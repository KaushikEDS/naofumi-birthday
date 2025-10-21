import './Videos.css'

const Videos = () => {
  // Actual videos from your collection
  const videos = [
    { 
      id: 1, 
      title: 'Birthday Message 1', 
      videoUrl: '/videos/526b3aba-84a6-4a8e-82a4-52a500327ffb.MP4',
      thumbnail: '/images/0447feaa-bde3-49c7-b671-ff6c1fc81188.jpg'
    },
    { 
      id: 2, 
      title: 'Birthday Message 2', 
      videoUrl: '/videos/a07829f3-2a37-409b-a42c-39ebcd7df661.MP4',
      thumbnail: '/images/115b2253-95a1-4ffc-bb95-38035e845722.jpg'
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
                    poster={video.thumbnail}
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
