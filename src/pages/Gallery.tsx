import './Gallery.css'

const Gallery = () => {
  // Placeholder images - replace with actual photos
  const photos = [
    { id: 1, src: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Photo+1', alt: 'Memory 1', category: 'Team' },
    { id: 2, src: 'https://via.placeholder.com/400x300/764ba2/ffffff?text=Photo+2', alt: 'Memory 2', category: 'Work' },
    { id: 3, src: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Photo+3', alt: 'Memory 3', category: 'Events' },
    { id: 4, src: 'https://via.placeholder.com/400x300/4ecdc4/ffffff?text=Photo+4', alt: 'Memory 4', category: 'Team' },
    { id: 5, src: 'https://via.placeholder.com/400x300/45b7d1/ffffff?text=Photo+5', alt: 'Memory 5', category: 'Work' },
    { id: 6, src: 'https://via.placeholder.com/400x300/f9ca24/ffffff?text=Photo+6', alt: 'Memory 6', category: 'Events' },
    { id: 7, src: 'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Photo+7', alt: 'Memory 7', category: 'Team' },
    { id: 8, src: 'https://via.placeholder.com/400x300/6c5ce7/ffffff?text=Photo+8', alt: 'Memory 8', category: 'Work' },
    { id: 9, src: 'https://via.placeholder.com/400x300/00b894/ffffff?text=Photo+9', alt: 'Memory 9', category: 'Events' },
  ]

  return (
    <div className="gallery-page page">
      <section className="gallery-header-section">
        <div className="container">
          <div className="header-decoration">
            <div className="header-line"></div>
            <h1 className="page-title">Gallery</h1>
            <div className="header-line"></div>
          </div>
          <p className="page-subtitle">Celebrating the moments we've shared together</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <div 
                key={photo.id} 
                className="gallery-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={photo.src} alt={photo.alt} />
                <div className="gallery-overlay">
                  <span className="photo-category">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-note">
            <div className="note-content">
              <h3>Add Your Photos</h3>
              <p>
                To add your own photos, place image files in the <code>public/photos/</code> folder
                and update the photos array in <code>src/pages/Gallery.tsx</code>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

