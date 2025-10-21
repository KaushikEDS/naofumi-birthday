import './Videos.css'

const Videos = () => {
  // Placeholder video data - replace with actual videos
  const videos = [
    { 
      id: 1, 
      title: 'Birthday Message from Team Alpha', 
      thumbnail: 'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Video+1',
      duration: '2:30'
    },
    { 
      id: 2, 
      title: 'Heartfelt Wishes from Team Beta', 
      thumbnail: 'https://via.placeholder.com/400x300/4ecdc4/ffffff?text=Video+2',
      duration: '3:15'
    },
    { 
      id: 3, 
      title: 'Special Message from Leadership', 
      thumbnail: 'https://via.placeholder.com/400x300/45b7d1/ffffff?text=Video+3',
      duration: '1:45'
    },
    { 
      id: 4, 
      title: 'Team Celebration Montage', 
      thumbnail: 'https://via.placeholder.com/400x300/f9ca24/ffffff?text=Video+4',
      duration: '4:20'
    },
    { 
      id: 5, 
      title: 'Memories and Milestones', 
      thumbnail: 'https://via.placeholder.com/400x300/6c5ce7/ffffff?text=Video+5',
      duration: '5:00'
    },
    { 
      id: 6, 
      title: 'Birthday Wishes Compilation', 
      thumbnail: 'https://via.placeholder.com/400x300/00b894/ffffff?text=Video+6',
      duration: '3:45'
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
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay">
                    <div className="play-button">
                      <span>▶</span>
                    </div>
                  </div>
                  <div className="video-duration">{video.duration}</div>
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="videos-note">
            <div className="note-content">
              <h3>Add Your Videos</h3>
              <p>
                To add video messages, you have two options:
              </p>
              
              <div className="note-option">
                <h4>Option 1: Local Videos</h4>
                <ol>
                  <li>Place video files in the <code>public/videos/</code> folder</li>
                  <li>Update the videos array in <code>src/pages/Videos.tsx</code></li>
                  <li>Add video element to display the video</li>
                </ol>
                <div className="note-example">
                  <code>{`<video controls width="100%">\n  <source src="/videos/message.mp4" type="video/mp4" />\n</video>`}</code>
                </div>
              </div>

              <div className="note-option">
                <h4>Option 2: Embedded Videos (YouTube/Vimeo)</h4>
                <ol>
                  <li>Upload videos to YouTube or Vimeo</li>
                  <li>Get the embed code or video ID</li>
                  <li>Use iframe to embed the video</li>
                </ol>
                <div className="note-example">
                  <code>{`<iframe\n  src="https://www.youtube.com/embed/VIDEO_ID"\n  width="100%"\n  height="315"\n  frameBorder="0"\n  allowFullScreen\n></iframe>`}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Videos

